import TasksListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-area-component.js';
import ButtonComponent from '../view/button-component.js';
import PlaceholderComponent from '../view/placeholder-component.js'; 
import {render} from '../framework/render.js';


export default class TasksBoardPresenter {
  #tasksBoardComponent = new TaskBoardComponent(); 
  #taskListComponent = new TasksListComponent(); 

  #boardContainer; 
  #tasksModel; 

  constructor({boardContainer, tasksModel}) {
    this.#boardContainer = boardContainer; 
    this.#tasksModel = tasksModel;
  }


  init() {
    render(this.#tasksBoardComponent, this.#boardContainer); 
    this.#renderBoard();
  }

  #renderBoard() {
    const statuses = ['backlog', 'in-process', 'done', 'basket'];

    statuses.forEach((status, index) => {
      const list = this.#tasksModel.tasks.find(l => l.status === status) || {
        title: status.charAt(0).toUpperCase() + status.slice(1),
        status: status,
        tasks: []
      };

      const tasksListComponent = new TasksListComponent(list.title, list.status);
      render(tasksListComponent, this.#tasksBoardComponent.element); 

      if (list.tasks.length === 0) {
        const placeholderComponent = new PlaceholderComponent();
        render(placeholderComponent, tasksListComponent.element);
      } else {
        list.tasks.forEach(task => {
          this.#renderTask(task, tasksListComponent.element);
        });
      }

      if (index === statuses.length - 1) {
        const clearButtonComponent = new ButtonComponent();
        tasksListComponent.element.appendChild(clearButtonComponent.element);
      }
    });
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
  }
}