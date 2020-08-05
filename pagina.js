// elementos
const divInd = document.querySelector('.individuales');
const divGrup = document.querySelector('.grupales');

const grupales = document.querySelector('.zona');
const individuales = document.querySelector('.indiv');
const dias = document.querySelector('.dias');
const dias2 = document.querySelector('.dias2');
const horarios = document.querySelector('.horarios');

// funciones
function showGrupOptions (){

    let grupOn = grupales.style.display == 'block';

    if (grupOn) {
        grupales.style.display = 'none';
        document.querySelectorAll('.nav > ul')
            .forEach(elem => elem.style.display = 'none');
        return false;
    }
    grupales.style.display = 'block';
}

function showDayOptions(e){
    
    let dias2On = dias2.style.display == 'block';
    let diasOn = dias.style.display == 'block';
    console.log(diasOn);

    if(e.target.id == 1){
        if (diasOn) {
            dias.style.display = 'none';
            return false;
        }
        else{
            if (dias2On) {
                dias2.style.display = 'none';
            }
            dias.style.display = 'block';
        }
    } else{
        if (dias2On) {
            dias2.style.display = 'none';
            return false;
        }else{
            if (diasOn) {
                dias.style.display = 'none';
            }
            dias2.style.display = 'block';
        }
    }
}

function showIndOptions (){

    if (individuales.style.display == 'block') {

        individuales.style.display = 'none';
        return false;
    }
    individuales.style.display = 'block';
}

function showDaysTimes(){
    if (horarios.style.display == 'block') {

        horarios.style.display = 'none';
        return false;
    }
    horarios.style.display = 'block';
}


//eventos

//   main
divInd.addEventListener('click', showIndOptions)
divGrup.addEventListener('click', showGrupOptions)

//   meus

grupales.addEventListener('click', showDayOptions);
dias.addEventListener('click', showDaysTimes);

document.querySelectorAll('li')
        .forEach(elem => {
            elem.addEventListener('mouseover', (e)=>{
                e.target.classList.add('active');
            });
            elem.addEventListener('mouseout', (e)=>{
                e.target.classList.remove('active');
            })
        })


