import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  cost: DS.attr('number'),
  quantity: DS.attr('number'),
  picture: DS.attr(),
  seller: DS.belongsTo('user', {inverse:"sellingHistory"}, {async:true}),
  buyer: DS.hasMany('user', {inverse:"buyingHistory"}, {async:true})

});
