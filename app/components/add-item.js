import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    addItem(){
      var params = {
        name: this.get("name"),
        description: this.get("description") ? this.get('description') : "",
        cost: parseFloat(this.get("cost")),
        quantity: parseInt(this.get('quantity')),
        picture: this.get('picture') ? this.get('picture') : "https://i.ytimg.com/vi/u5wU0xt3e54/maxresdefault.jpg",
        seller: this.get('user')
      };
      this.set('name', '');
      this.set('description', '');
      this.set('cost', '');
      this.set('quantity', '');
      this.set('picture', '');
      this.sendAction("addItem", params);
    }
  }
});
