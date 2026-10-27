"""Self-host the Latin subsets of four open-source Google Fonts."""
from pathlib import Path
import re
import urllib.request

root = Path(__file__).resolve().parents[1] / 'frontend'
out = root / 'public/fonts'
out.mkdir(parents=True, exist_ok=True)
families = [('Bebas Neue', 'display-condensed'), ('Bangers', 'display-comic'), ('IM Fell English', 'display-gothic'), ('Special Elite', 'display-typewriter')]
rules = []
for family, filename in families:
    url = 'https://fonts.googleapis.com/css2?family=' + family.replace(' ', '+') + '&display=swap'
    request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    css = urllib.request.urlopen(request, timeout=30).read().decode()
    blocks = re.findall(r'@font-face\s*\{.*?\}', css, re.S)
    block = blocks[-1]
    source = re.search(r'url\((https://fonts.gstatic.com/[^)]+)\)', block).group(1)
    extension = '.woff2' if '.woff2' in source else '.ttf'
    target = out / (filename + extension)
    target.write_bytes(urllib.request.urlopen(source, timeout=30).read())
    rules.append(block.replace(source, '/fonts/' + target.name))
    license_url = 'https://raw.githubusercontent.com/google/fonts/main/ofl/' + family.lower().replace(' ', '') + '/OFL.txt'
    if family == 'Special Elite':
        license_url = 'https://raw.githubusercontent.com/google/fonts/main/apache/specialelite/LICENSE.txt'
    license_target = out / (filename + '-OFL.txt')
    license_target.write_bytes(urllib.request.urlopen(license_url, timeout=30).read())
    print(f'{family}: {target.name} ({target.stat().st_size} bytes)')
(root / 'assets/scss/_universe-fonts.scss').write_text('\n\n'.join(rules) + '\n', encoding='utf-8')
