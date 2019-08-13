export class Images extends HTMLElement{
    constructor(){
        super()
    }
    
    set src(src)
    {
        
        this.style.setProperty('background-image',"url(" + src + ")")
        
       
    }
    set title(movie)
    {
        this.innerHTML = `<span style='visibility:hidden;color:#fff'>${movie.title}</span>`
    }
}

customElements.define('img-card',Images);