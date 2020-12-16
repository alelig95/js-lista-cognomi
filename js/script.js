var cognomeUtente = prompt('Qual è il tuo cognome?');
var listaCognomi = ['Zorzi', 'Ruta', 'Zelletta', 'Petrelli', 'Orlando', 'Cannavò'];
listaCognomi.push(cognomeUtente);
var listaOutput = document.getElementById('lista-cognomi');
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  listaOutput.innerHTML += '<li>' + listaCognomi[i] + '</li>';
 }

var posizioneCognome = document.getElementById('posizione-cognome');
  posizioneCognome.innerText = 'La posizione del tuo cognome è: '+ (listaCognomi.indexOf(cognomeUtente) + 1);
