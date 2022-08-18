
  
export async function totalChart(summary){
  

  let total_fat = parseInt(document.getElementById('total-fat').innerText)
  let total_protein = parseInt(document.getElementById('total-protein').innerText)
  let total_carb = parseInt(document.getElementById("total-carb").innerText)
  
  
  
  let pieChart = new Chart(summary, {
      type:'doughnut', // bar,horizontal bar, pie, line doughnut, radar, polarArea
      data:{
        labels:['Total Carbohydrates','Total Fat','Total Protein'],
        datasets:[{
          label: 'Nutritions',
          data:[total_carb,total_fat,total_protein],
          backgroundColor: ['green','red','purple'],
        //   radius:[100]
        }]
      },
      options:{
        responsive: true,
        maintainAspectRatio: true
      }
    });
    
    return pieChart
    }
    