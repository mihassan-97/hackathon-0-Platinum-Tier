export default function handler(req,res){
res.status(200).json({
agent:"Personal AI Employee",
tier:"Platinum",
status:"Operational",
mode:"Always-On Cloud + Local Executive",
cloud_agent:{
role:"Perception and Drafting",
write_access:"/Vault/Pending_Approval/",
execution_permission:false
},
local_agent:{
role:"Executive Authority",
write_access:"Dashboard.md",
execution_permission:true
},
protocol:"Claim-by-Move",
sync:"Git Auto Sync",
security:"Isolated Secrets",
health:"Watchdog Active"
})
}
