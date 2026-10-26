from PIL import Image

src = r"d:\crm_software\cedar-payroll-website\public\assets\redesign\home-hero-4k.png"
out = r"d:\crm_software\cedar-payroll-website\public\assets\redesign\home-hero-matched.png"

im = Image.open(src).convert("RGBA")
w, h = im.size
pix = im.load()
tr, tg, tb = 248, 247, 244
target = (tr, tg, tb, 255)
changed = 0

for y in range(h):
    edge_y = y < 10 or y >= h - 10
    for x in range(w):
        r, g, b, a = pix[x, y]
        mn = min(r, g, b)
        mx = max(r, g, b)
        spread = mx - mn
        edge = edge_y or x < 10 or x >= w - 10
        cream = 228 <= mn <= 251 and spread <= 20
        fringe = a < 250 and mn >= 220
        border_white = edge and mn >= 248 and spread <= 12
        if cream or fringe or border_white:
            pix[x, y] = target
            changed += 1

im.save(out, "PNG", optimize=True)
print("changed", changed, "of", w * h)
