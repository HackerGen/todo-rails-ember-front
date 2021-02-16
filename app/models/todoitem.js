import Model, { attr } from '@ember-data/model';

export default class TodoitemModel extends Model {
  @attr('string') name;
  @attr('boolean', { defaultValue: false }) done;
  @attr('number') todo_it;
}
