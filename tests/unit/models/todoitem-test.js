import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | todo_item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('todo_item.js', {});
    assert.ok(model);
  });
});
