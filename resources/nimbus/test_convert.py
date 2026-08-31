"""Tests for convert.py. Run from the repository root:

    python -m unittest resources/nimbus/test_convert.py -v
"""

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

import convert  # noqa: E402

FIXTURES = Path(__file__).parent / "fixtures"


def body_of(text):
    """Return the part of a converted page after the frontmatter."""
    return text.split("---\n", 2)[2].lstrip("\n")


class TitleTest(unittest.TestCase):
    def test_first_h1_becomes_title_and_rule_is_removed(self):
        page = "# Access Control Lists (ACL)\n\n- - -\n\nIntro.\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertTrue(result.startswith('---\ntitle: "Access Control Lists (ACL)"\n---\n\n'))
        self.assertEqual(body_of(result), "Intro.\n")

    def test_second_h1_is_kept(self):
        page = "# One\n\ntext\n\n# Two\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("# Two", body_of(result))
        self.assertNotIn("# One", body_of(result))

    def test_keep_h1_flag_keeps_the_heading(self):
        page = "# One\n\ntext\n"
        result = convert.convert_page(page, "", FIXTURES, keep_h1=True)
        self.assertTrue(result.startswith('---\ntitle: "One"\n---\n\n'))
        self.assertIn("# One", body_of(result))

    def test_h1_inside_fence_is_not_the_title(self):
        page = "```bash\n# comment\n```\n\n# Real\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('title: "Real"', result)
        self.assertIn("```bash\n# comment\n```", body_of(result))

    def test_page_without_h1_uses_fallback_title(self):
        page = "---\nhide:\n    - navigation\n---\n\n## Acl\\AbstractElement\n"
        result = convert.convert_page(page, "", FIXTURES, fallback_title="Phalcon Acl")
        self.assertTrue(result.startswith('---\ntitle: "Phalcon Acl"\nsidebar: false\n---\n\n'))
        self.assertIn("## Acl\\AbstractElement", body_of(result))


class FrontmatterTest(unittest.TestCase):
    def test_hide_navigation_and_toc(self):
        page = "---\nhide:\n    - navigation\n    - toc\n---\n\n# T\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("sidebar: false\n", result)
        self.assertIn("tableOfContents: false\n", result)
        self.assertNotIn("hide:", result)

    def test_title_with_quotes_is_escaped(self):
        page = '# The "Db" Layer\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('title: "The \\"Db\\" Layer"', result)


class AdmonitionTest(unittest.TestCase):
    def test_admonition_with_title(self):
        page = '# T\n\n!!! warning "WARNING"\n\n    Body line.\n\nAfter.\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertEqual(body_of(result), ":::warning[WARNING]\nBody line.\n:::\n\nAfter.\n")

    def test_admonition_without_title_and_success_maps_to_tip(self):
        page = "# T\n\n!!! success\n    ok\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertEqual(body_of(result), ":::tip\nok\n:::\n\n")

    def test_admonition_body_keeps_indented_fence(self):
        page = '# T\n\n!!! info "NOTE"\n\n    Text\n\n    ```php\n    echo 1;\n    ```\n\nAfter.\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertEqual(
            body_of(result),
            ":::info[NOTE]\nText\n\n```php\necho 1;\n```\n:::\n\nAfter.\n",
        )

    def test_admonition_inside_fence_is_untouched(self):
        page = "# T\n\n```md\n!!! info\n    x\n```\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("```md\n!!! info\n    x\n```", body_of(result))


class LinkTest(unittest.TestCase):
    # nimbus lint requires root-relative internal links (`/5.20/foo/`).
    def test_inline_link_from_root_page(self):
        page = "# T\n\n[ACL](acl.md) [B](acl.md#x)\n"
        result = convert.convert_page(page, "", FIXTURES, version="5.20")
        self.assertIn("[ACL](/5.20/acl/) [B](/5.20/acl/#x)", result)

    def test_reference_definition_with_anchor(self):
        page = "# T\n\n[html-breadcrumbs]: api/phalcon_html.md#htmlbreadcrumbs\n"
        result = convert.convert_page(page, "", FIXTURES, version="5.20")
        self.assertIn("[html-breadcrumbs]: /5.20/api/phalcon_html/#htmlbreadcrumbs\n", result)

    def test_link_from_api_page_resolves_against_its_directory(self):
        page = "# T\n\n[Acl](phalcon_acl.md) [Db](../db-layer.md#x)\n"
        result = convert.convert_page(page, "api", FIXTURES, version="5.20")
        self.assertIn("[Acl](/5.20/api/phalcon_acl/) [Db](/5.20/db-layer/#x)", result)

    def test_slash_before_anchor_typo_is_absorbed(self):
        page = "# T\n\n[a](api/phalcon_di.md/#difactorydefault)\n\n[b]: api/phalcon_config.md/#configconfig\n"
        result = convert.convert_page(page, "", FIXTURES, version="5.12")
        self.assertIn("[a](/5.12/api/phalcon_di/#difactorydefault)", result)
        self.assertIn("[b]: /5.12/api/phalcon_config/#configconfig", result)

    def test_link_to_index_md_collapses_to_directory(self):
        result = convert.convert_page("# T\n\n[API](api/index.md)\n", "", FIXTURES, version="5.20")
        self.assertIn("[API](/5.20/api/)", result)

    def test_external_md_link_is_untouched(self):
        page = "# T\n\n[x](https://example.com/file.md)\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("[x](https://example.com/file.md)", result)

    def test_link_inside_fence_is_untouched(self):
        page = "# T\n\n```md\n[x](acl.md)\n```\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("```md\n[x](acl.md)\n```", result)


class AssetTest(unittest.TestCase):
    def test_image_links_become_absolute_version_paths(self):
        # Astro resolves relative image paths against the content file at
        # build time; absolute paths are served from public/<version>/.
        page = '# T\n\n![a](assets/images/x.png)\n<img src="assets/images/y.png">\n'
        result = convert.convert_page(page, "", FIXTURES, version="5.20")
        self.assertIn("![a](/assets/images/x.png)", result)
        self.assertIn('<img src="/assets/images/y.png" />', result)

    def test_image_links_from_index_page_are_absolute_too(self):
        page = "# T\n\n![a](assets/images/x.png)\n"
        result = convert.convert_page(page, "api", FIXTURES, version="5.20")
        self.assertIn("![a](/assets/images/x.png)", result)

    def test_parent_relative_image_links_from_api_pages(self):
        page = '# T\n\n![a](../assets/images/x.svg) <img src="./assets/y.png">\n'
        result = convert.convert_page(page, "api", FIXTURES, version="5.11")
        self.assertIn("![a](/assets/images/x.svg)", result)
        self.assertIn('<img src="/assets/y.png" />', result)


class MaterialMarkupTest(unittest.TestCase):
    def test_link_with_class_becomes_html_link(self):
        page = "# T\n\n[:material-github: Source](https://x){ .src-btn }\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('<a class="src-btn" href="https://x">Source</a>\n', result)
        self.assertNotIn(":material-github:", result)

    def test_attribute_list_on_its_own_line_removed(self):
        page = "# T\n\n__Uses__ `A`\n{ .api-uses }\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("__Uses__ `A`\n\n", result)
        self.assertNotIn(".api-uses", result)

    def test_markdown_attribute_removed_from_div(self):
        page = '# T\n\n<div class="api-tree" markdown>\n\n- a\n\n</div>\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('<div class="api-tree">\n\n- a\n\n</div>', result)

    def test_twig_comment_inside_fence_is_untouched(self):
        page = "# T\n\n```twig\n{# comment #}\n```\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("{# comment #}", result)


class HeadingIdTest(unittest.TestCase):
    def test_heading_with_explicit_id_becomes_html_heading(self):
        page = "# T\n\n#### `handle(string $uri = null): array<string>` { #mvcapplication-handle }\n\ntext\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn(
            '<h4 id="mvcapplication-handle"><code>handle(string $uri = null): '
            "array&lt;string&gt;</code></h4>\n\ntext",
            result,
        )

    def test_heading_id_without_spaces_and_plain_text(self):
        page = "# T\n\n### Events {#acl-events}\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('<h3 id="acl-events">Events</h3>', result)


class MdxSafetyTest(unittest.TestCase):
    def test_braces_in_prose_are_escaped(self):
        result = convert.convert_page("# T\n\nUse curly braces {} here.\n", "", FIXTURES)
        self.assertIn("Use curly braces \\{\\} here.", result)

    def test_braces_in_inline_code_and_fences_are_kept(self):
        page = "# T\n\nUse `{id}` and:\n\n```twig\n{{ name }}\n```\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("Use `{id}` and:", result)
        self.assertIn("```twig\n{{ name }}\n```", result)

    def test_void_tags_are_self_closed(self):
        page = '# T\n\n<img src="assets/images/a.png" alt="a">\nline<br>\n'
        result = convert.convert_page(page, "", FIXTURES, version="5.20")
        self.assertIn('<img src="/assets/images/a.png" alt="a" />', result)
        self.assertIn("line<br />", result)

    def test_bare_less_than_is_escaped(self):
        result = convert.convert_page("# T\n\n<3 Phalcon and a < b\n", "", FIXTURES)
        self.assertIn("&lt;3 Phalcon and a &lt; b", result)

    def test_generic_type_is_not_a_component_tag(self):
        page = "# T\n\n@extends AbstractLocator<Access> and min<L, but <span>x</span>\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("AbstractLocator&lt;Access> and min&lt;L, but <span>x</span>", result)

    def test_lowercase_words_that_are_not_html_tags_are_text(self):
        page = '# T\n\narray<string, T> and "<hashed>" but <div class="x"></div> and <!-- c -->\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('array&lt;string, T> and "&lt;hashed>" but <div class="x"></div> and <!-- c -->', result)

    def test_bare_inline_tag_without_closing_tag_is_text(self):
        page = "# T\n\nProduce a <a> tag, an <img> tag, but <a>x</a> stays.\n<div>\n\ntext\n\n</div>\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("Produce a &lt;a> tag, an &lt;img> tag, but <a>x</a> stays.", result)
        self.assertIn("<div>\n\ntext\n\n</div>", result)

    def test_bare_inline_tag_closed_on_a_later_line_is_kept(self):
        page = "# T\n\n<span>\nline one\nline two\n</span>\n\nbut <span> alone\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("<span>\nline one\nline two\n</span>\n\nbut &lt;span> alone", result)


class CodeBlockTest(unittest.TestCase):
    def test_standalone_code_element_becomes_php_fence(self):
        page = '# T\n\n<code>\n$a = [\n    "k" => 1,\n];\n\necho $a["k"];\n</code>\n\nAfter <code>x</code>.\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('```php\n$a = [\n    "k" => 1,\n];\n\necho $a["k"];\n```\n\nAfter <code>x</code>.', result)

    def test_description_span_with_blank_line_is_joined(self):
        page = '# T\n\n<span class="desc">Column not nullable?\n\nSecond line</span>\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('<span class="desc">Column not nullable? Second line</span>', result)


class FenceTest(unittest.TestCase):
    def test_fence_opening_a_list_item_is_one_block(self):
        page = "# T\n\n- ```\n  front_exit_status_int int<0,254>\n  ```\n    - text with {braces}\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("- ```\n  front_exit_status_int int<0,254>\n  ```\n    - text with \\{braces\\}", result)

    def test_fence_closed_with_leading_space_is_one_block(self):
        page = '# T\n\n```php\n$a = 1;\n ```\n\n!!! warning "SECURITY"\n\n    Body.\n\n```php\n$b = 2;\n```\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn(":::warning[SECURITY]\nBody.\n:::", result)
        self.assertIn("```php\n$a = 1;\n ```", result)

    def test_apacheconfig_fence_becomes_apache(self):
        page = "# T\n\n```apacheconfig\nRewriteEngine On\n```\n"
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("```apache\nRewriteEngine On\n```", result)

    def test_title_drops_html_tags(self):
        page = '# <img src="assets/images/quill-mark.svg" height="26" alt=""> Quill\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn('title: "Quill"', result)

    def test_angle_autolink_becomes_markdown_link(self):
        result = convert.convert_page("# T\n\nSee <https://phalcon.io/> now\n", "", FIXTURES)
        self.assertIn("See [https://phalcon.io/](https://phalcon.io/) now", result)


class SidebarTest(unittest.TestCase):
    NAV = [
        {"Home": [
            {"Introduction": "introduction.md"},
            {"Changelog": [
                {"Current Version": "https://github.com/phalcon/cphalcon/blob/5.0.x/CHANGELOG-5.0.md"},
                {"Releases": "releases.md"},
            ]},
        ]},
        {"Core": [{"Micro": "application-micro.md"}]},
        {"API": "api/index.md"},
        {"Blog": "https://blog.phalcon.io/"},
    ]
    TITLES = {
        "introduction": "Introduction",
        "releases": "Releases",
        "application-micro": "Micro Applications",
        "api": "API Index",
    }

    def test_nav_becomes_sidebar_items(self):
        items = convert.build_sidebar(self.NAV, self.TITLES, "5.20")
        self.assertEqual(
            items,
            [
                {"label": "Home", "collapsed": True, "items": [
                    "introduction",
                    {"label": "Changelog", "collapsed": True, "items": [
                        {"label": "Current Version", "link": "https://github.com/phalcon/cphalcon/blob/5.0.x/CHANGELOG-5.0.md"},
                        "releases",
                    ]},
                ]},
                {"label": "Core", "collapsed": True, "items": [{"label": "Micro", "link": "/5.20/application-micro/"}]},
                {"label": "API", "link": "/5.20/api/"},
                {"label": "Blog", "link": "https://blog.phalcon.io/"},
            ],
        )

    def test_mkdocs_yml_with_python_tags_loads(self):
        nav = convert.load_nav(FIXTURES / "mkdocs.yml")
        self.assertEqual(nav, [{"Home": [{"Introduction": "introduction.md"}]}])


class RedirectTest(unittest.TestCase):
    def test_stubs_become_version_redirects(self):
        redirects = convert.find_redirects(FIXTURES / "stubs", "5.20")
        self.assertEqual(
            redirects,
            {
                "/5.20/": "/5.20/introduction/",
                "/5.20/http-request/": "/5.20/request/",
            },
        )

    def test_redirect_maps_of_the_mkdocs_plugin_are_included(self):
        redirects = convert.find_redirects(FIXTURES / "src-same", "5.15", FIXTURES / "mkdocs.yml")
        self.assertEqual(
            redirects,
            {
                "/5.15/": "/5.15/introduction/",
                "/5.15/loader/": "/5.15/autoload/",
                "/5.15/old/": "/5.15/new/#section",
            },
        )


class GridCardsTest(unittest.TestCase):
    def test_material_grid_becomes_card_grid(self):
        page = (
            "# T\n\nIntro :rocket:\n\n"
            '<div class="grid cards" markdown>\n\n'
            "- :octicons-discussion-closed-16:{ .lg .middle } __Chat - QA__\n\n"
            "  ---\n\n"
            "  [:octicons-chevron-right-12: Discord Chat][discord]\n\n"
            "  [:octicons-chevron-right-12: Discussions][discussions]\n\n"
            "- :octicons-video-16:{ .lg .middle } __Videos__\n\n"
            "  ---\n\n"
            "  [:octicons-chevron-right-12: YouTube][youtube]\n\n"
            "</div>\n\n[discord]: https://phalcon.io/discord\n"
        )
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("Intro 🚀", result)
        self.assertIn(
            "<CardGrid>\n"
            '<Card title="Chat - QA" icon="ph:chats-circle">\n\n'
            "[Discord Chat][discord]\n\n[Discussions][discussions]\n\n"
            "</Card>\n"
            '<Card title="Videos" icon="ph:video">\n\n'
            "[YouTube][youtube]\n\n"
            "</Card>\n"
            "</CardGrid>",
            result,
        )
        self.assertNotIn("octicons", result)
        self.assertNotIn("&lt;Card", result)


class RegisterTest(unittest.TestCase):
    def test_versions_sort_newest_first(self):
        versions = sorted(["5.9", "5.20", "6.0", "5.11"], key=convert.version_key, reverse=True)
        self.assertEqual(versions, ["6.0", "5.20", "5.11", "5.9"])

    def test_content_config_lists_every_version_literally(self):
        source = convert.content_config_source(["5.20", "5.19"])
        self.assertIn('"docs-5.20": defineCollection(docsCollection({ base: "docs-5.20", schemaFields })),', source)
        self.assertIn('"docs-5.19": defineCollection(docsCollection({ base: "docs-5.19", schemaFields })),', source)
        self.assertIn("docs: defineCollection(docsCollection({ schemaFields })),", source)

    def test_versions_module_exports_list_sidebars_and_redirects(self):
        source = convert.versions_module_source(["5.20", "5.19"])
        self.assertIn('export const versions = ["5.20", "5.19"];', source)
        self.assertIn('import sidebar_5_20 from "./sidebar/5.20.mjs";', source)
        self.assertIn('"5.19": sidebar_5_19,', source)
        self.assertIn("...redirects_5_19,", source)


class OverrideTest(unittest.TestCase):
    OUT = Path(__file__).parent / "work" / "test-overrides"

    def setUp(self):
        import shutil

        shutil.rmtree(self.OUT, ignore_errors=True)
        self.OUT.mkdir(parents=True)

    def test_common_override_applies_when_the_source_is_identical(self):
        count = convert.apply_overrides(FIXTURES / "overrides", "5.19", FIXTURES / "src-same", self.OUT)
        self.assertEqual(count, 1)
        self.assertIn("Hand-written for /5.19/.", (self.OUT / "intro.mdx").read_text())
        self.assertFalse((self.OUT / "special.mdx").exists())

    def test_common_override_is_skipped_when_the_source_differs(self):
        count = convert.apply_overrides(FIXTURES / "overrides", "5.19", FIXTURES / "src-other", self.OUT)
        self.assertEqual(count, 0)

    def test_version_override_always_applies(self):
        count = convert.apply_overrides(FIXTURES / "overrides", "5.20", FIXTURES / "src-same", self.OUT)
        self.assertEqual(count, 2)
        self.assertIn("Specific.", (self.OUT / "special.mdx").read_text())


class SnippetTest(unittest.TestCase):
    def test_snippet_is_inlined(self):
        page = '# T\n\n--8<-- "assets/fragment.md"\n'
        result = convert.convert_page(page, "", FIXTURES)
        self.assertIn("<p>fragment</p>\n", result)
        self.assertNotIn("--8<--", result)


if __name__ == "__main__":
    unittest.main()
