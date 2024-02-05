/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navUl = document.getElementById("navbar__list")
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// build the nav

 /*-------------------------- create navigation dynamically  ------------------------*/

sections.forEach((e)=>{
    const liDataNav = e.getAttribute("data-nav");
    const navLi = document.createElement("li");
    const navLiClass = navLi.classList.add("navbar__menu");
    const navLink = document.createElement("a");
    const navLinkClass = navLink.classList.add("menu__link");
    const linkText = navLink.textContent =liDataNav;
    navLi.appendChild(navLink);
    fragment.appendChild(navLi);

    //  add activr navBar
    navLi.addEventListener("click", ()=>{
        if(navLi.className !=="your-active-class" ){
            removeActiveNavBar();
            navLi.classList.add("activenavbar__menu");
        }
    })

    //  scroll event
    navLi.addEventListener("click",
    ()=>{e.scrollIntoView ({behavior: "smooth", block: "center"})});
})
navUl.appendChild(fragment);

/*-------------------- Add class 'active' to section when near top of viewport---------------------*/

const limenu = document.querySelectorAll("li");   // select all navbars

// remove activr navBar
const removeActiveNavBar = ()=>{
    limenu.forEach((elm)=>{ elm.classList.remove("activenavbar__menu")});
};

// remove Active section
const removeActive = ()=>{
    sections.forEach((e)=>{
    e.classList.remove("your-active-class");
})};

/*---------------------  addEventListner to window  -------------------------------------- */

window.addEventListener("scroll", ()=>{
    sections.forEach((e ) => {
        const react = e.getBoundingClientRect();
        const secNav = e.getAttribute("data-nav");
        if(react.top>0 && react.top<300){
            removeActive();                                 // remove active class form all
            e.classList.add("your-active-class");         // add active class to selected section
        }
    });
});

/*-----------------------  add botton to scroll top ---------------------------------*/

const maiSec = document.querySelector("h1")
const botton = document.createElement("div");
const bottonText = botton.textContent ="Up";
const bottnClass = botton.classList.add("nav__up");
botton.setAttribute("id","botton");
document.body.appendChild(botton);
// add botton style
botton.style.cssText = 'width : 45px ; position: fixed; bottom: 32px; left: 17px;\
 padding: 10px; color: blue; background-color: orange; font-size: 2em; cursor: pointer';
 
 // add event lestner to up bpotton
 botton.addEventListener("click",
 ()=>{ maiSec.scrollIntoView ({behavior: "smooth", block: "center"})} );

//reove all active navBar
 botton.addEventListener( "click",()=>{
    limenu.forEach((elm)=>{ elm.classList.remove("activenavbar__menu")});
});
 
/* --------------------------------  End Main Functions --------------------------------*/