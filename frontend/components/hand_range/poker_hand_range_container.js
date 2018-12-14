import {connect} from 'react-redux';
import GridShow from './grid_show';
import { updateOpponentGrid,updateHeroGrid,updateTableGrid,updateNumberPossibleHands,updateSlider }  from '../../actions/grid_actions.js'
import { merge } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const opponentGrid = merge({}, state.grids.opponentGrid);
  const heroGrid = merge({}, state.grids.heroGrid);
  const tableGrid = merge({}, state.grids.tableGrid);
  const numberOfHands = merge({},{
    numberOfHands: state.grids.possibleNumberHands,
    numberOfQuads:state.grids.numberOfQuads,
    numberOfFullHouses: state.grids.numberOfFullHouses,
    numberOfFlushes: state.grids.numberOfFlushes,
    numberOfStraights: state.grids.numberOfStraights,
    numberOfThreeOFAKinds: state.grids.numberOfThreeOFAKinds,
    numberOfJustPair: state.grids.numberOfJustPair,
    numberOfTwoPairs: state.grids.numberOfTwoPairs,
    numberOfOverPair: state.grids.numberOfOverPair,
    numberOfTopPair: state.grids.numberOfTopPair,
    numberOfPPBelowTp: state.grids.numberOfPPBelowTp,
    numberOfAceHigh: state.grids.numberOfAceHigh,
    numberOfNothing: state.grids.numberOfNothing,
    numberOfPossibleFlushDraw: state.grids.numberOfPossibleFlushDraw,
    deadCardsTable: state.grids.deadCardsTable
  });
  return {
    opponentGrid,
    heroGrid,
    tableGrid,
    numberOfHands
  };
};

const mapdispatchToProps = dispatch => ({
  updateOpponentGrid: (grid) => dispatch(updateOpponentGrid(grid)),
  updateHeroGrid: (grid) => dispatch(updateHeroGrid(grid)),
  updateTableGrid: (grid) => dispatch(updateTableGrid(grid)),
  updateNumberPossibleHands: () => dispatch(updateNumberPossibleHands() ),
  updateSlider: (value) => dispatch(updateSlider(value))
});

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(GridShow);
