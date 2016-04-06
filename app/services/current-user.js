import Ember from 'ember';

export default Ember.Service.extend({
  client: "Matt",

  logIn(user){
    this.set('client', user);
  }
});
