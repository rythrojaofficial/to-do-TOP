export class HtmlElement{
    constructor(type, parent, propertiesObject = {}, content = ''){
        this.element = '';
        this.type = type;
        this.parent = parent;
        this.properties = propertiesObject;
        this.content = content;
        this.add()
    }

    add(){
        let newElement = document.createElement(this.type);
            
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.content !== ''){
            newElement.textContent = this.content;
        }
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        
    }

    addProperties(element, object){
        
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
}