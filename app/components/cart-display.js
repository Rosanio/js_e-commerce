import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  notInCart: false,
  actions:{
    checkout(){
      this.sendAction("checkout");
    }

  }
});
