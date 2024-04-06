import { HtmlElement } from "./htmlElement";


export function htmlElementsFrom(someArray){
    let div = document.createElement('div');
        someArray.forEach((e) => {
            createHtmlElement(e);
        });
}

export function createHtmlElement(someBulletObject){

    let wrapper = new HtmlElement('div', document.querySelector('body'));
    let text = new HtmlElement('div', wrapper.element,
        {}, someBulletObject.title);

    let properties = [someBulletObject.hierarchy,
            someBulletObject.iscomplete];

        assignClass(wrapper.element, properties)
        
        
    function assignClass(htmlItem, propertyArray){
        for (let i = 0; i < propertyArray.length; i++){
            if (propertyArray[i]){
                htmlItem.classList.add(propertyArray[i])
            }
        }
    }
}