import {connect} from 'react-redux';
import GridShow from './grid_show';
import { updateOpponentGrid }  from '../../actions/grid_actions.js'
import { merge } from 'lodash';
// import {requestFuton} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  const opponentGrid = merge({}, state.Opponent_possible_hand.opponentGrid);
  // const heroGrid = state.heroGrid;
  // const tableGrid = state.tableGrid;
  // const currentUserFutonId = state.session.currentUser.futon.id
  // const futonId = parseInt(ownProps.params.futonId);
  // const futon = state.futons[futonId] || {};
  return {
    opponentGrid,
    // heroGrid,
    // tableGrid
    // futonId,
    // currentUserFutonId,
    // futon
  };
};

const mapdispatchToProps = dispatch => ({
   updateOpponentGrid: (grid) => dispatch(updateOpponentGrid(grid)),
  // updateHeroGrid: (x,y) => dispatch(updateHeroGrid(x, y)),
  // updatetableGrid: (x,y) => dispatch(updatetableGrid(x, y))
});

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(GridShow);
