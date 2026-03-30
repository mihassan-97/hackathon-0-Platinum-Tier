import { processTasks } from "./planner.js";

async function run() {
  console.log("Gold Tier Autonomous Employee Running...");

  while (true) {
    await processTasks();
    await new Promise(r => setTimeout(r, 5000));
  }
}

run();
