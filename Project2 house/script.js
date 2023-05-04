const door=document.querySelector(".door");
console.log(door);
door.addEventListener("click",()=>{
    door.classList.toggle("change");
    console.log('affected');
})