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
