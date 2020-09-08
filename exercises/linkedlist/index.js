// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document



// const nodeOne = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.inSertFirst(15);






class Node {
    constructor(data, next=null){
        this.data=data;
        this.next=next; 
   }
}

class LinkedList {
    
   constructor()
   {
       this.head=null;
   }

   insertFirst(data)
   {
    //    this.head = new Node(data, this.head);  
    this.insertAt(data,0);
    }
   
   size()
   {
    var counter=0;
    let node = this.head;   // first node  ( if dose not have exist )

    while(node){
        counter++;
        node = node.next;
    }
    return counter;
   }

    
   getFirst()
   {
    //    let node= this.head;
    //    return node;
    return this.getAt(0);
   }


   getLast()
   {
    // let node = this.head;

    // while(node)
    // {
    //     if(!node.next)
    //     {
    //         return node;
    //     }
    //      node= node.next;
    // }

    return this.getAt(this.size()-1);
    
   }


   clear()
   {
       this.head=null;
   }

   removeFirst()
   {
       if(!this.head)
       {
           return;
       }
       this.head=this.head.next; 
 
   }

   removeLast()
   {
       

       if(!this.head)
       {
           return;
       }
       
      if(!this.head.next)
      { 
        this.head=null; 
        return; 
      }
       
      let previous = this.head;
      let node = this.head.next;

      while(node.next)
      {
        previous=node; 
        node=node.next;
      }
      previous.next=null;

   }


   insertLast(data)
   {
      const last = this.getLast();

      if(last){
        last.next= new Node(data);
      }
      else{
          this.head= new Node(data);
      }
   }

   getAt(index)
   {
        
        let counter =0;
        let node = this.head;

        while(node)
        {
            if(counter===index)
            {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
   }

   removeAt(index)
   {
    
    if(!this.head)
    {
        return;
    }

    if(index ===0)
    {
        this.head=this.head.next;
        return;
    }

    const previous = this.getAt(index - 1);

    if(!previous || !previous.next){
        return;
    }

    previous.next= previous.next.next;






    //    let counter =0;
    //    let node=this.head;

    //    while(node)
    //    {
    //        if(counter===index){
    //         this.head = this.head.next;
    //        }
    //        counter++;
    //        node = node.next;
    //    }



    //    return null;


   }



   insertAt(data, index)
   {
       
       
       if(!this.head)
       {
           this.head=new Node(data);
           return;
       }
      
       if(index === 0){
           this.head = new Node(data,this.head);
           return;
       }

       const previous = this.getAt(index - 1) || this.getLast();
       const node = new Node(data,previous.next);
       previous.next=node;

   }

  
   forEach(fn)
   {
       let node = this.head;
       let count = 0;

       while(node)
       {
           fn(node, count);
           node = node.next;
           count++;
       }
   }

   // generator
   
   *[Symbol.iterator]()
   {
       let node = this.head;
       while(node)
       {
           yield node;
           node = node.next;
       }
   }


}


const list = new LinkedList();
list.head=new Node(10);



module.exports = { Node, LinkedList };













// function *genarator()
// {
//  const result=1+10;
  
//   return 10 + (yield result);
  
// }

// const gen = genarator();
// gen.next()
// gen.next()
// gen.next()







// function *genarator()
// {
//  const result=1+10;
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   yield 6;
//   yield 7;
//   yield 8;
//   yield 9;
  
//   return 10 + (yield result);
  
// }

// const gen = genarator();
// gen.next()
// gen.next()
// gen.next()
// gen.next()
// gen.next()
// gen.next()



















// function *genarator()
// {
//  const result=1+10;
//   yield 1;
//   yield 2;
//   yield 3;
//   yield *More();
//   yield 7;
//   yield 8;
//   yield 9;
  
//   return 10 + (yield result);
  
// }

// function *More()
// {
  
//   yield 4;
//   yield 5;
//   yield 6;
// }

// const gen = genarator();


// const lists =[];
// for(let values of gen){
//  lists.push(values); 
// }
// lists;

// gen.next()
// gen.next()
// gen.next()
// gen.next()
// gen.next()
// gen.next()




























// class Tree
// {
//  constructor(value = null, children =[]){
//   this.value= value;
//    this.children = children;
//  }
  
//   *generatorPrintValue()
//   {
//     yield this.value;
//     for(let child of this.children){
//       yield *child.generatorPrintValue();
//     }
//   }
  
// }

// const tree = new Tree(1, [ new Tree(2, [ new Tree(4)])]);

// const values = []
// for(let value of tree.generatorPrintValue())
// {
//  values.push(value) 
// }
// values;

// tree.generatorPrintValue().next()




