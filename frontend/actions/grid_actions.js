export const GridConstants = {

  RECEIVE_HANDS: "RECEIVE_HANDS",
  RECEIVE_HANDS: "RECEIVE_HANDS",
  RECEIVE_CARD: "RECEIVE_CARD",
  RECEIVE_TABLE_CARD: "RECEIVE_TABLE_CARD",
  UPDATE_OPPONENT_GRID: "UPDATE_OPPONENT_GRID"
};

export const updateOpponentGrid = (grid) => ({
  type: GridConstants.UPDATE_OPPONENT_GRID,
  grid
});
export const receiveOwnHandCard = (card) => ({
  type: GridConstants.RECEIVE_CARD,
  card
})
export const receiveTableCard = (card) => ({
  type: GridConstants.RECEIVE_TABLE_CARD,
  card
})
