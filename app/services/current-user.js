import Ember from 'ember';

export default Ember.Service.extend({
  client: {username: "Guest", password: "132"},

  logIn(user){
    this.set('client', user);
  }
});
