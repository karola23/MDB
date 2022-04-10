function licz()
{
    var id_checkboxa=[];
    var cena=[];
    var suma=0;
    suma = parseFloat(suma);
 
    id_checkboxa=document.getElementsByName("ch1");
    cena=document.getElementsByName("ch3");
 
    for(var i=0;i<id_checkboxa.length ;i++)
    {
 
      if(id_checkboxa[i].type=='checkbox' && id_checkboxa[i].checked==true)
      {
         cena_float = parseFloat(cena[i].value);  
         suma = suma + cena_float;     
      }
 
	   if (suma <0) {suma = 0;}
	   if (i == id_checkboxa.length-1)
	   {
     	        document.getElementById("wynik").value=suma;
	   }
    }
 
}
 