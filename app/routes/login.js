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

    createUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.get('currentUser').logIn(newUser);
      if(newUser.get('seller')){
        this.transitionTo('store', newUser.id);
      } else {
        this.transitionTo('index');
      }
    },

    signIn(params){
      var model = this.currentModel;
      model.allUsers.forEach(function(user){
        if(user.get("username") === params.username && user.get("password") === params.password){
          model.currentUser.logIn(user);
        }
      });
      if(model.currentUser.client.get("seller")){
        this.transitionTo('store', model.currentUser.client.get('id'));
      } else {
        this.transitionTo('index');
      }

    }
  }
});
