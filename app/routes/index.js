import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      users: this.store.query('user', {
        orderBy: 'seller',
        equalTo: true
      }),
      recentItems: this.store.query('item', {
        limitToLast: 10
      }),
      currentUser: this.get('currentUser'),
      shoppingCart: this.get('shoppingCart'),
    });
  },




});
