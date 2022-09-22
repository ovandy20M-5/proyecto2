var numero = 0;

function suma() {
  numero = numero + 1;
  document.getElementById("numero").textContent = numero;
  if(numero==0)
  {
    document.getElementById("numero").style.color = "blue";
  }
  else if (numero>0)
  {
    document.getElementById("numero").style.color = "green";
  }
}
function resta() {
    numero =numero-1;
    document.getElementById("numero").textContent = numero;
    if(numero==0)
    {
      document.getElementById("numero").style.color = "blue";
    }
    else if (numero<0)
    {
      document.getElementById("numero").style.color = "red";
    }
  }
  function rest() {
    numero=0;
    document.getElementById("numero").textContent = numero;
    document.getElementById("numero").style.color = "blue";
  }
