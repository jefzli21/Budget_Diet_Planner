// import * as d3 from "d3";
import {appleChart} from "./scripts/appleCharts"
import {avocadoChart} from "./scripts/avocadoCharts"
import {bananaChart} from "./scripts/bananaCharts"


document.addEventListener("DOMContentLoaded",async function(){
    await appleChart();
    await avocadoChart();
    await bananaChart();

    const appleObj = JSON.parse(localStorage.getItem('appleObj'))
    const avocadoObj = JSON.parse(localStorage.getItem('avocadoObj'))

    // console.log(avocadoObj)
    // console.log(appleObj)
    
    
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

