import base64
import io
import re
from pathlib import Path

from PIL import Image

svg_path = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign\features.svg")
out_4k = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign\features-4k.png")
out_matched = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign\features-matched.png")

svg = svg_path.read_text(encoding="utf-8")
match = re.search(r"xlink:href=\"data:image/png;base64,([^\"]+)\"", svg)
if not match:
    raise SystemExit("embedded png not found")

raw = base64.b64decode(match.group(1))
im = Image.open(io.BytesIO(raw)).convert("RGBA")
print("source", im.size)

scale = 3
up = im.resize((im.width * scale, im.height * scale), Image.Resampling.LANCZOS)
up.save(out_4k, "PNG", optimize=True)
print("saved 4k", up.size)

tr, tg, tb = 248, 247, 244
target = (tr, tg, tb, 255)
pix = up.load()
w, h = up.size
changed = 0
for y in range(h):
    edge_y = y < 12 or y >= h - 12
    for x in range(w):
        r, g, b, a = pix[x, y]
        mn = min(r, g, b)
        mx = max(r, g, b)
        spread = mx - mn
        edge = edge_y or x < 12 or x >= w - 12
        cream = 228 <= mn <= 251 and spread <= 20
        fringe = a < 250 and mn >= 220
        border_white = edge and mn >= 248 and spread <= 12
        if cream or fringe or border_white:
            pix[x, y] = target
            changed += 1

up.save(out_matched, "PNG", optimize=True)
print("changed", changed, "of", w * h)
print("saved matched", out_matched)
