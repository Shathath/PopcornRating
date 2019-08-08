export class HomeContainer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log("HomeContainer is inserted on DOM")
    }
    set hphase(hphase){
        this.setAttribute(hphase,hphase)
    }
}
customElements.define('home-container',HomeContainer)

