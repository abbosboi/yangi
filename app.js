const bars = document.querySelector(".fa-bars");
const bars2 = document.querySelector(".fa-bars-staggered");
const sidebar = document.querySelector(".sidebar");
const bell = document.querySelector(".fa-bell");
const bell2 = document.querySelector(".fa-xmark");
const sidebar2 = document.querySelector(".sidebar2");
const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const xmark = document.querySelector(".fa-circle-xmark");
const sidebar3 = document.querySelector(".sidebar3");

bars.addEventListener("click", function(){
    sidebar.style.display = "block";
    sidebar.classList.add("active");
    bars.style = "display: none;";
});

bars2.addEventListener("click", function(){ 
    bars.style = "display: block;";
    sidebar.classList.remove("active");
    sidebar.style.display = "none";
});

bell.addEventListener("click", function(){
    sidebar2.style.display = "block";
    sidebar2.classList.add("active");
});

bell2.addEventListener("click", function(){ 
    bell.style = "display: block;";
    sidebar2.classList.remove("active");
    sidebar2.style.display = "none";
});

icon.addEventListener("click", function(){
    sidebar3.style.display = "block";
    sidebar3.classList.add("active");
    icon.style.display = "none";
    icon2.style.display = "block";
});

icon2.addEventListener("click", function(){
    sidebar3.classList.remove("active");
    sidebar3.style.display = "none";
    icon2.style.display = "none";
    icon.style.display = "block";
});

xmark.addEventListener("click", function(){
    sidebar3.classList.remove("active");
    sidebar3.style.display = "none";
});
