## Color Corrector

### Background

Poker Hand Range Calculator

See equities, combination counts, and hand value breakdowns: instantly. This Poker hand Range Calculator will help you learn flop textures, how ranges split up on boards, how equities shift on turn and river cards. A tool to learn and improve your Texas Poker Hold'em strategy.


First, we start with a preflop range.
Get started by selecting a preflop range for the scenario you are analyzing. Custom rankings, saved ranges, and advanced selections.


### Functionality & MVP

With this Calculator, users will be able to:

- [ ] selecting a preflop range for the scenario you are analyzing.
- [ ] Assign ranges into groups,
- [ ] Input own hand.
- [ ] Get results instantly,
- [ ] Stores hands, winning, and losings for past hands.
- [ ] hand history.


### Wireframes

![wireframes](http://res.cloudinary.com/dnuopy1ir/image/upload/v1474241402/pokerRangeHandcalc_wireframe_reytn1.png)

### Technologies & Technical Challenges

This Calculator will be implemented using: React, Redux, Javascript, HTML, and CSS.

components -
 - [ ] Possible hands Grid
 - [ ] Hand ranking slider
 - [ ] Hand Grid
 - [ ] Eight preloaded/saved grid state buttons
 - [ ] Results text area


The primary technical challenges will be:

- Doing the calculations for the output for an individual group, or all groups: combination counts, equities against hero's hand, and hand values in the range.


### Implementation Timeline

**Day 1**: Get started on the visual element of the components,   By the end of the day, I will have:

- A completed grid component.
- highlighting of selected hands.
- Implement the connection between the Redux cycle and grid.

**Day 2**:Hero hand grid - aka your hand, and table card grid.  By the end of the day, I will have:

- A completed grid component for both your hand + table..
- highlighting of selected cards.
- Implement the connection between the Redux cycle hero hand + table.

**Day 3**: Hand ranking slider. + textarea for results.  By the end of the day:

- Implement slider for possible hands grid.
- add text area where results will appear.
- Start on results logic.

**Day 4**: Create grid for saved grid states. + finish logic for results.  By the end of the day:

- saved state grid.
- finish calculations for results selection.
