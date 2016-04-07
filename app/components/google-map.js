import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(50, 50),
        zoom: 9
      };
      this.get('map').findMap(container, options);
    }
  }
});
