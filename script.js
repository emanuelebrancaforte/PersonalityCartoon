/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const risposte = [];
const sel = document.querySelectorAll('.choice-grid div');


for(const item of sel){
  item.addEventListener('click', seleziona);
}



/*----------------------------------------------------------------FUNZIONI----------------------------------------------------------- */
function seleziona(event){
  opacizza(event);
  evidenzia(event);
  inserimento(event); 
}



function evidenzia(event){
  const sel = event.currentTarget;
  sel.classList.add('evidenziato');
  sel.classList.remove('scurisci');
  sel.style.backgroundColor = '#cfe3ff';
  const check = sel.querySelector('.checkbox');
  check.src = 'images/checked.png';
}

function opacizza(event){
    
  const figlio = event.currentTarget;
  const padre = figlio.parentNode;
  const nosel = padre.querySelectorAll('div');
   
  for(const item of nosel){
    item.classList.add('scurisci');
    item.backgroundColor = '#f4f4f4';
    const uncheck = item.querySelector('.checkbox');
    uncheck.src = 'images/unchecked.png';
  }
}

function inserimento(event){
  const risposta = event.currentTarget;
  if (risposta.dataset.questionId === "one"){
    risposte[0] = risposta;
    console.log(risposte.indexOf(risposta));
    console.log( risposta + "Inserito");
  }
  else if (risposta.dataset.questionId === "two"){
    risposte[1] = risposta;
    console.log(risposte.indexOf(risposta));
    console.log( risposta + "Inserito");
  }
  else if (risposta.dataset.questionId === "three"){
    risposte[2] = risposta;
    console.log( risposta + "Inserito");
    console.log(risposte.indexOf(risposta));
  } 
   
  if(risposte[0] && risposte[1] && risposte[2] !== undefined){
    console.log("Risposte selezionate:");
    for(const i of risposte){
      console.log(i);
    } 
      
    for(const item of sel){
      console.log("Rimuovo l' ascolto al click");
      item.removeEventListener('click', seleziona);
    } 
    confronta();
  }
}

function confronta() {
  const c1 = risposte[0].dataset.choiceId;
  const c2 = risposte[1].dataset.choiceId;
  const c3 = risposte[2].dataset.choiceId;
 
  if (c2 === c3)
    win = c2;
   else
    win = c1;
    console.log(win);
  risultato();
}

function risultato(){
  for(const nome in RESULTS_MAP){
    if(nome === win){
      const titolo = document.querySelector('#chiusura h1');
      const contenuto = document.querySelector('#chiusura p');
      titolo.textContent = RESULTS_MAP[nome].title;
      contenuto.textContent = RESULTS_MAP[nome].contents;

      adddiv();
      window.scroll(0,10000);
    }
  }
}

function adddiv(){
  var newDiv = document.createElement("div");
  const section = document.querySelector('#chiusura');
  section.appendChild(newDiv);
  newDiv.textContent = 'Ricomincia il quiz';
  newDiv.addEventListener('click', ricarica);
}

function ricarica(){
   window.location.reload();
   window.scroll(0,0);
}

