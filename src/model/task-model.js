import {groupedTasksArray} from '../const.js';

export default class TasksModel {
 #boardtasks = groupedTasksArray;

 get tasks() {
   return this.#boardtasks;
 }
}
