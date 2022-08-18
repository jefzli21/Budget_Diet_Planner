// import * as d3 from "d3";
import {appleChart} from "./scripts/appleCharts"
import {avocadoChart} from "./scripts/avocadoCharts"
import {bananaChart} from "./scripts/bananaCharts"
import {eggChart} from "./scripts/eggCharts"
import {turkeyChart} from "./scripts/turkeyCharts"
import {chickenChart} from "./scripts/chickenCharts"
import {beefChart} from "./scripts/beefCharts"
import {salmonChart} from "./scripts/salmonCharts"
import {shrimpChart} from "./scripts/shrimpCharts"
import {tunaChart} from "./scripts/tunaCharts"
import {broccoliChart} from "./scripts/broccoliCharts"
import {sproutsChart} from "./scripts/sproutsCharts"
import {totalChart} from "./scripts/totalCharts"
import {change} from "./scripts/change"






document.addEventListener("DOMContentLoaded",async function(){

    let summary = document.getElementById('total').getContext('2d');
    await appleChart();
    await avocadoChart();
    await bananaChart();
    await eggChart();
    await turkeyChart();
    await chickenChart();
    await beefChart();    
    await salmonChart();
    await shrimpChart();
    await tunaChart();
    await broccoliChart();
    await sproutsChart();
    let chart = await totalChart(summary);
    let body = await change();



    const appleObj = JSON.parse(localStorage.getItem('appleObj'))
    const avocadoObj = JSON.parse(localStorage.getItem('avocadoObj'))
    const bananaObj = JSON.parse(localStorage.getItem('bananaObj'))
    const eggObj = JSON.parse(localStorage.getItem('eggObj'))
    const turkeyObj = JSON.parse(localStorage.getItem('turkeyObj'))
    const chickenObj = JSON.parse(localStorage.getItem('chickenObj'))
    const beefObj = JSON.parse(localStorage.getItem('beefObj'))
    const salmonObj = JSON.parse(localStorage.getItem('salmonObj'))
    const shrimpObj = JSON.parse(localStorage.getItem('shrimpObj'))
    const tunaObj = JSON.parse(localStorage.getItem('tunaObj'))
    const broccoliObj = JSON.parse(localStorage.getItem('broccoliObj'))
    const sproutsObj = JSON.parse(localStorage.getItem('sproutsObj'))

    const arrObj = [appleObj,avocadoObj,bananaObj,eggObj,turkeyObj,chickenObj,beefObj,salmonObj,shrimpObj,tunaObj,broccoliObj,sproutsObj]



    // console.log(arrObj[0].name)


    // console.log(appleObj)
    // console.log(avocadoObj)
    // console.log(eggObj)

const sum = document.getElementsByClassName('summary-items')
let total_cal = parseInt(document.querySelector('#total-cal').innerText)
let total_fat = parseInt(document.getElementById('total-fat').innerText)
let total_protein = parseInt(document.getElementById('total-protein').innerText)
let total_carb = parseInt(document.getElementById('total-carb').innerText)

const men = document.getElementsByClassName("menu")[0]
men.addEventListener('click', async (e)=>{
    let food = e.target.name.toLowerCase()
    let cal;
    let carb;
    let protein;
    let fat;
    
    for(let i = 0; i < arrObj.length; i++){
        if(arrObj[i].name === food){
             cal = arrObj[i].calories
             carb = arrObj[i].carbohydrates_total_g
             protein = arrObj[i].protein_g
             fat = arrObj[i].fat_total_g
        }
    }

    if(e.target.name){
        total_cal += parseInt(cal)
        document.querySelector('#total-cal').innerText = total_cal
        total_fat += parseInt(fat)
        document.querySelector('#total-fat').innerText = total_fat
        total_carb += parseInt(carb)
        document.querySelector('#total-carb').innerText = total_carb
        total_protein += parseInt(protein)
        document.querySelector('#total-protein').innerText = total_protein
        const add = document.createElement('li')
        add.appendChild(document.createTextNode(`${e.target.name}`))
        // const calo = add.appendChild(document.createElement('li'))
        // calo.appendChild(document.createTextNode(`Calories:${cal}`))
        // const car = calo.appendChild(document.createElement('li'))
        // car.appendChild(document.createTextNode(`Carbohydrates:${carb}`))
        // const prot = car.appendChild(document.createElement('li'))
        // prot.appendChild(document.createTextNode(`Protein:${protein}`))
        // const fa = prot.appendChild(document.createElement('li'))
        // fa.appendChild(document.createTextNode(`Fat:${fat}`))
        document.querySelector('.summary-items').appendChild(add)
    }
    // console.log(chart)
    chart.destroy();
    chart = await totalChart(summary);
    document.querySelector('#person').remove();
    body = change()
    e.preventDefault();

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

