export class View{
    constructor(controller){
        this.controller=controller;
        this.board=document.querySelector("#chain");
        this.initlistener=()=>  this.controller.initialize();
        this.endgamlistener=()=>this.controller.abortGame();
        
      
    }
    update(){
        this.clearView();
        let current=this.controller.model.list.head;
        while(current){
            let ball=document.createElement("div");
            ball.classList.add("ball");
            ball.style.backgroundColor=current.value;
            ball.addEventListener("click",()=>this.controller.remove(current));
            this.board.appendChild(ball);
            current=current.next;
        }
    }
    loadCannon(){
        let cannon=document.querySelector("#cannon");
        cannon.innerHTML="";
        let ball=document.createElement("div");
        ball.classList.add("ball");
        ball.style.backgroundColor=this.controller.model.ball.value;
        ball.addEventListener("click",()=>this.controller.insertBallFirst());
        cannon.appendChild(ball);
    }
    clearView(){
        this.board.innerHTML="";
        document.querySelector("#cannon").innerHTML="";
        document.querySelector("#start").removeEventListener("click",this.initlistener);
        document.querySelector("#end").removeEventListener("click",this.controller.abortGame);
    }
}