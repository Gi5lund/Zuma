"use strict";
//import {LinkedList} from "../model/model.js"; 
import {View} from "../view/View.js"
import { Node } from "../model/ballNode.js"; 
import {Model} from "../model/model.js";

export class Controller{
    constructor(){
        this.model=new Model();
        this.view=new View(this);
        this.model.initList();
    }
    modelUpdate(){
        this.view.update();
    }
    loadCannon(){
        this.model.loadCannon();
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