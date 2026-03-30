export async function retry(fn,retries=3){

try{
return await fn()
}catch(e){

if(retries<=0) throw e

await new Promise(r=>setTimeout(r,1000))
return retry(fn,retries-1)

}

}
