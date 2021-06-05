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
   if ((window.matchMedia("(min-width: 800px)").matches )){

     li.style.color = '#572EE5';  
   }
   else{
    li.style.color = "white";
   }
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
  


let openmenu = () =>  {
   while (window.matchMedia("(max-width: 800px)").matches ) {
     
     
      //  console.log(window.matchMedia("(max-width: 800px)").matches)
    ul = document.getElementById("ul")
    ul.style.display = "inline-block";  
    
    header.replaceChild(cerrar, abrir)
    abrir.removeEventListener("click",openmenu)
    cerrar.addEventListener("click", closemenu)
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


  // conectarse a la  API

  //https://api.giphy.com/v1/gifs/search?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq&q=perro
  //https://api.giphy.com/v1/gifs/search?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq&limit=12&q=perro
  
let buscar = ()=> {
 
  buscador = input.value // lo que busca el usuario
  resultados.innerText = buscador
 
 fetch(`${giphysearchurl}${api_key}&limit=12&q=${buscador}`) // pendiente sacar el &q a constante busqueda del buscador shaaaaa
 .then ((res)=>  res.json()) 
.then ((responses) => {

  responses.data.forEach(response => {
    url = response.images.downsized_medium.url
    console.log(url)}
  )

  let espacios = document.getElementsByClassName("res")
  for (let i = 0; i < espacios.length; i++) {
    url = response.images.downsized_medium.url
    espacio.setAttribute("src", url)
    
  }
  // espacios.forEach(espacio => {
  //   espacio.setAttribute("src", url)
  // })
  
  
  
})
.catch((err)  => console.log(err))
}

let resultados = document.getElementById("resultados")
const api_key = "?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq"
 const giphysearchurl = "http://api.giphy.com/v1/gifs/search"
 let input = document.getElementById("buscador")
 let imagen_buscar = document.getElementById("imagen_buscar")
 imagen_buscar.addEventListener("click", buscar)
 
 

// let template = ""
// let busqueda = input.value


//  fetch(`${giphysearchurl}${api_key}&q=perro`) // pendiente sacar el &q a constante busqueda del buscador
//  .then ((res)=>  res.json())
// .then ((search) => console.log (search))
// .catch((err)  => console.log(err))



// let primergif = fetch(`${giphysearchurl}/${api_key}&q:perro`)
// console.log(primergif)

