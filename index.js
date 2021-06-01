// hover de la imagen crea tu gifo por cambio de imagen

let creatugifo = document.getElementById("creatugifo");
let imagenHover = new Image();
imagenHover.src = "./imagenes/CTA-crear-gifo-hover.svg";
let imagenNormal = creatugifo.firstElementChild;
let imagen3= new Image ();
imagen3.src = "./imagenes/CTA-crear-gifo-active.svg"

let cambio = () => creatugifo.replaceChild(imagenHover, imagenNormal);
let cambio2 = () => creatugifo.replaceChild(imagenNormal, imagenHover);

//let cambio3 = ()=> creatugifo.replaceChild(imagen3,imagenhover)

creatugifo.addEventListener("mouseenter", cambio);
creatugifo.addEventListener("mouseleave", cambio2);

//creatugifo.addEventListener("click", cambio3)  mousedown??


// modo nocturno

let modonocturno = () => {
   body = document.getElementById("body");
  body.style.background = "#222326";
diurno.innerText = 'MODO DIURNO '
   lis = document.getElementsByTagName("li")
  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.style.color = 'white';  
  }
   ps = document.getElementsByTagName("p")
  for (let i = 0; i < ps.length; i++) {
    const p = ps[i];
    p.style.color = 'white';
  }
  titulos = document.getElementsByClassName("titulo")
  for (let i = 0; i < titulos.length; i++) {
    const titulo = titulos[i];
    titulo.style.color = "white"
 
  
  }
  nocturno.removeEventListener("click",modonocturno)
  nocturno.addEventListener("click", mododiurno);
}
 

let mododiurno = ()=>{
  nocturno.addEventListener("click", mododiurno);
  body = document.getElementById("body");
 body.style.background = "white";
  diurno.innerHTML = 'MODO NOCTURNO '
  lis = document.getElementsByTagName("li")
 for (let i = 0; i < lis.length; i++) {
   const li = lis[i];
   li.style.color = '#572EE5';  
 }
  ps = document.getElementsByTagName("p")
 for (let i = 0; i < ps.length; i++) {
   const p = ps[i];
   p.style.color = '#572EE5';
 }
  titulos = document.getElementsByClassName("titulo")
 for (let i = 0; i < titulos.length; i++) {
   const titulo = titulos[i];
   titulo.style.color = "#572EE5"
 }
 nocturno.removeEventListener("click",mododiurno)
 nocturno.addEventListener("click", modonocturno);

  }

  let nocturno = document.getElementById("modo_nocturno");
  let diurno = document.getElementById("modo_diurno")
 
  nocturno.addEventListener("click", modonocturno);
  

  
  // let otro = document.getElementById("buscador")

 // let padre = document.getElementById("ul")
  // let newa = document.createElement("a")
  // newa.innerHTML = ' <li id="diurno" >MODO DIURNO</li>'
  //  //newa.setAttribute("id", "diurno")
  // padre.appendChild(newa)
  // padre.replaceChild(newa,nocturno)
  
// }
// setTimeout(function(){ 
//    diurno = document.getElementById("diurno")
//   diurno.addEventListener("click", mododiurno)
//  }, 1000);
  
  // // let newli = document.getElementById("diurno")
  // //newli.addEventListener("click", mododiurno)
  // //console.log(diurno)
// // setTimeout(() => {
// //   resolve(1)
// // }, 2000)


// // menu hamborguesaaaaaaa

  let abrir = document.getElementById("open")
  let cerrar= new Image ();
cerrar.src = "./imagenes/close.svg"
cerrar.setAttribute("id","close")
   let header = document.getElementById("header")
  


let openmenu = ()=>  {
  if (window.matchMedia("(max-width: 600px)").matches = true)
   {
  ul = document.getElementById("ul")
  ul.style.display = "inline-block";  
  
  header.replaceChild(cerrar, abrir)
  abrir.removeEventListener("click",openmenu)
  cerrar.addEventListener("click", closemenu)}
else{
  console.log(ul)
}
}

let closemenu = ()=> {
  ul = document.getElementById("ul")
  ul.style.display = "none";
  header.replaceChild( abrir, cerrar)
  cerrar.removeEventListener("click",closemenu)
  abrir.addEventListener("click", openmenu)

}

  abrir.addEventListener("click", openmenu)
  cerrar.addEventListener("click", closemenu)
  
// // let html = '  <img src="/imagenes/close.svg" alt="" srcset="" id="close"> '
// //  let header = document.getElementById("header");
// //  //let logo = document.getElementById("logo")
// //  let navbar = document.getElementById("navbar")
// //  let ul = document.getElementById("ul")
// //  let mostrarX = ( )  => {
// //     header.innerHTML += html
// //     let cerrar  = document.getElementById("close")
// //      let abrir = document.getElementById("open")
// //     header.replaceChild(cerrar,abrir)
// // }

// //  abrir.addEventListener("click" ,mostrarX )
// //  cerrar.addEventListener("click", mostrarY)
// //  let mostrarY = ()=> { header.replaceChild(abrir,cerrar) }

// // //      let menuHamburgesa = document.createElement("img")
// // //  menuHamburgesa.setAttribute("id","menuHamburguesa")
// // // navbar.appendChild(menuHamburgesa)
// // // navbar.replaceChild( menuHamburgesa,ul)
// // // abrir = document.getElementById("open")
// // // cerrar = document.getElementById("close")
// // // navbar.replaceChild(cerrar,abrir)
// // //  console.log(navbar)}

// // // menuHamburgesa.innerHTML = html
// // // let abierto = document.getElementById("open")
// // // abierto.style.display = "none"
// // // let menu = document.getElementById("header")
// // //logo.nextElementSibling.remove()
// // // replaceWith
// // // menuHamburgesa.innerHTML = html

// // // with(menuHamburgesa) {
// // //     replaceWith("foo");
// // //   }
