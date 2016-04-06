import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    addItem(params){
      this.sendAction("addItem", params);
    }
  }
});
