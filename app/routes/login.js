import Ember from 'ember';

export default Ember.Route.extend({

  currentUser: Ember.inject.service(),
  model: function(){
    return Ember.RSVP.hash({
      allUsers: this.store.findAll('user'),
      currentUser: this.get('currentUser')
    });
  },

  actions: {

    createSeller(params) {
      var newSeller = this.store.createRecord('user', params);
      newSeller.save();
      this.get('currentUser').logIn(newSeller);
      this.transitionTo('login');
    },

    signIn(params){
      var model = this.currentModel
      console.log(model);

    }
  }
});
