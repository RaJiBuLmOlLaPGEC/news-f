// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// link:- https://masai-mock-api.herokuapp.com/news?q=tesla;
// link2:- https://masai-mock-api.herokuapp.com/news?q=twitter;
const API="tesla";
import { navbar } from "./navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import {sidebar} from"./sidebar.js";
let s=document.getElementById("sidebar");
s.innerHTML=sidebar();

let searchNews=async() =>{
    let query = document.getElementById("search_input").value;
    try{
        let res= fatch(`https://masai-mock-api.herokuapp.com/news?q=`)
    }catch(err){
        console.log(err);
    }
}