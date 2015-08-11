import Ember from 'ember';

function addPlayer(name) {
  return {
    type: 'ADD_PLAYER',
    name: name
  };
}

export default Ember.Component.extend({
  nameToAdd: '',

  store: Ember.inject.service(),

  actions: {
    addPlayer(name) {
      this.get('store').dispatch(addPlayer(name));
      this.set('nameToAdd', '');
    }
  }
});
