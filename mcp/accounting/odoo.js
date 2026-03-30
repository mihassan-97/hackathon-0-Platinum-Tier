import { log } from "../../skills/resilience-logging/logger.js";

export async function createInvoice(data){

log("odoo_invoice_create",data)

return {
status:"created",
id:Date.now()
}

}

export async function getFinancials(){

return {
revenue:1000,
expenses:200
}

}
