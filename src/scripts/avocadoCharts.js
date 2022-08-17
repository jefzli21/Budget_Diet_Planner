

export async function avocadoChart(){
var query = 'avocado'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
};

let avoextract = JSON.parse(localStorage.getItem('avocadoObj'))

if(!avoextract){
 avoextract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));
        localStorage.setItem('avocadoObj', JSON.stringify(avoextract.items[0]))
        // console.log(extract)
}



let food = document.getElementById('avocado').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[avoextract.carbohydrates_total_g,avoextract.fat_total_g,avoextract.protein_g],
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


