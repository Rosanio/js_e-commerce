import Ember from 'ember';

export default Ember.Component.extend({
  newBuyerShow: false,

  actions: {
    newBuyerShow() {
      this.set('newBuyerShow', true);
    },
    createBuyer() {
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        address: this.get('address'),
        seller: false,
        buyer: true,
      };
      this.set('newBuyerShow', false);
      this.sendAction('createBuyer', params);
    }

  }
});
