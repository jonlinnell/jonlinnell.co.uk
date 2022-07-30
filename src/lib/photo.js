import { readFile } from "fs/promises";
import path from "path";

export async function getPhotoGallery() {
  const gallery = JSON.parse(
    await readFile(path.resolve(process.cwd(), "content", "photography", "gallery.json"), "utf-8")
  );

  return gallery;
}
