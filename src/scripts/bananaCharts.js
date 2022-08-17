

export async function bananaChart(){
var query = 'banana'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
};

let extract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));

        // console.log(extract)


const data1 = [
    {name: `carbohydrates_total_g`, value: extract.items[0].carbohydrates_total_g},
    {name: `fat_total_g`, value: extract.items[0].fat_total_g},
    {name: `protein_g`, value: extract.items[0].protein_g}
]

const data = [extract.items[0].carbohydrates_total_g,extract.items[0].fat_total_g,extract.items[0].protein_g]


let food = document.getElementById('banana').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[extract.items[0].carbohydrates_total_g,extract.items[0].fat_total_g,extract.items[0].protein_g],
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


