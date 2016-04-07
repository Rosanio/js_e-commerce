import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  notInCart: true,
  itemSort: ['id:desc'],
  sortedItems: Ember.computed.sort('owner.sellingHistory', 'itemSort'),
  showUpdateForm: false,
  itemToEdit: undefined,
  actions: {
    addStoreItem(params){
      this.sendAction("addStoreItem", params);
    },
    editUser(params){
      this.sendAction("editUser", params);
    },
    detailsToggle(showDetails, item){
      if(showDetails && item.get('seller').get('id') === this.get('currentUser').get('client').get('id')){ //guaranteed unique
        console.log('passed');
        this.set('showUpdateForm', true);
        this.set('itemToEdit', item);
      }
    },
    updateItem(params){
      this.set('showUpdateForm', false);
      this.sendAction('updateItem', params, this.get('itemToEdit'));
    }
  }
});
