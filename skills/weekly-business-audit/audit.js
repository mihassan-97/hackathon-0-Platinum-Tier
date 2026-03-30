import fs from "fs";
import { getFinancials } from "../../mcp/accounting/odoo.js";

export async function runAudit(){

let completed=0

if(fs.existsSync("Vault/Business/Done"))
completed=fs.readdirSync("Vault/Business/Done").length

const finance=await getFinancials()

const report=`

CEO WEEKLY BRIEFING

Completed Tasks: ${completed}

Revenue: ${finance.revenue}

Expenses: ${finance.expenses}

Generated: ${new Date().toISOString()}

`

fs.writeFileSync("Vault/Briefings/CEO.md",report)

}
