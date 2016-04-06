import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sellerLogIn(){
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.set('username', '');
      this.set('password', '');
      this.sendAction('signInSeller', params);
    }
  }
});
