import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('buyer-register', 'Integration | Component | buyer register', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{buyer-register}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#buyer-register}}
      template block text
    {{/buyer-register}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
