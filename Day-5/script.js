// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//     alert('Button Clicked')
// });

document.querySelector(".child").addEventListener("click" , (e)=>{
    e.stopPropagation()
    alert("clicked")
})
document.querySelector(".childcontainer").addEventListener("click" , (e)=>{
    alert("childcontainer was clicked")
})
document.querySelector(".container").addEventListener("click" , (e)=>{
    alert("container was clicked")
})

