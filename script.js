function encriptar(traduccion){
  
  document.querySelector("#advertencia").removeAttribute("style");
  var textarea = document.querySelector("#texto");
  const texto = textarea.value;
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var textOutput = document.querySelector("#textOutput");
  if (texto != ""){
      var out = ""
      for(var i=0; i < texto.length; i++){
          if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
              document.querySelector("#advertencia").style.color = "red";
              document.querySelector("#advertencia").style.fontSize = "16px";
              return;
          }
          else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
              area_default.classList.remove("invisible");
              area_result.classList.add("invisible");
              return;
          }
          if(texto[i] == 'a'){
              out += traduccion["a"] ;
          }
          else if(texto[i] == 'e'){
              out += traduccion["e"];
          }
          else if(texto[i] == 'i'){
              out += traduccion["i"]; 
          }
          else if(texto[i] == 'o'){
              out += traduccion["o"]; 
          }
          else if(texto[i] == 'u'){
              out += traduccion["u"]; 
          }
          else{
              out += texto[i];
          }
      }

      area_default.classList.add("invisible");
      area_result.classList.remove("invisible");
      textOutput.innerHTML = out;
  }

  return;

}

function desencriptar(traduccion){
  document.querySelector("#advertencia").removeAttribute("style");
  var textarea = document.querySelector("#texto");
  var texto = textarea.value;
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var textOutput = document.querySelector("#textOutput");
  if (texto != ""){
      for(var i=0; i < texto.length; i++){
          if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
              document.querySelector("#advertencia").style.color = "red";
              document.querySelector("#advertencia").style.fontSize = "16px";
              return;
          }
          else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
              area_default.classList.remove("invisible");
              area_result.classList.add("invisible");
              return;
          }
      }
      area_default.classList.add("invisible");
      area_result.classList.remove("invisible");
      texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
      texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
      texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
      texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
      texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
      textOutput.innerHTML = texto;
  }
  return;
}

function clipboard(){
  const textOutput = document.querySelector("#textOutput");
  navigator.clipboard.writeText(textOutput.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );