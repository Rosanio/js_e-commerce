import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem() {
      console.log(this.get('item.cost'));
      var params = {
        name: this.get("item.name"),
        description: this.get("item.description"),
        cost: parseFloat(this.get("item.cost")),
        quantity: parseInt(this.get('item.quantity')),
        picture: this.get('item.picture'),
      };
      console.log(params);
      this.sendAction('updateItem', params);
    }
  }
});
