//DOM -> Document Object Module..............//////////////////

// const view1 = document.getElementById("view1");
// // console.log(view1);

// const view2 = document.querySelector("#view2");
// // console.log(view2);

// view1.style.display="none";
// view2.style.display="flex";

// const views = document.getElementsByClassName("view");
// console.log(views);

// const sameViews = document.querySelectorAll(".View")
// console.log(sameViews)

// const divs = view1.querySelectorAll("div");
// console.log(divs);

// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs)

// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
// console.log(evenDivs);
// evenDivs[4].style.backgroundColor = "green"

// for (i=0; i<evenDivs.length; i++){
//     evenDivs[i].style.width = "180px"
// }

// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "List of Boxes";

// const navBar = document.querySelector("nav");
// console.log(navBar);
// navBar.style.color = "yellow"
// navBar.innerHTML = '<h3> Box Content </h3> <p> Click Here </p>'

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.hasChildNodes());
// console.log(evenDivs[0].parentElement.lastChild);;
// console.log(evenDivs[0].parentElement.lastElementChild);
// console.log(evenDivs[0].parentElement.firstChild);
// console.log(evenDivs[0].parentElement.firstElementChild);
// console.log(evenDivs[4].nextSibling);
// console.log(evenDivs[0].nextElementSibling);

// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "flex";
// view2.style.flexWrap = "Wrap";
// view2.style.margin = "20px";

// view2.lastElementChild.remove();

    // const newDiv = document.createElement("div");
    // newDiv.textContent = "DeepChak";
    // newDiv.style.width = "100px";
    // newDiv.style.height = "100px";
    // newDiv.style.margin = "10px";
    // newDiv.style.backgroundColor = "Yellow";
    // newDiv.style.display = "flex";
    // newDiv.style.justifyContent = "center";
    // newDiv.style.alignItems = "center";
    // newDiv.style.color = "purple"
    // view2.append(newDiv);

// const createDiv = (parent, iter) => {

//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "10px";
//     newDiv.style.backgroundColor = "Yellow";
//     newDiv.style.display = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     newDiv.style.color = "purple"
//     parent.append(newDiv);
// }

// for (let i=1; i<=12; i++){
//     createDiv(view2, i)
// }

//Event Listeners........////////////////////////////////

// const view = document.querySelector("#view2");
// // console.log(view);

// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// console.log(h2)

//Syntax..............................................///////////////////////////////////////////
//addEventListeners (event, function, useCapture)

// const doSomething = () =>{
//     alert("Doing Something")
// }

// h2.addEventListener("click", doSomething, false)

// document.addEventListener("readystatechange", (event) => {
//     if(event.target.readystage === "complete"){
//         console.log("complete");
//         initApp();
//     }
// })

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         view.style.backgroundColor = "green"
//     })
//     div.addEventListener("click", (event) => {
//         view.style.backgroundColor = "blue"
//     })
//     h2.addEventListener("click", (event) => {
//         event.target.textContent = "Bajirangiii...!"
//     })
// }

//Web Storage API.........................//////////////////////////////////////

// const initApp = () => {
//     const myContent = ["Earn", "Grow", "Give"];
//     const myObject = {
//         name: "Deepchak",
//         myContent : ["Earn", "Grow", "Give"],
//         logName: function() {
//             console.log(this.name)
//         }
//     };
//     window.sessionStorage.setItem('mySessionStore', JSON.stringify(myObject));
//     const mySessionStore = JSON.parse(sessionStorage.getItem('SessionStore'));
//     console.log(mySessionStore)
// }

//Module.................................////////////////////////////////////////


