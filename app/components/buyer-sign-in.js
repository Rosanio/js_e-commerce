import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buyerLogIn(){
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.set('username', '');
      this.set('password', '');
      this.sendAction('signInBuyer', params);
    }
  }
});
