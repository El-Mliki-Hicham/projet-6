var bouton 
var numbre 
var sortie 
var numbreDevire 



bouton=document.getElementById("bouton");
numbre=Math.floor(Math.random() * 100);
sortie= document.getElementById("sortietext");



function entre(){


numbreDevire= document.getElementById('entreutilisateur').value;

if( numbreDevire==numbre){

    sortie.innerHTML="bravo"

}
else{

    if(numbreDevire < numbre){
        sortie.innerHTML="le numbre est petit "
    
                            }
    else{
        
        sortie.innerHTML="le numbre est grand"
    
         }



}









}