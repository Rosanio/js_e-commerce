import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  currentUser: Ember.inject.service(),

  actions: {
    showMap(user) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(user.get('latitude'), user.get('longitude')),
        zoom: 15
      };
      var clientLocation = {
        lat: this.get('currentUser').get('client').get('latitude'),
        lng: this.get('currentUser').get('client').get('longitude')
      };
      console.log(clientLocation);
      var ownerLocation = {
        lat: user.get('latitude'),
        lng: user.get('longitude')
      };
      console.log(ownerLocation);
      var newMap = this.get('map').findMap(container, options);
      var directionsDisplay = this.get('map').displayRoute(newMap);
      var request = this.get('map').getRequest(clientLocation, ownerLocation);
      return this.get('map').getDirections(directionsDisplay, request);
      //return newMap;
    }
  }
});
