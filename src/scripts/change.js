export async function change(){
    let fit = document.querySelector('#shape')
    let total_cal = parseInt(document.querySelector('#total-cal').innerText)
    let total_fat = parseInt(document.getElementById('total-fat').innerText)
    const img = new Image();


    if (total_cal < 900){
        img.src = "./img/defaultHuman.png"
        img.id = "person"
    }else if(total_cal >= 900 && total_cal < 10000 && total_fat < 50){
        img.src = "./img/muscle.png"
        img.id = "person"
    }else if(total_cal >= 900 && total_cal < 10000 && total_fat >= 50){
        img.src = "./img/fatperson.png"
        img.id = "person";
    }else if(total_cal >= 10000 && total_fat <= 1000){
        img.src = "./img/god.png"
        img.id = "person"
    }else{
        img.src = "./img/snorlax.png"
        img.id = "person"
    }

    fit.appendChild(img)
    // let per = document.querySelector("#person")
    // per.style.transition = "all 2s"
    // fit.style.opacity = 0

 
    // setTimeout(()=> fit.style.opacity = 0.05, 100)
    // setTimeout(()=> fit.style.opacity = 0.1, 150)
    // setTimeout(()=> fit.style.opacity = 0.15, 201)
    // setTimeout(()=> fit.style.opacity = 0.2, 251)
    // setTimeout(()=> fit.style.opacity = 0.25, 301)
    // setTimeout(()=> fit.style.opacity = 0.3, 351)


    // fit.style.opacity = 1
    
}