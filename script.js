let mover = document.querySelector("box");
let up = document.querySelector(".Up");
let down = document.querySelector(".Down");
let left = document.querySelector(".Left");
let right = document.querySelector(".Right");




down.addEventListener("click", ()=>{
    let p= parseInt($(".box").css("top"));
    p+=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("top", v);
})

up.addEventListener("click", ()=>{
    let p= parseInt($(".box").css("top"));
    p-=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("top", v);
})
left.addEventListener("click", ()=>{
    let p= parseInt($(".box").css("left"));
    p-=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("left", v);
})
right.addEventListener("click", ()=>{
    let p= parseInt($(".box").css("left"));
    p+=10; 
    let v=p.toString();
    v+="px"
    $(".box").css("left", v);
})