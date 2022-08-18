

export async function salmonChart(){
var query = 'salmon'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
};

let salextract = JSON.parse(localStorage.getItem('salmonObj'))

if(!salextract){
 salextract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));
        localStorage.setItem('salmonObj', JSON.stringify(salextract.items[0]))
        // console.log(extract)
}



let food = document.getElementById('salmon').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[salextract.carbohydrates_total_g,salextract.fat_total_g,salextract.protein_g],
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


