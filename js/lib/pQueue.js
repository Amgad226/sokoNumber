// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}
 
// PriorityQueue class
class PriorityQueue {
 
    // An array is used to implement priority
    constructor()
    {
        this.items = [];
    }
 

    enqueue(element, priority)
    {
        // creating object from queue element
        var qElement = new QElement(element, priority);
        var contain = false;
     
        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
     
        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }
    enqueueStar(element, priority,h )
    {
        
        var qElement = new QElementStar(element, priority,h);
        var contain = false;
     
 
        for (var i = 0; i < this.items.length; i++) {

            if (this.items[i].priority == qElement.priority) {
                if(this.items[i].h>qElement.h){
                    this.items.splice(i, 0, qElement);
                    contain = true;
                    break;
                }
            }

            if (this.items[i].priority > qElement.priority) {
               
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.items.push(qElement);
        }
    }
    
    

dequeue()
{

    if (this.isEmpty())
        return "Underflow";
    return this.items.shift();
}

front()
{
 
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}

rear()
{
    // returns the lowest priority
    // element of the queue
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}



isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}











}
// User defined class
// to store element and its priority
class QElementStar {
    constructor(element, priority,h)
    {
        this.element = element;
        this.priority = priority;
        this.h = h ;
    }
}
 

