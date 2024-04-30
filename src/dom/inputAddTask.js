import { ButtonElement, HtmlElement } from "./htmlElement";
import { Task, Section } from "../hierarchy";
import { section1 } from "..";

export function inputAddTask(elementToAppendTo){
    let wrapper = new HtmlElement('div', 
        elementToAppendTo,
        {class: 'wrapper'});

    // radio fieldset 
    let fieldset = new HtmlElement('fieldset', wrapper.element);

    // radio Task or Section
    let radioTaskWrapper = new HtmlElement('div', fieldset.element);
    let radioTask = new HtmlElement('input', radioTaskWrapper.element,
        {
            type: 'radio',
            name: 'select-task-or-section',
            id:'radio-task',
            value: 'task'
        });
        radioTask.element.addEventListener('click', openSectionDetails)
    let radioTaskLabel = new HtmlElement('label', radioTaskWrapper.element,
        { for:'task' }, 'Task');
    let radioSectionWrapper = new HtmlElement('div', fieldset.element);
    let radioSection = new HtmlElement('input', radioSectionWrapper.element,
        {
            type: 'radio',
            name: 'select-task-or-section',
            id: 'radio-section',
            value: 'section'
        });
        radioSection.element.addEventListener('click', openSectionDetails)
    let radioSectionLabel = new HtmlElement('label', radioSectionWrapper.element,
        { for: 'section' }, 'Section');

    // details 
    let inputName = new HtmlElement('input', wrapper.element,
        {
            type: 'text',
            placeholder: 'Name'
        });

    let detailsWrapper = new HtmlElement('div', wrapper.element,
        {
            id: 'details-wrapper',
            style: 'display: none'
        })
    let details = new HtmlElement('textarea', detailsWrapper.element,
        { 
            placeholder:'details',
            name: 'input-details',
            id: 'input-details'
        });
    let hideDetailsButton = new ButtonElement(detailsWrapper.element, ()=> document.getElementById('details-wrapper').style.display = 'none',
            {}, 'hide details')
        // details.element.addEventListener('change', openSectionDetails);


    let newItemButton = new ButtonElement(wrapper.element,
        newItemButtonFunction,
        {},
        'add new');
    function newItemButtonFunction(){
        // determine whether you're creating a task or a section
        // for now its just always a task with name, no details
        switch(checkTaskSection()){
            case 'task':
                let newTask = new Task(inputName.element.value);
                newTask.display();
                inputName.element.value = '';
                // reset input box
                break;
            case 'section':
                let newSection = new Section(inputName.element.value);
                newSection.display();
                inputName.element.value = '';
                break;
            default:
                console.log('nothing selected');
                break;
        };
        
        
        
        
    }
}

function checkTaskSection(){
    let whatsChecked = false;
 
    if (document.getElementById('radio-task').checked){
        whatsChecked = 'task'
    }else if(document.getElementById('radio-section').checked){
        whatsChecked = 'section'
    }
    
    return whatsChecked
}

function openSectionDetails(){
    let sectionRadio = document.getElementById('radio-section');
    let taskRadio = document.getElementById('radio-task');
    let detailsSection = document.getElementById('details-wrapper');
    switch ( true ){
        case sectionRadio.checked:
            detailsSection.style.display = 'block';
            break;
        case taskRadio.checked:
            detailsSection.style.display = 'block';
            break;
        default:
            detailsSection.style.display = 'none'
            break;
            
    }   
        

        
    }
    // if (document.getElementById('radio-section').checked){
    //     document.getElementById('input-details').style.display = 'block'
    // }




