import { log } from "../resilience-logging/logger.js";

export async function post(message){

log("instagram_post",message)

return "posted"

}
