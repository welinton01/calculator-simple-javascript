function botao(num){
  var salvo = document.calc.visor.value;
  document.calc.visor.value = salvo + num;
}

function reset (){
  document.calc.visor.value = "";
}

function calcule(){
  
  var valor = document.calc.visor.value;
  
  if(valor == null){
    document.calc.visor.value = "0";
  }else{
  
  var result = eval(valor);
  document.calc.visor.value = result;
  }
}