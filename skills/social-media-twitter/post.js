import { log } from "../resilience-logging/logger.js";

export async function post(message){

log("twitter_post",message)

return "posted"

}
