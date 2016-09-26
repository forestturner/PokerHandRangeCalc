export const GridConstants = {
  RECEIVE_HANDS: "RECEIVE_HANDS",
  RECEIVE_HANDS: "RECEIVE_HANDS",
  UPDATE_HERO_GRID: "UPDATE_HERO_GRID",
  UPDATE_TABLE_GRID: "UPDATE_TABLE_GRID",
  UPDATE_OPPONENT_GRID: "UPDATE_OPPONENT_GRID",
  UPDATE_NUMBER_POSSIBLE_HANDS: "UPDATE_NUMBER_POSSIBLE_HANDS",
  UPDATE_SLIDER: "UPDATE_SLIDER"
};

export const updateOpponentGrid = (grid) => ({
  type: GridConstants.UPDATE_OPPONENT_GRID,
  grid
});
export const updateHeroGrid = (herogrid) => ({
  type: GridConstants.UPDATE_HERO_GRID,
  herogrid
})
export const updateTableGrid = (tablegrid) => ({
  type: GridConstants.UPDATE_TABLE_GRID,
  tablegrid
})
export const updateNumberPossibleHands = () => ({
  type: GridConstants.UPDATE_NUMBER_POSSIBLE_HANDS
})
export const updateSlider = (sliderValue) => ({
  type: GridConstants.UPDATE_SLIDER,
  sliderValue
})
