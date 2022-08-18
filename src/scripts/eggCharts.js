

export async function eggChart(){
var query = 'egg'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
};

let eggextract = JSON.parse(localStorage.getItem('eggObj'))

if(!eggextract){
 eggextract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));
        localStorage.setItem('eggObj', JSON.stringify(eggextract.items[0]))
  }
      


let food = document.getElementById('eggc').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[eggextract.carbohydrates_total_g,eggextract.fat_total_g,eggextract.protein_g],
      backgroundColor: ['green','red','purple'],
    //   radius:[100]
    }]
  },
  options:{
    responsive: true,
    maintainAspectRatio: true
  }
});


}


