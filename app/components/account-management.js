import Ember from 'ember';

export default Ember.Component.extend({
  updateUser: false,
  actions: {
    updateUser() {
      this.set('updateUser', true);
    },
    editUser() {
      var params = {
        username: this.get('user.username'),
        password: this.get('user.password'),
        firstName: this.get('user.firstName'),
        lastName: this.get('user.lastName'),
        address: this.get('user.address'),
      };
      this.set('updateUser', false);
      this.sendAction('editUser', params);
    }
  }
});
