import { spawn } from "child_process";

function start(){

const p=spawn("node",["agents/platinum_orchestrator.js"],{
stdio:"inherit"
});

p.on("exit",()=>setTimeout(start,2000));

}

start();
