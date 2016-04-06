import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  
  actions: {
    addStoreItem(params){
      this.sendAction("addStoreItem", params);
    },
  }
});
