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
