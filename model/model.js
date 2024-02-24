
export class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.lenght=null;
    }
    dumpList(){
        let current=this.head;
        while(current){
            console.log(`
            node: ${current.value}
            ----------
             prev: ${current.prev?.value}
             next: ${current.next?.value}`);
            current=current.next;
        }
    }
     addLast(payload){
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;                
            
        }
        else if(payload.value){
            node.value=payload.value;
        }
        this.lenght++;

       // add a new node to the end of the list
        if(!this.head){
            this.head=node;
            this.tail=node;
           
            return;
        }
        this.tail.next=node;
        node.prev=this.tail;
        this.tail=node;
        node.next=null;
        
    }
    
    addFirst(payload){
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;                
            
        }
        else{
            node.value=payload.value;
        }
        this.lenght++;
        //add a new node to the beginning of the list
    if(!this.head){
        this.head=node;
        this.tail=node;
        return;
    }
    this.head.prev=node;
    node.next=this.head;
    this.head=node;

    }

    removeLast(){
        this.tail=this.tail.prev;
        this.tail.next=null;
        this.lenght--;
    }
    removeFirst(){
        this.head=this.head.next;
        this.head.prev=null;
        this.lenght--;
    }
    clear(){
       while(this.tail.prev){
        
            this.tail=this.tail.prev;
            this.tail.next=null    
       } 
       this.head=null;
       this.tail=null;
       this.lenght=null;
    }
    remove(index){
        //removes node at index
        const iNode=this.get(index);
        iNode.prev.next=iNode.next; //index' previous' new next points to index' next
        iNode.next.prev=iNode.prev;
        iNode.next=null;
        iNode.prev=null;
        this.lenght--;
    }
    get(index){
        //returns element at index, first element is index 0        
        
        for(let i=0;i<=index;i++){
           if(index<0 || index>=this.lenght){
            throw new Error("Index is out of bounds");
           } 
           let current=this.head;
           for(let i=0;i<index; i++){
            if(!current){
                throw new Error("index is out of bounds");
            }
            current=current.next;
           }
           return current;
        }
    }
    indexOf(payload){
        //returns index of node.value===payload
        let current=this.head;
        let index=0;
        const node={
            prev:null,
            next:null,
            value:null
        };
        if(!payload.value){
           node.value=payload;               
        }
        else{
            node.value=payload.value;
        }
       
        while(node.value!==current.value){
            index++;
            current=current.next;
        }
        return parseInt(index);
    }
    insertBefore(index,payload){
        //inserts payload before node at index
        const pNode={
            prev:null,
            next:null,
            value:null
        };
        const iNode=this.get(index);
        if(!payload.value){
            pNode.value=payload;
            pNode.next=iNode;
            pNode.prev=iNode.prev;
            iNode.prev.next=pNode; 
            iNode.prev=pNode;        
        }
        else{
            pNode.value=payload.value;
            pNode.next=iNode; //payloads next points to index
            pNode.prev=iNode.prev;//payloads prev points to index' prev
            iNode.prev.next=pNode   //index' previous' new next points to payload
            iNode.prev=pNode;//index' new prev points payload
        }
        this.lenght++;
    }
    insertAfter(index,payload){
         //inserts payload before node at index
         const pNode={
            prev:null,
            next:null,
            value:null
        };
        const iNode=this.get(index);
        if(!payload.value){
            pNode.value=payload;
            pNode.prev=iNode; //payloads prev points to index
            pNode.next=iNode.next; //payloads next points to index' next
            iNode.next.prev=pNode;//index' nexts new prev points payload
            iNode.next=pNode      //index new next points to payload   
        }
        else{
            pNode.value=payload.value;
            pNode.prev=iNode;
            pNode.next=iNode.next;
            iNode.next.prev=pNode     
        }
        this.lenght++;
    }
    first(){
        //returns first element i.e. head
        this.get(0);
    }
    last(){
        // returns last i.e. tail
        this.get(this.lenght-1)
    }
    swapNodes(nodeA,nodeB){
       // swaps two nodes i.e. nodeA.value shifts to nodeB and vice versa
       const a=this.get(this.indexOf(nodeA));
       const b=this.get(this.indexOf(nodeB));
       const swap=a.value
       a.value=b.value;
       b.value=swap;
       
    }
    nodeAt(index){
        //returns node at index
        this.get(index).value;
    }
}