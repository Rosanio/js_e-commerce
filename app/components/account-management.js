import Ember from 'ember';

export default Ember.Component.extend({
  updateUser: false,
  actions: {
    updateUser() {
      this.set('updateUser', true);
    },
    editUser() {
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        address: this.get('address'),
      };
      this.set('updateUser', false);
      this.sendAction('editUser', params);
    }
  }
});
