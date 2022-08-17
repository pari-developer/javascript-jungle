function loop_size(node){
   //find the place where fast and slow pointer meet
    var p = getLoopNode(node);
    // initialise the head
    var q = node;
    //get the start of the linkedList
    var start = getStartNode(p,q);
    //initialize next pointer of start
    var nextStart = start.next;
    //track the size
     var count = 1;
     //run the loop till the nextStart meets the real start 
     while(start !== nextStart){
       nextStart = nextStart.next;
       count+=1;
     }
     return count;
   //we are finding the starting point of the loop
   function getStartNode(p,q){
    while(p!==q){
     p= p.next;
     q = q.next;
    }
     return p ;
   }
   //we are finding the place where two pointers meet
    function getLoopNode(node){
      let slow = node,fast = node;
      while(slow && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
          return slow;
        }
      };
    }
   
   }