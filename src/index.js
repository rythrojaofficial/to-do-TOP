import { Bullet, Task, Section, Project } from "./hierarchy";
import './styles/styles.css';

let project1 = new Project('my tasks');
    let section1 = new Section('things to do today');
    let task1 = new Task('wipe ass');
        task1.editIsComplete();
    let task2 = new Task('wash hands');
    project1.addExistingTask(task1);
    section1.addExistingTask(task2);
    project1.addExistingSection(section1);
    project1.display();
    project1.displayArray();
    section1.displayArray();

