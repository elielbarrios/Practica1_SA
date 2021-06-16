function myFunction() {
  var num = document.getElementById("inputnum").value;
  document.getElementById("demo").innerHTML = parImpar(num);
  
}
function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

exports.funcionpr = function (numero){
    return parImpar(numero);
};