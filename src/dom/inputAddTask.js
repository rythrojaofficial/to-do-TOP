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
    let radioSectionLabel = new HtmlElement('label', radioSectionWrapper.element,
        { for: 'section' }, 'Section');

    // details 
    let inputName = new HtmlElement('input', wrapper.element,
        {
            type: 'text',
            placeholder: 'Name'
        });
    let details = new HtmlElement('textarea', wrapper.element,
        { placeholder:'details' });

    let newItemButton = new ButtonElement(wrapper.element,
        newItemButtonFunction,
        {},
        'add new');
    function newItemButtonFunction(){
        // determine whether you're creating a task or a section
        // for now its just always a task with name, no details
        let newTask = new Task(inputName.element.value);
        newTask.display();
        inputName.element.value = ''
    }
}



