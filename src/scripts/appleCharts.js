

export async function appleChart(){
var query = 'apple'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
  };
  let appextract = JSON.parse(localStorage.getItem('appleObj'))

  if(!appextract){
     appextract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));
        // console.log(appextract)
        localStorage.setItem('appleObj', JSON.stringify(appextract.items[0]))
  }

  // console.log(appextract)
  // console.log(appextract["carbohydrates_total_g"])

let food = document.getElementById('apple').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[appextract.carbohydrates_total_g,appextract.fat_total_g,appextract.protein_g],
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


