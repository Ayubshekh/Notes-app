// const notescontainer=document.querySelector('.notes-container')
// const createbtn=document.querySelector('.btn')
// let notes=document.querySelectorAll('.input-box')

// function shownotes(){
//     notescontainer.innerText=localStorage.getItem("notes")
// }
// shownotes()

// function updata(){
//     localStorage.setItem("notes",notescontainer.innerHTML)
// }


// createbtn.addEventListener("click",()=>{
//     let inputbox=document.createElement("p")
//     let img=document.createElement("img")
//     inputbox.className="input-box"
//     inputbox.setAttribute("contenteditable","true")
//     img.src="images/delete.png"
//     notescontainer.appendChild(inputbox).appendChild(img)
    
//     updata()
//     })

// notescontainer.addEventListener("click",function(el){
//     if(el.target.tagName==="IMG"){
//         el.target.parentElement.remove()
//         updata()
//     }
//     else if(el.target.tagName==="p"){
//          notes=document.querySelectorAll('.input-box')
//          notes.forEach(nt =>{
//             nt.onkeyup= function(){
//                 updata()
//             }
//          })
//     }
// })




const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function update() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let deleteImg = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    deleteImg.src = "images/delete.png";
    deleteImg.className = "delete-btn"; 
    notesContainer.appendChild(inputBox).appendChild(deleteImg);

    update();
});

notesContainer.addEventListener("click", function(event) {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
        target.parentElement.remove();
        update(); 
    }
});

notesContainer.addEventListener("input", update);

document.addEventListener("keydown",event =>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})



