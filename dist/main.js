(()=>{class e{constructor(e,t="none"){this.title=e,this.belongsToParent=t}editTitle(e){this.title=e}editIsComplete(){switch(this.isComplete){case"no":this.isComplete="yes";break;case"yes":this.isComplete="no";break;default:console.log("something is wrong. . .")}}changeParent(e){this.belongsToParent=e}delete(){console.log("warning, deleting this section will delete all nested bullets")}display(){}}class t extends e{constructor(e,t){super(e,t),this.isComplete="no"}}let s=new t("wipe ass"),a=new class extends e{constructor(e,t){super(e,t),this.taskArray=[]}addExistingTask(e){e.changeParent(this.title),this.taskArray.push(e)}addNewTask(e){let s=new t(e,this.title);this.taskArray.push(s)}}("things to do today");a.changeParent("warioparty"),console.table(a),a.delete(),a.addNewTask("wash hands"),a.addExistingTask(s),console.table(a.taskArray),s.editIsComplete(),console.table(a.taskArray)})();