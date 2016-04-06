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
      var routing;

      model.allUsers.forEach(function(user){
        if(user.get("username") === params.username && user.get("password") === params.password){
          model.currentUser.logIn(user);
          console.log(model.currentUser.client);
          if(model.currentUser.client.get("seller")){
            routing = 'store';
            //route.transitionTo('store', model.currentUser.client.get('id'));
          } else {
            console.log('it works');
            routing = 'index';
            //route.transitionTo('index');
          }
        }
      });
      if(routing === 'store'){
        this.transitionTo(routing, model.currentUser.client.get('id'));
      } else if (routing === 'index') {
        this.transitionTo(routing);
      } else {
        alert("You made a typo!"); // change this line
        this.transitionTo('login');
      }

    }
  }
});
