import {GridConstants} from '../actions/grid_actions.js'
import * as PokerManger from '../util/poker_manager.js';
import{ merge } from 'lodash';

let defaultState = {opponentGrid: createOpponentGrid(),heroGrid: {},tableGrid: {} }

function createOpponentGrid(){
  const opponentGrid = new PokerManger.Board(13)
  return opponentGrid;
}


const PokerGridReducer = (state = defaultState,action) => {
  let newState;
  switch(action.type) {
    case GridConstants.UPDATE_OPPONENT_GRID:
      let newGrid = action.grid;
      newState = merge({},state,{opponentGrid: newGrid});
      return newState;
  default:
    return state;
  }
};
export default PokerGridReducer;
