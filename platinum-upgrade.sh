#!/bin/bash

echo "Platinum Tier Setup Starting..."

mkdir -p Vault/Needs_Action/email
mkdir -p Vault/Needs_Action/social
mkdir -p Vault/Plans/email
mkdir -p Vault/Plans/social
mkdir -p Vault/Pending_Approval/email
mkdir -p Vault/Pending_Approval/social
mkdir -p Vault/In_Progress/cloud_agent
mkdir -p Vault/In_Progress/local_agent
mkdir -p Vault/Updates
mkdir -p cloud local watchdog agents mcp/cloud_odoo

cat << 'EOL' > cloud/cloud_agent.js
import fs from "fs";
import path from "path";

const inbox="Vault/Needs_Action/email";
const claim="Vault/In_Progress/cloud_agent";
const pending="Vault/Pending_Approval/email";
const updates="Vault/Updates";

export async function runCloud(){

if(!fs.existsSync(inbox)) return;

for(const file of fs.readdirSync(inbox)){

const src=path.join(inbox,file);
const dst=path.join(claim,file);

fs.renameSync(src,dst);

fs.writeFileSync(
path.join(pending,file),
"Draft created by Cloud Agent"
);

fs.writeFileSync(
path.join(updates,file+".txt"),
"Cloud drafted"
);

fs.unlinkSync(dst);
}
}
EOL

cat << 'EOL' > local/local_agent.js
import fs from "fs";
import path from "path";

const pending="Vault/Pending_Approval/email";
const claim="Vault/In_Progress/local_agent";

export async function runLocal(){

if(!fs.existsSync(pending)) return;

for(const file of fs.readdirSync(pending)){

const src=path.join(pending,file);
const dst=path.join(claim,file);

fs.renameSync(src,dst);

fs.appendFileSync(
"Dashboard.md",
"\nApproved: "+file+"\n"
);

fs.unlinkSync(dst);
}
}
EOL

cat << 'EOL' > agents/platinum_orchestrator.js
import { runCloud } from "../cloud/cloud_agent.js";
import { runLocal } from "../local/local_agent.js";

async function loop(){

await runCloud();
await runLocal();

setTimeout(loop,5000);
}

loop();
EOL

cat << 'EOL' > watchdog/watchdog.js
import { spawn } from "child_process";

function start(){

const p=spawn("node",["agents/platinum_orchestrator.js"],{
stdio:"inherit"
});

p.on("exit",()=>setTimeout(start,2000));

}

start();
EOL

cat << 'EOL' > cloud/git_sync.sh
#!/bin/bash
while true
do
git pull
git add .
git commit -m "cloud sync" || true
git push
sleep 30
done
EOL

cat << 'EOL' > Dashboard.md
# Executive Dashboard
Local agent is single writer.
EOL

cat << 'EOL' >> .gitignore
.env
tokens
banking
whatsapp
secrets
EOL

echo "Platinum Tier Ready"
