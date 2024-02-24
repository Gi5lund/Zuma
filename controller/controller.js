"use strict";
//import {LinkedList} from "../model/model.js"; 
import {view} from "../view/view.js";
import { Node } from "../model/ballNode.js"; 
import {Model} from "../model/model.js";

const Controller={
    model: Model, // Add a value to the model property
    view: view,
    init(){
        createList();
        loadCannon();
    },
    modelUpdate:function(){
        this.view.render(this.model.list);
    },
    loadCannon:function(){
        this.model.loadCannon();
        
    },
};




Controller.init();
export default Controller;