import {GridConstants} from '../actions/grid_actions.js'
import * as PokerManger from '../util/poker_manager.js';
import{ merge } from 'lodash';

let defaultState = {
  opponentGrid: createOpponentGrid(),
  heroGrid: createHeroGrid(),
  tableGrid: createTableGrid(),
  possibleNumberHands: 0,
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
  numberOfOESD: 0
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
      let deadCardsTable = state.tableGrid.selectedcards();
      let deadCards = deadCardsHero.concat(deadCardsTable);

      let newPossibleNumberHands = state.opponentGrid.createPossibleHandsFromSelectedHands(deadCards);
      let newNumberOfQuads = state.opponentGrid.givenFlopQuads(deadCardsTable);
      let newNumberOfFullHouses = state.opponentGrid.givenFlopFullHouse(deadCardsTable);
      let newNumberOfFlushes = state.opponentGrid.givenFlopFlush(deadCardsTable)
      let newNumberOfStraights = state.opponentGrid.givenFlopStraight(deadCardsTable);
      let newNumberOfThreeOFAKinds = state.opponentGrid.givenFlopThreeOfKind(deadCardsTable);
      let newNumberOfJustPair = state.opponentGrid.givenFlopJustPair(deadCardsTable);
      let newNumberOfTwoPairs = state.opponentGrid.givenFlopTwoPair(deadCardsTable);
      let newNumberOfOverPair = state.opponentGrid.givenFlopOverPair(deadCardsTable);
      let newNumberOfTopPair = state.opponentGrid.givenFlopTopPair(deadCardsTable);
      let newNumberOfPPBelowTp = state.opponentGrid.givenFlopPPBelowPair(deadCardsTable);
      let newNumberOfAceHigh = state.opponentGrid.givenFlopAceHigh(deadCardsTable);
      let newNumberOfNothing = state.opponentGrid.givenFlopNothing(deadCardsTable);
      let newNumberOfPossibleFlushDraw = state.opponentGrid.givenFlopPossibleFlushDraw(deadCardsTable);
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
        numberOfPossibleFlushDraw: newNumberOfPossibleFlushDraw
      });
    return newState;
    // case GridConstants.UPDATE_SLIDER:
    //   let newSliderGridValue = action.sliderValue;
    //   let newHandsFromSlider = state.opponentGrid.sliderChange(newSliderGridValue);
    //   newState = merge({},state,{opponentGrid: newHandsFromSlider })
  default:
    return state;
  }
};
export default PokerGridReducer;
