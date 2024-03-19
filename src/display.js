export function htmlElementsFrom(someArray){
    let div = document.createElement('div');
        someArray.forEach((e) => {
            createHtmlElement(e);
        });
}

export function createHtmlElement(someElement){
    let element = document.createElement('div');
        element.textContent = someElement.title;

        assignClass(element, 
            [someElement.hierarchy,
            someElement.iscomplete
            ])
        appendElement(element, document.querySelector('body'));
}


function assignClass(htmlItem, propertyArray){
    for (let i = 0; i < propertyArray.length; i++){
        if (propertyArray[i]){
            htmlItem.classList.add(propertyArray[i])
        }
    }
   
}

function appendElement(elementToAppend, parentElement){
    parentElement.appendChild(elementToAppend);
}