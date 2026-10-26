import base64
import io
import re
from pathlib import Path

from PIL import Image

src = Path(r"C:\Users\malai\Downloads\cedar website\whoweserve.svg")
root = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign")
root.mkdir(parents=True, exist_ok=True)

text = src.read_text(encoding="utf-8")
match = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', text)
if not match:
    raise SystemExit("embedded png not found")

im = Image.open(io.BytesIO(base64.b64decode(match.group(1)))).convert("RGBA")
print("native", im.size)
hi = im.resize((im.width * 2, im.height * 2), Image.Resampling.LANCZOS)
out = root / "whoweserve-hi.png"
hi.save(out, "PNG", optimize=True)
print("saved", hi.size, out)
