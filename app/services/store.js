import Ember from 'ember';
import Redux from 'npm:redux';
import _ from 'npm:lodash';

let { createStore } = Redux;

const initialState = {
  players: [
    { name: 'Lebron James' },
    { name: 'Larry Bird' }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      return {
        players: [...state.players, { name: action.name }]
      };
    default:
      return state;
  }
}

export default Ember.Service.extend({
  init() {
    this._super();

    this._store = createStore(reducer);

    this._store.subscribe(() => {
      this.set('state', _.cloneDeep(this._store.getState()));
    });

    this.set('state', _.cloneDeep(this._store.getState()));
  },

  dispatch(action) {
    this._store.dispatch(action);
  }
});
