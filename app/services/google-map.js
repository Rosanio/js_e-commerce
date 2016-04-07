import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },

  displayRoute(map){
    return new this.googleMaps.DirectionsRenderer({
      map: map
    });
  },

  getRequest(clientLocation, ownerLocation){
    var request = {
      destination: ownerLocation,
      origin: clientLocation,
      travelMode: this.googleMaps.TravelMode.DRIVING
    };
    return request;
  },

  getDirections(directionsDisplay, request){
    var directionsService = new this.googleMaps.DirectionsService();
    var google = this.googleMaps;
    directionsService.route(request, function(response, status){
      if (status === google.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
      }
    });
  },

  placeMarker(map, ownerLocation) {
    var marker = new this.googleMaps.Marker({
      map: map,
      position: ownerLocation,
      title: "Seller Location"
    });
    return marker;
  }

});
