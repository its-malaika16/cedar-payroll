import base64
import io
import re
from pathlib import Path

from PIL import Image

src = Path(r"C:\Users\malai\Downloads\cedar website\growing.svg")
root = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign")
root.mkdir(parents=True, exist_ok=True)

svg = src.read_text(encoding="utf-8")
match = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', svg)
if not match:
    raise SystemExit("embedded png not found")

im = Image.open(io.BytesIO(base64.b64decode(match.group(1)))).convert("RGBA")
print("native", im.size, im.mode)

# Display ~560 CSS px; keep at least 2x pixels without exploding huge sources.
target_w = max(im.width, 1372)
if im.width < target_w:
    scale = target_w / im.width
    hi = im.resize(
        (round(im.width * scale), round(im.height * scale)),
        Image.Resampling.LANCZOS,
    )
else:
    hi = im

out = root / "growing-hi.png"
hi.save(out, "PNG")
print("saved", hi.size, out)
