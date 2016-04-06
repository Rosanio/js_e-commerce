import Ember from 'ember';

export default Ember.Service.extend({
  cart: [],

  add(item) {
    this.get('cart').pushObject(item);
  },

  remove(item){
    var location = this.get('cart').indexOf(item);
    this.get('cart').removeAt(location);
  },

  subTotal: Ember.computed('cart.@each.item', function() {
    var sum = 0;
    for(var i=0; i < this.get('cart').length; i++){
      sum += this.get('cart')[i].get('cost');
    }
    return sum;
  })
});
