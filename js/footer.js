
class CustomFooter extends HTMLElement {
    async connectedCallback() {
         
        const response = await fetch("/components/footer.html");
        const html = await response.text();
         
        this.innerHTML = html;
    }
}

window.customElements.define("gsn-footer", CustomFooter);