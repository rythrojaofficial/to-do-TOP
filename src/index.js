import { Bullet, Task, Section, Project } from "./hierarchy";
import './styles/styles.css';

let project1 = new Project('my tasks');
    let section1 = new Section('things to do today');
    project1.addExistingSection(section1);

let task1 = new Task('wipe ass');
project1.displayArray();
section1.delete();
let task2 = new Task('wash hands');
section1.addExistingTask(task2);


section1.addExistingTask(task1);
section1.displayArray();

task1.editIsComplete();
section1.displayArray();
