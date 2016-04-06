import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  firstName: DS.attr(), //optional
  lastName: DS.attr(), //optional
  address: DS.attr(), //optional
  seller: DS.attr('boolean'),
  buyer: DS.attr('boolean'),
  sellingHistory: DS.hasMany('item', {inverse:"seller"}, {async:true}), //add items when posted to store, not when sold
  buyingHistory: DS.hasMany('item', {inverse:"buyer"}, {async:true})
});
