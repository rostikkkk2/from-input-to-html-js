document.getElementById('all-inputs').addEventListener("keyup",
function(){
  function allInputsToHtml() {
    this.inputNumHtml = function(){
      document.getElementById('input-number').innerHTML = document.getElementById("number").value;
    };
    this.inputNameHtml = function(){
      document.getElementById('input-name').innerHTML = document.getElementById("name").value;
    };
    this.inputPasswordHtml = function(){
      document.getElementById('input-password').innerHTML = document.getElementById("password").value;
    };
  }
  new allInputsToHtml().inputNumHtml();
  new allInputsToHtml().inputNameHtml();
  new allInputsToHtml().inputPasswordHtml();
});


//ТАК ТОЖЕ РАБОТАЕТ Я НЕ ЗНАЮ КАК ЛУЧШЕ

// document.getElementById('all-inputs').addEventListener("keyup",
//   function allInputsToHtml() {
//       document.getElementById('input-number').innerHTML = document.getElementById("number").value;
//       document.getElementById('input-name').innerHTML = document.getElementById("name").value;
//       document.getElementById('input-password').innerHTML = document.getElementById("password").value;
//   }
// );
