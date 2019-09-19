//d = en donde estara el canvas
//getElementById = con esto obtenemos el id de una etiqueta
// getContext = es una funcion del objeto canvas, que me permite obtener el area donde voy a dibujar
// Se puede dibujar en 3d pero es complicado, y mejor dibujaremos en el lienzo en 2d
var d = document.getElementById("dibuja");
var lienzo = d.getContext("2d");
// lineas = sera el limite para el ciclo while
// l = ciclo, donde inicia
var lineas = 30;
var l = 0;

console.log(lienzo);
// begINpATH = asi lo llama Js a comenzar una trazo para dibujar
// strokeStyle = es una variable donde se le asigan un valor
// moveTo = metodo o funcion del lapiz donde arrancara la linea
// lineTo = es la funcion de trazar lineas, Arcos y todo
// stroke = dibuja la linea
// closePath = para cerrar el trazo
// es Funcion cuando tiene () despues de invocarlas, si no tuviese () no seria funcion, seria una variable



// while = mientras
// l = l+1 servira [ara cerrar la linea] y ir aumentando la cantidad de lineas sumandole 1
// l = l+2 nos mostrara solo 15 lineas por q ira sumando de 2 en 2 hasta llegar a 30
// console.log("linea" +l) para saber si es que esta dibujando las lineas
var yi,xf;
var colores="blue";
while(l < lineas)
{
  yi= 10 * l;
  xf = 10 * (l+1)
  dibujarLinea(colores,0,yi,xf,300);
  dibujarLinea(colores,yi,0,300,xf);
  // l++ esto simplifica a l+1 y es lo mismo
  l = l + 1;
}
//esta parte de codigo sera para dibujar los bordes de la figura
// si ponemos (0,0,0,300) se vera una linea delgada porq solo se muestra la mitad
// pero al colocarla en (1,1,1,300) estamos mostrando la linea en 1 pixel
// 299 mucho mas gruesa la linea
dibujarLinea(colores, 1,1,1,299);
dibujarLinea(colores, 1,299,299,299);


dibujarLinea(colores, 1,1,300,1);
dibujarLinea(colores, 1,0,300,1);
dibujarLinea(colores, 2,0,300,2);
dibujarLinea(colores, 3,0,300,3);
/*dibujarLinea("grey",0,10,20,300);
dibujarLinea("grey",0,20,30,300);
dibujarLinea("grey",0,30,40,300);*/
//dibujarLinea("green",300,20,10,220);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
