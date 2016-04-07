import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  firstName: DS.attr(), //optional
  lastName: DS.attr(), //optional
  address: DS.attr(), //optional
  latitude: DS.attr('number'), //created from address
  longitude: DS.attr('number'),
  seller: DS.attr('boolean'),
  buyer: DS.attr('boolean'),
  sellingHistory: DS.hasMany('item', {inverse:"seller"}, {async:true}), //add items when posted to store, not when sold
  buyingHistory: DS.hasMany('item', {inverse:"buyer"}, {async:true})
});
