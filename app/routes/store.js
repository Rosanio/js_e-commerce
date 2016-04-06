import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    addStoreItem(params){
      var newItem = this.store.createRecord('item', params);
      var user = params.seller;
      user.get('sellingHistory').addObject(newItem);
      newItem.save().then(function(){
        user.save();
      });
      this.transitionTo('store', params.seller.id);
    },

  }
});
