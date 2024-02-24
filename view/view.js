"use strict";
window.addEventListener("load",start);
const View={
    render:function(model){
        const list=document.querySelector("#chain");
        list.innerHTML="";
        let current=model.head;
        while(current){
            const li=document.createElement("li");
            li.textContent=current.data;
            list.appendChild(li);
            current=current.next;
        }
    } 

}