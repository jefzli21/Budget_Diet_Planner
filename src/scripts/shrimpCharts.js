

export async function shrimpChart(){
var query = 'shrimp'
let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query

const options2 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'},
    contentType: 'application/json'
};

let shrextract = JSON.parse(localStorage.getItem('shrimpObj'))

if(!shrextract){
 shrextract = await fetch(url2,options2)
        .then(response => response.json())
        .catch(err => console.error(err));
        localStorage.setItem('shrimpObj', JSON.stringify(shrextract.items[0]))
        // console.log(extract)
}



let food = document.getElementById('shrimp').getContext('2d');

let pieChart = new Chart(food, {
  type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
  data:{
    labels:['carbohydrates_total_g','fat_total_g','protein_g'],
    datasets:[{
      label: 'Nutritions',
      data:[shrextract.carbohydrates_total_g,shrextract.fat_total_g,shrextract.protein_g],
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


