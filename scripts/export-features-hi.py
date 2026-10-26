import base64
import io
import re
from pathlib import Path

from PIL import Image

root = Path(r"d:\crm_software\cedar-payroll-website\public\assets\redesign")
svg = (root / "features.svg").read_text(encoding="utf-8")
match = re.search(r'xlink:href="data:image/png;base64,([^"]+)"', svg)
if not match:
    raise SystemExit("embedded png not found")

im = Image.open(io.BytesIO(base64.b64decode(match.group(1)))).convert("RGBA")
print("native", im.size)
hi = im.resize((im.width * 2, im.height * 2), Image.Resampling.LANCZOS)
out = root / "features-hi.png"
hi.save(out, "PNG")
print("saved", hi.size, out)
