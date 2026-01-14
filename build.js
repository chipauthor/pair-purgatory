import * as Path from "node:path";
import { glob as Glob } from "glob";
import * as FileSystem from "node:fs/promises";

Glob("./src/story/*/").then(async files => {
    const episodeTemplate = await FileSystem.readFile("./include/episode-template.html", "utf8");
    
});
