"use strict";
import { Controller } from "./controller/controller";   
window.addEventListener("load", start);
const controller = new Controller();
function start() {
    controller.initialize();
    console.log("start");
}