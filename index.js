// hover de la imagen crea tu gifo por cambio de imagen 
let creatugifo = document.getElementById("creatugifo")
let imagenHover = new Image(); 
imagenHover.src = "./imagenes/CTA-crear-gifo-hover.svg"

imagenNormal = creatugifo.firstElementChild


let cambio = ()=> creatugifo.replaceChild(imagenHover,imagenNormal)
let cambio2 = ()=> creatugifo.replaceChild(imagenNormal,imagenHover)
creatugifo.addEventListener("mouseenter",cambio )
creatugifo.addEventListener("mouseleave", cambio2)

// let html = '  <img src="/imagenes/close.svg" alt="" srcset="" id="close"> '
//  let header = document.getElementById("header");
//  //let logo = document.getElementById("logo")
//  let navbar = document.getElementById("navbar")
//  let ul = document.getElementById("ul")
//  let mostrarX = ( )  => {
//     header.innerHTML += html
//     let cerrar  = document.getElementById("close")
//      let abrir = document.getElementById("open")
//     header.replaceChild(cerrar,abrir)
// }
//   let abrir = document.getElementById("open")
//  let cerrar = document.getElementById("close")

//  abrir.addEventListener("click" ,mostrarX )
//  cerrar.addEventListener("click", mostrarY)
//  let mostrarY = ()=> { header.replaceChild(abrir,cerrar) }


// //      let menuHamburgesa = document.createElement("img")
// //  menuHamburgesa.setAttribute("id","menuHamburguesa")
// // navbar.appendChild(menuHamburgesa)
// // navbar.replaceChild( menuHamburgesa,ul)
// // abrir = document.getElementById("open")
// // cerrar = document.getElementById("close")
// // navbar.replaceChild(cerrar,abrir)
// //  console.log(navbar)}

// // menuHamburgesa.innerHTML = html
// // let abierto = document.getElementById("open")
// // abierto.style.display = "none"
// // let menu = document.getElementById("header")
// //logo.nextElementSibling.remove()
// // replaceWith
// // menuHamburgesa.innerHTML = html

// // with(menuHamburgesa) {
// //     replaceWith("foo");
// //   }