import ApplicationAdapter from './application';

export default class TodoAdapter extends ApplicationAdapter {
  namespace = 'todos/1';

  endpoint() {
    return `${this.host}/${this.namespace}/todo_items`;
  }

  urlForQuery() {
    return this.endpoint();
  }
}
