// const template = document.createElement("template");

// template.innerHTML = `
//     <nav class="navbar">
//         <div class="logo">
//             <a href="index.html">
//             <img src="img/logo.png" height="60">
//             </a>
//         </div>
//         <ul>
//             <li><a href="index.html">Inicio</a></li>
//             <li><a href="galeria.html">Galeria</a></li>
//             <li><a href="contacto.html">Contacto</a></li>
//         </ul>
//     </nav>
// `;

// class CustomHeader extends HTMLElement {
//     constructor(){
//         super();

//         const clone = template.content.cloneNode(true);
        
//         this.appendChild(clone);
//     }
// }

// window.customElements.define("gsn-nav", CustomHeader);

class CustomHeader extends HTMLElement {
    async connectedCallback() {
         
        const response = await fetch("/components/header.html");
        const html = await response.text();
         
        this.innerHTML = html;
    }
}

window.customElements.define("gsn-nav", CustomHeader);