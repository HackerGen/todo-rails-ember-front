import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

export default class TodoAppComponent extends Component {
  @service store;
  @tracked text = '';
  @tracked items = [];

  constructor() {
    super(...arguments);
    this.loadItems.perform();
  }

  @action
  submit(model, event) {
    event.preventDefault();
    const id = model[model.length - 1].id + 1;
    const newTodo = {
      id,
      todo: this.text,
    };

    model.pushObject(newTodo);
  }

  @action
  delete(model, item) {
    const index = model.findIndex((todo) => todo.id === item.id);
    model.splice(index, 1);
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }

  @task({ restartable: true })
  *loadItems() {
    this.items = yield this.store.query('todo_item', {});
  }
}
