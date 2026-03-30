import { runCloud } from "../cloud/cloud_agent.js";
import { runLocal } from "../local/local_agent.js";

async function loop(){

await runCloud();
await runLocal();

setTimeout(loop,5000);
}

loop();
