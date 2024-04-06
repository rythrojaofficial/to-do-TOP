import { htmlElementsFrom, createHtmlElement } from "./dom/display";

const rr = 'something is wrong. . .'

export class Bullet{
    constructor(title, parent = 'no-parent'){
        this.title = title;
        this.hierarchy = 'no-hierarchy';
        this.parent = parent;
    }
    // methods
    editTitle(newTitle){
        this.title = newTitle;
    }

    editIsComplete(){
        switch(this.isComplete){
            case ('incomplete'): 
                this.isComplete = 'complete';
                break;
            case ('complete'):
                this.isComplete = 'incomplete';
                break;
            default:
                console.log(rr);
                break;
        }
    }

    changeParent(newParent){
        this.parent = newParent;
    }

    delete(){
        let warning = 'warning, deleting this will delete all nested bullets';
        console.log(warning)
    }
    display(){
        console.table(this);
        createHtmlElement(this);

    }


}

export class Task extends Bullet{
    constructor(title, parent){
        super(title, parent);
        this.hierarchy = 'task';
        this.isComplete = 'incomplete';
    }
}

export class Subtask extends Task{
    constructor(title, parent){
        super(title, parent);
        this.hierarchy = 'subtask';
        this.isComplete = 'incomplete';
    }
}



export class Section extends Bullet{
    constructor(title, parent){
        super(title, parent);
        this.hierarchy = 'section';
        this.taskArray = [];
    }
    addExistingTask(existingTask){
        existingTask.changeParent(this.title);
        this.taskArray.push(existingTask);
    }
    displayArray(){
        console.table(this.taskArray);
        htmlElementsFrom(this.taskArray);
    }

}

export class Project extends Bullet{
    constructor(title, parent){
        super(title, parent);
        this.hierarchy = 'project';
        this.taskArray = [];
        this.sectionArray = [];
    }
    addExistingTask(existingTask){
        existingTask.changeParent(this.title);
        if (!this.taskArray.includes(existingTask)){
            this.taskArray.push(existingTask);
        }
    }
    addExistingSection(existingSection){
        existingSection.changeParent(this.title);
        if (!this.sectionArray.includes(existingSection)){
            this.sectionArray.push(existingSection)
        }
    }
    displayArray(){
        console.table(this.sectionArray);
        htmlElementsFrom(this.taskArray);
        console.table(this.taskArray);
        htmlElementsFrom(this.sectionArray);
        
    }

}