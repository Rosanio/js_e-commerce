import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      shoppingCart: this.get('shoppingCart')
    });
  },
  actions: {
    checkout(){
      this.currentModel.shoppingCart.finalSale(this.currentModel.currentUser);
      this.currentModel.shoppingCart.empty();
      this.transitionTo('index');
    }
  }
});
