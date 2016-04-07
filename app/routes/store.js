import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  },
  afterModel(model){
    return model.get('sellingHistory');
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
    editUser(params) {
      var user = this.currentModel;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          user.set(key, params[key]);
        }
      });
      user.save();
      this.transitionTo('store', user.id);
    },
    updateItem(params, item){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !== '' ) {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('store', this.currentModel.id);
    }

  }
});
