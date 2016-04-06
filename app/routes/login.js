import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createSeller(params) {
      var newSeller = this.store.createRecord('user', params);
      console.log('it kind of works');
      newSeller.save();
      console.log('it works');
      this.transitionTo('index');
    }
  }
});
