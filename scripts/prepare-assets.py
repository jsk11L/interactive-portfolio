"""Create web-sized portfolio artwork without changing the source images."""
import ast
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "frontend" / "public"


def export_seed():
    tree = ast.parse((ROOT / "backend/app/core/seed.py").read_text(encoding="utf-8"))
    names = {"PROFILE_DATA": "profile", "EXPERIENCES_DATA": "experiences",
             "SKILLS_DATA": "skills", "PROJECTS_DATA": "projects"}
    data = {}
    for node in tree.body:
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id in names:
                    data[names[target.id]] = ast.literal_eval(node.value)
    for project in data["projects"]:
        project["images"] = [path.replace(".png", ".webp") for path in project["images"]]
    output = ROOT / "frontend/data/portfolio.json"
    output.parent.mkdir(parents=True, exist_ok=True)
    # The exported JSON becomes the editable source of truth after migration.
    if not output.exists():
        output.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    export_seed()
    for source in (PUBLIC / "images/projects").glob("*-cover.png"):
        with Image.open(source) as image:
            image.thumbnail((1400, 900))
            image.convert("RGB").save(source.with_suffix(".webp"), "WEBP", quality=85, method=6)
            print(f"{source.name}: {source.stat().st_size:,} -> {source.with_suffix('.webp').stat().st_size:,} bytes")
