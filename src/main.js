import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskComponent from './view/task-component.js';
import TaskAreaComponent from './view/task-area-component.js';
import TaskListComponent from './view/task-list-component.js';
import ButtonComponent from './view/button-component.js'
import {render, RenderPosition} from './framework/render.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.enter');
const taskAreaContainer = document.querySelector(".list");
const tasksBoardContainer = document.querySelector('.list');

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({boardContainer: tasksBoardContainer, tasksModel,});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskAreaComponent(), taskAreaContainer, RenderPosition.BEFOREBEGIN);

tasksBoardPresenter.init();
