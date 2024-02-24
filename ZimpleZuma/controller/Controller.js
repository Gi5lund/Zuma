"use strict";
//import {LinkedList} from "../model/model.js"; 
import {View} from "../view/view.js";   
import { Node } from "../model/ballNode.js"; 
import {Model} from "../model/model.js";

export class Controller{
    constructor(){
        this.model=new Model();
        this.view=new View(this);
        this.gameOver=true;
    }
    initialize(){
        if(this.gameOver){
            console.log("initialize - starting game");
            this.model.initList();
            this.gameOver=false;
            this.view.updateList();
            this.view.updateCannon();
        }
        
        console.log("game in progress");
        return;
    }
    abortGame(){
        console.log("abort game");
        this.gameOver=true;
        this.model.list=new LinkedList();
        this.view.update();
    }
    modelUpdate(){
        this.view.updateList();
    }
    loadCannon(){
        this.model.loadCannon();
        this.view.updateCannon();
    }
    insertBallLast(){
        this.model.insertBallLast();
    }
    insertBallFirst(){
        this.model.insertBallFirst();
    }
    insertBallAfter(aim){
        this.model.inserBallAfter(aim);
    }
    insertBallBefore(aim){
        this.model.insertBallBefore(aim);
    }
    matches(node){
        return this.model.matches(node);
    }
    remove(node){
        this.model.remove(node);
    }
}