import {GridConstants} from '../actions/grid_actions.js'
import * as PokerManger from '../util/poker_manager.js';
import{ merge } from 'lodash';

let defaultState = {
  opponentGrid: createOpponentGrid(),
  heroGrid: createHeroGrid(),
  tableGrid: createTableGrid(),
  possibleNumberHands: 1,
  numberOfQuads: 0,
  numberOfFullHouses: 0,
  numberOfFlushes: 0,
  numberOfStraights: 0,
  numberOfThreeOFAKinds: 0,
  numberOfJustPair: 0,
  numberOfTwoPairs: 0,
  numberOfOverPair: 0,
  numberOfTopPair: 0,
  numberOfPPBelowTp: 0,
  numberOfAceHigh: 0,
  numberOfNothing: 0,
  numberOfPossibleFlushDraw: 0,
  numberOfOESD: 0,
  deadCardsTable: []
  }

function createOpponentGrid(){
  const opponentGrid = new PokerManger.Board(13)
  return opponentGrid;
}

function createHeroGrid() {
  const heroGrid = new PokerManger.HeroBoard()
  return heroGrid;
}

function createTableGrid() {
  const tableGrid = new PokerManger.TableBoard()
  return tableGrid;
}


const PokerGridReducer = (state = defaultState,action) => {
  let newState;
  switch(action.type) {
    case GridConstants.UPDATE_OPPONENT_GRID:
      let newGrid = action.grid;
      newState = merge({},state,{opponentGrid: newGrid});
      return newState;
    case GridConstants.UPDATE_HERO_GRID:

      let newHeroGrid = action.herogrid;
      newState = merge({},state,{heroGrid: newHeroGrid});
    return newState;
    case GridConstants.UPDATE_TABLE_GRID:
      let newOpponentGrid = action.tablegrid;
      newState = merge({},state,{tableGrid: newOpponentGrid});
    return newState;
    case GridConstants.UPDATE_NUMBER_POSSIBLE_HANDS:
      let deadCardsHero = state.heroGrid.selectedcards();
      let newDeadCardsTable = state.tableGrid.selectedcards();
      let deadCards = deadCardsHero.concat(newDeadCardsTable);

      let newPossibleNumberHands = state.opponentGrid.createPossibleHandsFromSelectedHands(deadCards);
      let newNumberOfQuads = state.opponentGrid.givenFlopQuads(newDeadCardsTable);
      let newNumberOfFullHouses = state.opponentGrid.givenFlopFullHouse(newDeadCardsTable);
      let newNumberOfFlushes = state.opponentGrid.givenFlopFlush(newDeadCardsTable)
      let newNumberOfStraights = state.opponentGrid.givenFlopStraight(newDeadCardsTable);
      let newNumberOfThreeOFAKinds = state.opponentGrid.givenFlopThreeOfKind(newDeadCardsTable);
      let newNumberOfJustPair = state.opponentGrid.givenFlopJustPair(newDeadCardsTable);
      let newNumberOfTwoPairs = state.opponentGrid.givenFlopTwoPair(newDeadCardsTable);
      let newNumberOfOverPair = state.opponentGrid.givenFlopOverPair(newDeadCardsTable);
      let newNumberOfTopPair = state.opponentGrid.givenFlopTopPair(newDeadCardsTable);
      let newNumberOfPPBelowTp = state.opponentGrid.givenFlopPPBelowPair(newDeadCardsTable);
      let newNumberOfAceHigh = state.opponentGrid.givenFlopAceHigh(newDeadCardsTable);
      let newNumberOfNothing = state.opponentGrid.givenFlopNothing(newDeadCardsTable);
      let newNumberOfPossibleFlushDraw = state.opponentGrid.givenFlopPossibleFlushDraw(newDeadCardsTable);
      newState = merge({},state,{
        possibleNumberHands: newPossibleNumberHands,
        numberOfQuads: newNumberOfQuads,
        numberOfFullHouses: newNumberOfFullHouses,
        numberOfFlushes: newNumberOfFlushes,
        numberOfStraights: newNumberOfStraights,
        numberOfThreeOFAKinds: newNumberOfThreeOFAKinds,
        numberOfJustPair: newNumberOfJustPair,
        numberOfTwoPairs: newNumberOfTwoPairs,
        numberOfOverPair: newNumberOfOverPair,
        numberOfTopPair: newNumberOfTopPair,
        numberOfPPBelowTp: newNumberOfPPBelowTp,
        numberOfAceHigh: newNumberOfAceHigh,
        numberOfNothing: newNumberOfNothing,
        numberOfPossibleFlushDraw: newNumberOfPossibleFlushDraw,
        deadCardsTable: newDeadCardsTable
      });
    return newState;
  default:
    return state;
  }
};
export default PokerGridReducer;
