import fs from "fs";
import path from "path";
import { log } from "../skills/resilience-logging/logger.js";

const DOMAINS = [
  "Vault/Business/Needs_Action",
  "Vault/Personal/Needs_Action"
];

export async function loop() {
  for (const dir of DOMAINS) {

    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);

    for (const file of files) {
      const src = path.join(dir, file);
      const dst = src.replace("Needs_Action", "Done");

      try {
        fs.renameSync(src, dst);

        console.log("Processed:", file);
        log("task_processed", file);

      } catch (err) {

        console.log("Queued:", file);
        log("task_failed", file);

      }
    }
  }
}
