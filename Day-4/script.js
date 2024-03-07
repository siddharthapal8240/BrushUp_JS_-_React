
console.log("testing")

// let a= document.getElementsByClassName("box")
// console.log(a)

// a[2].style.background="red"

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})
