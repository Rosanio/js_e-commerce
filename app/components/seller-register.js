import Ember from 'ember';

export default Ember.Component.extend({
  newSellerShow: false,

  actions: {
    newSellerShow() {
      this.set('newSellerShow', true);
    },
    createSeller() {
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        address: this.get('address'),
        seller: true,
        buyer: true,
      };
      this.set('newSellerShow', false);
      this.sendAction('createSeller', params);
    }

  }
});
