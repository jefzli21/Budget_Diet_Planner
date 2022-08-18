export async function change(){
    let fit = document.querySelector('#shape')
    let total_cal = parseInt(document.querySelector('#total-cal').innerText)
    if (total_cal < 900){
        const img = new Image();
        img.src = "./img/defaultHuman.png"
        img.id = "person"
        fit.appendChild(img)
    }else if(total_cal >= 900 && total_cal < 10000){
        const img = new Image();
        img.src = "./img/fatperson.png"
        img.id = "person"
        fit.appendChild(img)
    }else{
        const img = new Image();
        img.src = "./img/god.png"
        img.id = "person"
        fit.appendChild(img)
    }
    
}