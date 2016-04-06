import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createSeller(params) {
      var newSeller = this.store.createRecord('user', params);
      newSeller.save();
      this.transitionTo('index');
    }
  }
});
