// declaration des variables 
var bouton;
var sortie;
var numero;
var nombreDeviner;
var tentativee ;

 // entrer: saiser 
 bouton = document.getElementById('bouton');
 sortie = document.getElementById('sortietext');
 numero = Math.floor(Math.random() * 100);

 // traitement 

bouton.addEventListener('click', function(){
  
  
  nombreDeviner = document.getElementById('entréDeUtilisateur').value;

  if (nombreDeviner == numero){
    sortie.innerHTML = 'Correct'
                              } 

    else{
    if (nombreDeviner < numero){
        sortie.innerHTML = "le nombre que vous avez choisir est plus petit"
                               }
    else {
      sortie.innerHTML = "le nombre que vous avez choisir est plus grand"
         }

        } 

                                              }
 );

