let tabuada = 11; 

function escreva(){
    document.write( " <h1>Tabuada do" + tabuada + "<br> </h1>");
    document.write( tabuada + "x 1 ="+ (tabuada*1)+"<br>");
    document.write( tabuada + "x 2 ="+ (tabuada*2)+"<br>");
    document.write( tabuada + "x 3 ="+ (tabuada*6)+"<br>");
    document.write( tabuada + "x 4 ="+ (tabuada*8)+"<br>");
    document.write( tabuada + "x 5 ="+ (tabuada*10)+"<br>");
    document.write( tabuada + "x 6 ="+ (tabuada*12)+"<br>");
    document.write( tabuada + "x 7 ="+ (tabuada*14)+"<br>");
    document.write( tabuada + "x 8 ="+ (tabuada*16)+"<br>");
    document.write( tabuada + "x 9 ="+ (tabuada*18)+"<br>");
    document.write( tabuada + "x 10 ="+ (tabuada*20)+"<br>");
}

 function minhaTabuada() {
     for( let i=1; i<= 10; i++){
         document.write("tabuada do " + 1 + "<br" );

        for( let j=1;j <= 10; j++){
         document.write(i + " x " + j +  " = " + (j*i) + "<br>");
        
       }
       document.write("<br>");
    }
 }
 function quadrado (){
     for(let  i = 1; i<=1000; i++){
         document.write("O quadrado de "+i+ "é" + (i*i)+ "<br>");
          }
     }
     function calcula(){
        let val = document.getElementById ("valor").value; 
        let val = document.getElementById ("valor").value; 
        let t= document.getElementById ("meses").value;

        let res = val * (1+(j/100));

        document.write( "Resultado:" +res);
    }
        
