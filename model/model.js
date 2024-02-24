import {Node} from "./ballNode.js";
import {LinkedList} from "./LinkedList.js";


const Model={
    list:new LinkedList(),
    ball:new Node(),
    initList:function(){
        for(let i=0;i<10;i++){
            const node=new Node();
            this.addLast(node);
        }
        Controller.modelUpdate();
    },
    loadCannon: function (){
            this.ball= new Node();
            Controller.modelUpdate()
        },
    insertBallLast:function(){
        this.list.addLast(this.ball);
        Controller.modelUpdate();
    },
    insertBallFirst:function(){
        this.list.addFirst(this.ball);
        Controller.modelUpdate();
    },
    inserBallAfter:function(aim){
        this.list.insertAfter(aim,this.ball);
        Controller.modelUpdate();
    },
    insertBallBefore:function(aim){
        this.list.insertBefore(aim,this.ball);
        Controller.modelUpdate();
    },
    matches:function(node){
        return this.list.findMatchesNearby(node);
    },
    remove:function(node){
        this.list.remove(node);
        Controller.modelUpdate();
    },
} ;   


export default Model;