export default function handler(req,res){
res.status(200).json({
tier:"Platinum",
status:"Running",
agents:["Cloud","Local"],
mode:"Always-On"
})
}
