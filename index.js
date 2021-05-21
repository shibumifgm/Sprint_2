let html = '  <img src="/imagenes/close.svg" alt="" srcset="" id="close"> '
 let header = document.getElementById("header");
 //let logo = document.getElementById("logo")
 let navbar = document.getElementById("navbar")
 let ul = document.getElementById("ul")
 let mostrarX = ( )  => {
    header.innerHTML += html
     cerrar  = document.getElementById("close")
     abrir = document.getElementById("open")
    header.replaceChild(cerrar,abrir)
 

    }
//      let menuHamburgesa = document.createElement("img")
//  menuHamburgesa.setAttribute("id","menuHamburguesa")
// navbar.appendChild(menuHamburgesa)
// navbar.replaceChild( menuHamburgesa,ul)
// abrir = document.getElementById("open")
// cerrar = document.getElementById("close")
// navbar.replaceChild(cerrar,abrir)
//  console.log(navbar)}



 let abrir = document.getElementById("open")
 abrir.addEventListener("click" ,mostrarX )





// menuHamburgesa.innerHTML = html
// let abierto = document.getElementById("open")
// abierto.style.display = "none"
// let menu = document.getElementById("header")
//logo.nextElementSibling.remove()
// replaceWith
// menuHamburgesa.innerHTML = html

// with(menuHamburgesa) {
//     replaceWith("foo");
//   }

