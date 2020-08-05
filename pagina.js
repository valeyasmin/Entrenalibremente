// elementos
const divInd = document.querySelector('.individuales');
const divGrup = document.querySelector('.grupales');
const grupales = document.querySelector('.zona');
const individuales = document.querySelector('.indiv');
const dias = document.querySelector('.dias');
const dias2 = document.querySelector('.dias2');

// funciones
function showDayOptions(e){
    
    let dias2On = dias2.style.display == 'block';
    let diasOn = dias.style.display == 'block';

    if(e.target.id == 1){
        if (diasOn) {
            dias.style.display = 'none';
        }
        dias.style.display = 'block';
    }else{
        dias2.style.display = 'block';
    }
}

function showIndOptions (){

    if (individuales.style.display == 'block') {
        console.log(individuales);
        individuales.style.display = 'none';
    }
    individuales.style.display = 'block';
}

function showGrupOptions (){

    if (grupales.style.display == 'block') {
        //console.log(individuales);
        grupales.style.display = 'none';
    }
    grupales.style.display = 'block';
}
//eventos

//   main
divInd.addEventListener('click', showIndOptions)
divGrup.addEventListener('click', showGrupOptions)

grupales.addEventListener('click', showDayOptions);


