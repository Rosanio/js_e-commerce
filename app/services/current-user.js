import Ember from 'ember';

export default Ember.Service.extend({
  client: {username: "Matt", password: "132"},

  logIn(user){
    this.set('client', user);
  }
});
