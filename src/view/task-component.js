import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskComponentTemplate(name) {
  return (
        `<li class="task">${name}</li>`
           );
}


export default class TaskComponent extends AbstractComponent {
  
  constructor({name}) {
    super();
    this.name = name;
  }

  get template() {
    return createTaskComponentTemplate(this.name);
  }
}
