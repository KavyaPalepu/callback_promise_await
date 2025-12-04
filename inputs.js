// let parent = document.getElementsByTagName("body")[0];
// let newElement=document.createElement("h1")
// newElement.innerText="thub";
// newElement.setAttribute("class","heading")
// parent.appendChild(newElement)
function creategrid(){
    let mybody = document.getElementsByTagName("body")[0];
    let rows=document.getElementById("rows").value;
    let cols=document.getElementById("cols").value;
    let parent=document.createElement("div");
    parent.setAttribute("class","grid");
    mybody.appendChild(parent);
}