import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  showDetails: false,
  shoppingCart: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    showDetails(item){
      this.toggleProperty('showDetails');
      console.log(this.get('currentUser').get('client').username);
      if(this.get('currentUser').get('client').username !== 'Guest') {
        this.sendAction('detailsToggle', this.get('showDetails'), item);
      }
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
