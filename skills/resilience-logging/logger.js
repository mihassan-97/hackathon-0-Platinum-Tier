import fs from "fs";

export function log(action,data){
fs.appendFileSync(
"Vault/Logs/actions.json",
JSON.stringify({
time:new Date().toISOString(),
action,
data
})+"\n"
)
}
