const searchInputWrapper=document.querySelector(".search-input-wrapper");
const searchIcon=document.querySelector(".search-icon i");
const searchInput=document.querySelector(".search-input input");
const closeIcon=document.querySelector(".search-input i")
searchIcon.addEventListener('click',()=>{
    searchIcon.parentElement.classList.add("change");//visibility on
    searchInputWrapper.classList.add("change");//animation trigger
    setTimeout(()=>{
        searchInput.focus();//input for search field will be triggered
    },1000);
});

closeIcon.addEventListener('click',()=>{//make x work
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
});


