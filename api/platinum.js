export default function handler(req,res){
res.status(200).json({
tier:"Platinum",
status:"Running",
mode:"Always-On",
agents:["Cloud","Local"]
})
}
