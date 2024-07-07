// let toggaleBtn = document.querySelector('#toggale')

// let menu =document.querySelector('#manuItems')

// toggaleBtn.addEventListener('click', (e) => {
// // menu.document.style.disply = 'block'
// // manu = menu.document.s
// menu.classList.toggle('show');
// })

// $(document).ready(function(){
//     $("#toggale").click(function(){
//       $("manuItems").hide(1000);
//     });
//   });

function myFunction() {
    var x = document.getElementById("manuItems");
    if (x.style.display === "none") {
      x.style.display = "block";
    
    } else {
      x.style.display = "none";
    }
  }