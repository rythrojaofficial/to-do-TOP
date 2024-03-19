export function htmlElementsFrom(someArray){
    let div = document.createElement('div');
        for (let i = 0; i < someArray.length; i++){
            let element = document.createElement('div');
                element.textContent = someArray[i].title;

                assignClass(element,
                    [someArray[i].hierarchy, someArray[i].iscomplete]
                    );
                appendElement(element, document.querySelector('body'))
            
        }
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