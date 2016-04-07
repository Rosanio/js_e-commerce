import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  currentUser: Ember.inject.service(),
  notShowingMap: true,

  actions: {
    showMapDirections(user) {
      this.set('notShowingMap', false);
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(user.get('latitude'), user.get('longitude')),
        zoom: 15
      };
      var clientLocation = {
        lat: this.get('currentUser').get('client').get('latitude'),
        lng: this.get('currentUser').get('client').get('longitude')
      };
      var ownerLocation = {
        lat: user.get('latitude'),
        lng: user.get('longitude')
      };
      var newMap = this.get('map').findMap(container, options);
      var directionsDisplay = this.get('map').displayRoute(newMap);
      var request = this.get('map').getRequest(clientLocation, ownerLocation);
      this.get('map').getDirections(directionsDisplay, request);
    },

    showMap(user) {
      this.set('notShowingMap', false);
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(user.get('latitude'), user.get('longitude')),
        zoom: 15
      };
      var ownerLocation = {
        lat: user.get('latitude'),
        lng: user.get('longitude')
      };
      var map = this.get('map').findMap(container, options);
      this.get('map').placeMarker(map, ownerLocation);
    }
  }
});
