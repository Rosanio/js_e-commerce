import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  showDetails: false,
  shoppingCart: Ember.inject.service(),

  actions: {
    showDetails(){
      this.toggleProperty('showDetails');
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
