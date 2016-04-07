import Ember from 'ember';

export function currency(params) {
  return params[0].toFixed(2);
}

export default Ember.Helper.helper(currency);
