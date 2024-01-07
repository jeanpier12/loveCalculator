
document.addEventListener('DOMContentLoaded', function() {
  var fileUrl = "/Islabonita.mp3";
  var audio = new Audio(fileUrl);
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();
});


function calculateLove(){
        const name1=document.getElementById("name1").value;
        const name2=document.getElementById("name2").value;
        var corazonRoto = document.getElementById('miImagen');
        var corazon = document.getElementById('corazon');
        

      if(name1 && name2){
        //split() divide una cadena por caracteres y las coloca en unalista
        //reduce recorre los valores de un array y los suma  
        const hash=(name1 + name2).split('').reduce((acumulador,elemento)=>acumulador+elemento.charCodeAt(0),0);
        const lovePorcentage=hash % 101;
        document.getElementById("resultado").style.color='green';
        document.getElementById("resultado").textContent =`Tienes un ${lovePorcentage}% de compatibilidad`
      
  

      if (lovePorcentage < 30) {
        corazonRoto.style.display = 'block';
        corazon.style.display = 'none'; 
      }

     if(lovePorcentage >= 30 && lovePorcentage <= 50) {
        corazonRoto.style.display = 'none'; 
        corazon.style.display = 'none'; 
      }

      if(lovePorcentage > 50) {
        corazon.style.display = 'block'; // O el valor de display que necesites (block, inline, etc.)
        corazonRoto.style.display = 'none'; // O el valor de display que necesites (block, inline, etc.)
      }

     
      if(!isNaN(parseInt(name1)) || !isNaN(parseInt(name2))) {
        // Si ambas conversiones a número son exitosas
        // Coloca aquí el código que deseas ejecutar si las conversiones son exitosas
        document.getElementById("resultado").style.color='black';
        document.getElementById("resultado").textContent =`Por favor ingrese nombres no numeros`;
        corazonRoto.style.display = 'none'; 
        corazon.style.display = 'none'; 
        
    }
      }


      else{

        document.getElementById("resultado").style.color='Red';
        document.getElementById("resultado").textContent =`Por favor ingrese ambos nombres`;
      }

}





