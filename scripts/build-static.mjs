import { cp, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const projectDirectory = new URL("../", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of ["index.html", "app.js"]) {
  await cp(new URL(file, projectDirectory), new URL(file, outputDirectory));
}

await cp(
  new URL("memes/", projectDirectory),
  new URL("memes/", outputDirectory),
  { recursive: true }
);

console.log("Static site created in dist/");
