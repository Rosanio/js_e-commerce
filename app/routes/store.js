import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    var key = config.myApiKey;
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + key;
    return Ember.RSVP.hash({
      owner: this.store.findRecord('user', params.user_id),
      parseAddress: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  },
  afterModel(model){
    return model.owner.get('sellingHistory');
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
      var user = this.currentModel.owner;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          user.set(key, params[key]);
        }
      });
      user.save();
      if(params.address !== undefined){
        var address = params.address.replace(' ', '+');
        var key = config.myApiKey;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + key;
        Ember.$.getJSON(url).then(function(responseJSON) {
          var location = responseJSON.results[0].geometry.location;
          user.set('latitude', location.lat);
          user.set('longitude', location.lng);
          user.save();
        });
      }
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
