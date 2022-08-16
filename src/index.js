// import * as d3 from "d3";
import {appleChart} from "./scripts/appleCharts"


document.addEventListener("DOMContentLoaded",function(){
    
    // appleChart();
    
const men = document.getElementsByClassName("menu")[0]
men.addEventListener('click', (e)=>{
    console.log(e.target.name)
})
    
})


const menuItems = document.getElementsByClassName("summary-items")[0]

const lsItems = JSON.parse(localStorage.getItem('menu-items')) || [];

const items = document.getElementsByClassName("items")




const addItem = (e) => {
    e.preventDefault();
    let input = document.querySelector(".adding")
    // let value = 
}

