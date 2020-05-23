var number = prompt ("What is your favoite color?");

function writeNumber(){
  document.querySelector("#favcolor").innerHTML= number;
}

    function changeColor (obj) {
        if (obj.style.color == 'green') {
            obj.style.color ='black';
    
        } else {
           obj.style.color ='green';
        }
  }


document.querySelector("#button").addEventListener("click", writeNumber);