import Ember from 'ember';

export function currency(params) {
  if(params[0] !== undefined) {
    return params[0].toFixed(2);
  }
}

export default Ember.Helper.helper(currency);
