import requests
import json

print("Getting NFR Reactions")

comments = 'https://api.github.com/repos/phalcon/cphalcon/issues/14608/comments?page='
result = {}

i = 1  # Assuming a page number for the example
url = f"{comments}{i}"
headers = {
    'Accept': 'application/vnd.github.squirrel-girl-preview+json',
    'User-Agent': 'Phalcon Agent'
}

response = requests.get(url, headers=headers)
content = response.text

print(f"Got content {i}")
data = json.loads(content)

for comment in data:
    id = comment.get('id', '')
    url = comment.get('html_url', '')
    body = comment.get('body', '')
    reactions = comment.get('reactions', {})
    plusone = reactions.get('+1', '')

    body = body.split('\n')[0].replace('\r', '').replace('\r\n', '')
    plusone = f"{int(plusone):03}"
    result[f"{plusone}-{id}"] = {
        'reaction': plusone,
        'body': f"[{body}]({url})"
    }

print("Sorting Results")
sorted_result = dict(sorted(result.items(), key=lambda item: item[0], reverse=True))

print("Creating Content")
output = "| Votes  | Description             |\n"
output += "|--------|-------------------------|\n"
for item in sorted_result.values():
    output += f"| {item['reaction']} | {item['body']} |\n"

output += "\n"

print(output)
file_name = 'docs/new-feature-request-list.md'
with open(file_name, 'a') as file:
    file.write(output)
