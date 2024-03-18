const rr = 'something is wrong. . .'

class Bullet{
    constructor(title, belongsToParent = 'none'){
        this.title = title;
        this.belongsToParent = belongsToParent;
    }
    // methods
    editTitle(newTitle){
        this.title = newTitle;
    }

    editIsComplete(){
        switch(this.isComplete){
            case ('no'): 
                this.isComplete = 'yes';
                break;
            case ('yes'):
                this.isComplete = 'no';
                break;
            default:
                console.log(rr);
                break;
        }
    }

    changeParent(newParent){
        this.belongsToParent = newParent;
    }

    delete(){
        let warning = 'warning, deleting this section will delete all nested bullets';
        console.log(warning)
    }
    display(){

    }


}

class Task extends Bullet{
    constructor(title, belongsToParent){
        super(title, belongsToParent);
        this.isComplete = 'no';
    }
}



class Section extends Bullet{
    constructor(title, belongsToParent){
        super(title, belongsToParent);
        this.taskArray = [];
    }
    addExistingTask(existingTask){
        existingTask.changeParent(this.title);
        this.taskArray.push(existingTask);
    }
    addNewTask(newTaskTitle){
        let newTask = new Task(newTaskTitle, this.title);
        this.taskArray.push(newTask);
    }

}
let task1 = new Task('wipe ass');
let section1 = new Section('things to do today');
section1.changeParent('warioparty');
console.table(section1)
section1.delete()
section1.addNewTask('wash hands');


section1.addExistingTask(task1);
console.table(section1.taskArray)
task1.editIsComplete();
console.table(section1.taskArray)