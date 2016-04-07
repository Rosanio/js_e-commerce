import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  notInCart: true,
  itemSort: ['id:desc'],
  sortedItems: Ember.computed.sort('owner.sellingHistory', 'itemSort'),
  actions: {
    addStoreItem(params){
      this.sendAction("addStoreItem", params);
    },
    editUser(params){
      this.sendAction("editUser", params);
    }
  }
});
