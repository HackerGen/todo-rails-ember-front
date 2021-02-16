import Model, { attr } from '@ember-data/model';

export default class TodoItemModel extends Model {
  @attr('string') name;
  @attr('boolean', { defaultValue: false }) done;
  @attr('number') todo_it;
}
