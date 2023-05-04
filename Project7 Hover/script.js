const btn=document.querySelector(".btn");
let ripple;
btn.addEventListener('mouseenter',(e)=>{
    //console.log(e.target.getBoundingClientRect());
    const left=e.clientX-e.target.getBoundingClientRect().left;
    const top=e.clientY-e.target.getBoundingClientRect().top; 
    ripple=document.createElement('div')
    ripple.classList.add("ripple");
    ripple.style.left=`${left}px`;
    ripple.style.top=`${top}px`;
    btn.prepend(ripple);
    //console.log(left);
});

btn.addEventListener('mouseleave',()=>{
    btn.removeChild(ripple);
})



/*The getBoundingClientRect() method returns a DOMRect object that has properties like left, top, right, and bottom, which represent the distances between the edges of the element and the edges of the viewport.*/
//getBoundingClientRect() method is used to get the size and position of the element relative to the viewport
//clientX is a property of the event object that stores the horizontal coordinate of the mouse pointer relative to the viewport at the time when the event occurred.
//e.target refers to the DOM element on which the event listener was registered. In this case, it refers to the btn element, which was selected using the querySelector() method and stored in the btn variable
//e.clientX is the horizontal coordinate of the mouse pointer relative to the viewport 
//at the time when the event occurred.
/*By subtracting the distance of the left edge of the btn element from the horizontal
 coordinate of the mouse pointer, we can calculate the distance
 between the left edge of the btn element and the mouse pointer position when the mouse 
 enters the element. The result of this calculation is assigned to the left variable.
Therefore, the left variable will contain the distance between the left edge of the btn
 element and the position of the mouse pointer when the mouse enters the element, in pixels.*/