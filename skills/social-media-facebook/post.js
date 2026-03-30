import { log } from "../resilience-logging/logger.js";

export async function post(message){

log("facebook_post",message)

return "posted"

}
