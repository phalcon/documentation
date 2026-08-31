/**
 * MDX globals registry — components available inside MDX without `import`.
 * Wired via `<Content components={components} />` in `[...slug].astro`.
 * Add new components here as you build (or install) them.
 */

import {
  ApiBadge,
  ApiGroup,
  ApiItem,
  ApiList,
  ApiTree,
  ApiUsedBy,
  ApiUses,
  SourceLink,
} from "./components/api";
import { Aside } from "./components/ui/aside";
import Render from "./components/Render.astro";
import { Card } from "./components/ui/card";
import { CardGrid } from "./components/ui/card-grid";
import { PackageManagers } from "./components/ui/package-managers";
import { Step, Steps } from "./components/ui/steps";
import { Tabs, TabItem } from "./components/ui/tabs";

export const components = {
  ApiBadge,
  ApiGroup,
  ApiItem,
  ApiList,
  ApiTree,
  ApiUsedBy,
  ApiUses,
  Aside,
  Card,
  CardGrid,
  PackageManagers,
  Render,
  SourceLink,
  Step,
  Steps,
  TabItem,
  Tabs,
};
