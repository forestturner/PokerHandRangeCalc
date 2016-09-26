// export default class PokerManger {
//   constructor(grid, handleClick) {
//     this.grid = grid;
//     this.handleClick = handleClick;
//   }
// }
//
// updateGrid(blocks){
//   this.blocks = blocks;
//   this._blocksToAdd().
// }
//
// _createMarkerOnGrid(grid) {
//   const pos = new google.maps.LatLng(futon.lat, futon.lng);
//   const marker = new google.maps.Marker({
//     position: pos,
//     map: this.map,
//     futonId: futon.id
//   });
//   marker.addListener('click', () => this.handleClick(futon));
//   this.markers.push(marker);
// }
export class Tile {
  constructor(board, pos, string,percentage, color="", cardsToRemove = []) {
      this.string = string;
      this.board = board;
      this.pos = pos;
      this.selected = false;
      this.color = color;
      this.percentage = percentage;

      // this.removedCards(cardsToRemove);
  }
  isSelected(){
    if(this.selected){
      return true;
    } else {
      return false;
    }
  }
  // removedCards(cardsToRemove) {
  //   for(let i = 0;i<this.cards.length; i++){
  //     for(let cardIndex = 0; i<cardsToRemove.length; i++){
  //       let newArray;
  //       if(cardsToRemove[cardIndex] === this.cards[cardIndex]){
  //         newArray = this.cards.slice(0,cardIndex - 1);
  //         newArray.
  //       }
  //     }
  //   }
  // }
  toggleSelected() {
  if (!this.selected) {
    this.selected = true;
  } else {
    this.selected = false;
  }

}
}

export class Board {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = [];
    this.selected = [];
    this.listOfHands = [];
    this.numberOfPossibleHands = 0;
    this.hands = [
    "AA","AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
    "AKo","KK","KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s",
    "AQo","KQo","QQ","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s",
    "AJo","KJo","QJo","JJ","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s",
    "ATo","KTo","QTo","JTo","TT","T9s","T8s","T7s","T6s","T5s","T4s","T3s","T2s",
    "A9o","K9o","Q9o","J9o","T9o","99","98s","97s","96s","95s","94s","93s","92s",
    "A8o","K8o","Q8o","J8o","T8o","98o","88","87s","86s","85s","84s","83s","82s",
    "A7o","K7s","Q7o","J7o","T7o","97o","87o","77","76s","75s","74s","73s","72s",
    "A6o","K6s","Q6o","J6o","T6o","96o","86o","76o","66","65s","64s","63s","62s",
    "A5o","K5s","Q5o","J5o","T5o","95o","85o","75o","65o","55","54s","53s","52s",
    "A4o","K4s","Q4o","J4o","T4o","94o","84o","74o","64o","54o","44","43s","42s",
    "A3o","K3s","Q3o","J3o","T3o","93o","83o","73o","63o","53o","43o","33","32s",
    "A2o","K2s","Q2o","J2o","T2o","92o","82o","72o","62o","52o","42o","32o","22"]
    this.percentage_table = {
    "AA":.005,"AKs":.035,"AQs":.040,"AJs":.055,"ATs":.060,"A9s":.085,"A8s":.105,"A7s":.120,"A6s":.155,"A5s":.155,"A4s":.170,"A3s":.205,"A2s":.215,
    "AKo":.050,"KK":.010,"KQs":.070,"KJs":.085,"KTs":.100,"K9s":.145,"K8s":.180,"K7s":.210,"K6s":.240,"K5s":.265,"K4s":.300,"K3s":.350,"K2s":.355,
    "AQo":.070,"KQo":.115,"QQ":.015,"QJs":.120,"QTs":.150,"Q9s":.185,"Q8s":.265,"Q7s":.320,"Q6s":.350,"Q5s":.375,"Q4s":.405,"Q3s":.415,"Q2s":.470,
    "AJo":.080,"KJo":.140,"QJo":.195,"JJ":.020,"JTs":.210,"J9s":.295,"J8s":.335,"J7s":.400,"J6s":.445,"J5s":.480,"J4s":.520,"J3s":.530,"J2s":.545,
    "ATo":.105,"KTo":.175,"QTo":.235,"JTo":.315,"TT":.025,"T9s":.335,"T8s":.400,"T7s":.445,"T6s":.525,"T5s":.545,"T4s":.590,"T3s":.615,"T2s":.635,
    "A9o":.145,"K9o":.225,"Q9o":.295,"J9o":.385,"T9o":.430,"99":.030,"98s":.425,"97s":.525,"96s":.560,"95s":.615,"94s":.665,"93s":.700,"92s":.710,
    "A8o":.165,"K8o":.285,"Q8o":.375,"J8o":.455,"T8o":.510,"98o":.560,"88":.035,"87s":.540,"86s":.610,"85s":.655,"84s":.715,"83s":.760,"82s":.785,
    "A7o":.200,"K7s":.345,"Q7o":.440,"J7o":.515,"T7o":.585,"97o":.620,"87o":.675,"77":.055,"76s":.650,"75s":.675,"74s":.745,"73s":.790,"72s":.895,
    "A6o":.255,"K6s":.365,"Q6o":.480,"J6o":.605,"T6o":.635,"96o":.720,"86o":.735,"76o":.770,"66":.090,"65s":.715,"64s":.760,"63s":.840,"62s":.895,
    "A5o":.250,"K5s":.395,"Q5o":.500,"J5o":.630,"T5o":.695,"95o":.705,"85o":.800,"75o":.820,"65o":.850,"55":.145,"54s":.780,"53s":.840,"52s":.900,
    "A4o":.275,"K4s":.415,"Q4o":.550,"J4o":.645,"T4o":.740,"94o":.810,"84o":.850,"74o":.895,"64o":.905,"54o":.900,"44":.230,"43s":.855,"42s":.900,
    "A3o":.305,"K3s":.465,"Q3o":.575,"J3o":.660,"T3o":.745,"93o":.830,"83o":.900,"73o":.930,"63o":.950,"53o":.940,"43o":.960,"33":.320,"32s":.910,
    "A2o":.345,"K2s":.490,"Q2o":.600,"J2o":.685,"T2o":.800,"92o":.900,"82o":.915,"72o":.970,"62o":.990,"52o":.980,"42o":.995,"32o":.995,"22":.420
    };

    this.sliderChange = this.sliderChange.bind(this);
    this.givenFlopQuads =this.givenFlopQuads.bind(this);
    this.givenFlopFullHouse =this.givenFlopFullHouse.bind(this);
    this.givenFlopFlush =this.givenFlopFlush.bind(this);
    this.givenFlopStraight = this.givenFlopStraight.bind(this);
    this.givenFlopThreeOfKind = this.givenFlopThreeOfKind.bind(this);
    this.givenFlopTwoPair = this.givenFlopTwoPair.bind(this);
    this.givenFlopOverPair =  this.givenFlopOverPair.bind(this);
    this.givenFlopTopPair =this.givenFlopTopPair.bind(this);
    this.givenFlopPPBelowPair =this.givenFlopPPBelowPair.bind(this);
    this.givenFlopAceHigh = this.givenFlopAceHigh.bind(this);
    this.givenFlopNothing = this.givenFlopNothing.bind(this);
    this.givenFlopPossibleFlushDraw = this.givenFlopPossibleFlushDraw.bind(this);
    this.givenFlopJustPair = this.givenFlopJustPair.bind(this);

    this.generateBoard();
    this.selectedHands();
  }


  sliderChange(percentage){
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if(this.grid[i][j].percentage  <= percentage){
          this.grid[i][j].selected = true;
        } else {
          this.grid[i][j].selected = false;
        }
      }
    }
    return this.grid;
  }


  generateBoard() {
    let count = 0;
    let color = "";
    for (let i = 0; i < this.gridSize; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.gridSize; j++) {
        const tile = new Tile(this, [i, j], this.hands[count],this.percentage_table[this.hands[count]]);
        this.grid[i].push(tile);
        count++;
      }
    }
  }
  selectedHands(){
    let results = [];
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if(this.grid[i][j].isSelected()){
          results.push(this.grid[i][j].string);
        }
      }
    }
    this.selected = results;
  }


  givenFlopQuads(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
            let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if (handMap[handMapKeys[k]] === 4){
          results = results + 1;
          break;
        }
      }
    }

    return results;
  }
  givenFlopFullHouse(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
       let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if (handMap[handMapKeys[k]] === 3){
          for(let l = 0; l < Object.keys(handMap).length; l++  ){
            if (handMap[handMapKeys[l]] === 2 && k!==l){
              results = results + 1;
            }
          }
        }
      }
    }

    return results;
  }
  givenFlopFlush(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {s:0,h:0,d:0,c:0};
      for(let j = 0; j<currentHandPlusFlop.length; j++){
        handMap[currentHandPlusFlop[j][1]] = handMap[currentHandPlusFlop[j][1]] + 1;
      }
      let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if(handMap[handMapKeys[k]] === 5){
          results = results + 1;
          break;
        }
      }
    }

    return results;
  }
  givenFlopStraight(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ]
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
        for(let hmm = 0; hmm < test.length; hmm++){
          if(test[hmm][0] === currentCard){
            test[hmm][1] = test[hmm][1] + 1;
          }
        }
      }
      let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length - 4; k++){
        if (test[k][1] >= 1 && test[k + 1][1] >= 1 && test[k + 2][1] >= 1 && test[k + 3][1] >= 1 && test[k + 4][1] >= 1){
          results = results + 1;
          break;
        }
      }
      if(handMap["A"] >= 1 && handMap[2] >= 1 && handMap[3] >= 1 && handMap[4] >= 1 && handMap[5] >= 1){
        results = results + 1;
      }
     }


    return results;
  }
  givenFlopThreeOfKind(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if (handMap[handMapKeys[k]] === 3){
          results = results + 1;
          break;
        }
      }
    }

    return results;
  }
  givenFlopTwoPair(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if (handMap[handMapKeys[k]] === 2){
          for(let l = 0; l < Object.keys(handMap).length; l++  ){
            if (handMap[handMapKeys[l]] === 2 && k!==l){
              results = results + 1;
              break;
            }
          }
        }
      }
    }

    return results;
  }
  givenFlopJustPair(flop){
    debugger;
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ]
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      for(let x = 0; x < flop.length; x++){
        let currentCardInFlop = flop[x][0];
        flopMap[currentCardInFlop] = flopMap[currentCardInFlop] + 1;
        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCardInFlop){
            test[y][1] = 1;
            break;
          }
        }
      }
      for(let j = 0; j < currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let highestIndex = 0;;
      for(let r = 0; r< test.length; r++){
        if(test[r][1] === 1){
          highestIndex = r;
        }
        if(handMap[test[r][0]] === 2){
          results = results + 1;
        }
      }
    }

    return results;
  }
  givenFlopOverPair(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ]
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      for(let x = 0; x < flop.length; x++){
        let currentCardInFlop = flop[x][0];
        flopMap[currentCardInFlop] = flopMap[currentCardInFlop] + 1;
        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCardInFlop){
            test[y][1] = 1;
            break;
          }
        }
      }
      for(let j = 0; j < currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let highestIndex = 0;;
      for(let r = 0; r< test.length; r++){
        if(test[r][1] === 1){
          highestIndex = r;
        }
        if(highestIndex === 0 && handMap[test[r][0]] === 2){
          results = results + 1;
        }
      }
    }

    return results;

  }
  givenFlopTopPair(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ]
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      for(let x = 0; x < flop.length; x++){
        let currentCardInFlop = flop[x][0];
        flopMap[currentCardInFlop] = flopMap[currentCardInFlop] + 1;
        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCardInFlop){
            test[y][1] = 1;
            break;
          }
        }
      }
      for(let j = 0; j < currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let highestIndex = 0;;
      for(let r = 0; r< test.length; r++){
        if(test[r][1] === 1){
          highestIndex = r;
        }
      }
      if( handMap[test[highestIndex][0]] === 2){
        results = results + 1;
      }
    }

    return results;

  }
  givenFlopPPBelowPair(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i];
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ]
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      for(let x = 0; x < flop.length; x++){
        let currentCardInFlop = flop[x][0];
        flopMap[currentCardInFlop] = flopMap[currentCardInFlop] + 1;

        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCardInFlop ){
            test[y][1] = 1;
          }
        }
      }
      for(let j = 0; j < currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }
      let highestIndex = 0;
      let nextIndex = 0;
      let happenOnce = false;
      for(let r = 0; r< test.length; r++){
        if(test[r][1] === 1 && highestIndex === 0 ){
          highestIndex = r;
        }
        if(test[r][1] === 1 && nextIndex === 0 && highestIndex !== 0 ){
          nextIndex = r;
        }
      }
      for(let h = 0; h<test.length; h++){
        if(test[h][1] === 2 && h < highestIndex && h > nextIndex){
          results = results + 1;
        }
      }


    }

    return results;

  }
  givenFlopMiddlePair(flop){

  }
  givenFlopWeakPair(flop){

  }
  givenFlopAceHigh(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ];
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      let isStraight = false;
      let isFlush = false;
      let isPairOrBetter = false;
      let hasAnAce = false;

      for(let x = 0; x < currentHandPlusFlop.length; x++){
        let currentCard = currentHandPlusFlop[x][0];
        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCard){
            test[y][1] = test[y][1] + 1;
            handMap[test[y][0]] = 1;
          }
        }
      }

      for(let k = 0; k < Object.keys(handMap).length - 4; k++){
        if (test[k][1] >= 1 && test[k + 1][1] >= 1 && test[k + 2][1] >= 1 && test[k + 3][1] >= 1 && test[k + 4][1] >= 1){
          isStraight = true;
          break;
        }
      }
      if(handMap["A"] >= 1 && handMap[2] >= 1 && handMap[3] >= 1 && handMap[4] >= 1 && handMap[5] >= 1){
        isStraight = true;
      }


      let flushMap = {s:0,h:0,d:0,c:0};
      for(let j = 0; j<currentHandPlusFlop.length; j++){
        flushMap[currentHandPlusFlop[j][1]] = flushMap[currentHandPlusFlop[j][1]] + 1;
      }
      let flushMapKeys = Object.keys(flushMap);
      for(let k = 0; k < Object.keys(flushMap).length; k++){
        if(flushMap[flushMapKeys[k]] === 5){
          isFlush = true;
          break;
        }
      }

      for(let y = 0; y< test.length; y++){
          if(test[y][1] >= 2){
            isPairOrBetter = true;
          }
          if(test[0][1] >= 1){
            hasAnAce = true;
          }
      }
      if(hasAnAce && !isPairOrBetter && !isFlush && !isStraight){
        results = results + 1;
      }
    }

    return results;

  }
  givenFlopNothing(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let flopMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};
      let test = [ ["A",0],["K",0],["Q",0],["J",0],["T",0],["9",0],["8",0],["7",0],["6",0],
      ["5",0],["4",0],["3",0],["2",0] ];
      let topFlopCardIndex;
      let handMapKeys = Object.keys(handMap);
      let flopMapKeys = Object.keys(flopMap);
      let isStraight = false;
      let isFlush = false;
      let isPairOrBetter = false;
      let hasAnAce = false;

      for(let x = 0; x < currentHandPlusFlop.length; x++){
        let currentCard = currentHandPlusFlop[x][0];
        for(let y = 0; y< test.length; y++){
          if(test[y][0] === currentCard){
            test[y][1] = test[y][1] + 1;
            handMap[test[y][0]] = 1;
          }
        }
      }

      for(let k = 0; k < Object.keys(handMap).length - 4; k++){
        if (test[k][1] >= 1 && test[k + 1][1] >= 1 && test[k + 2][1] >= 1 && test[k + 3][1] >= 1 && test[k + 4][1] >= 1){
          isStraight = true;
          break;
        }
      }
      if(handMap["A"] >= 1 && handMap[2] >= 1 && handMap[3] >= 1 && handMap[4] >= 1 && handMap[5] >= 1){
        isStraight = true;
      }


      let flushMap = {s:0,h:0,d:0,c:0};
      for(let j = 0; j<currentHandPlusFlop.length; j++){
        flushMap[currentHandPlusFlop[j][1]] = flushMap[currentHandPlusFlop[j][1]] + 1;
      }
      let flushMapKeys = Object.keys(flushMap);
      for(let k = 0; k < Object.keys(flushMap).length; k++){
        if(flushMap[flushMapKeys[k]] === 5){
          isFlush = true;
          break;
        }
      }

      for(let y = 0; y< test.length; y++){
          if(test[y][1] >= 2){
            isPairOrBetter = true;
          }
          if(test[0][1] >= 1){
            hasAnAce = true;
          }
      }

      if(!hasAnAce && !isPairOrBetter && !isFlush && !isStraight){
        results = results + 1;
      }
    }

    return results;

  }

  givenFlopPossibleFlushDraw(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {s:0,h:0,d:0,c:0};
      for(let j = 0; j<currentHandPlusFlop.length; j++){
        handMap[currentHandPlusFlop[j][1]] = handMap[currentHandPlusFlop[j][1]] + 1;
      }
      let handMapKeys = Object.keys(handMap);
      for(let k = 0; k < Object.keys(handMap).length; k++){
        if(handMap[handMapKeys[k]] === 4){
          results = results + 1;
          break;
        }
      }
    }

    return results;
  }
  givenFlopOpenEndedStraightDraw(flop){
    let results = 0;
    for(let i =0; i< this.listOfHands.length; i++){
      let currentHandPlusFlop = this.listOfHands[i].concat(flop);
      let handMap = {A:0,K:0,Q:0,J:0,T:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0};

      for(let j = 0; j< currentHandPlusFlop.length; j++){
        let currentCard = currentHandPlusFlop[j][0];
        handMap[currentCard] = handMap[currentCard] + 1;
      }

    for(let k = 0; k < Object.keys(handMap).length - 4; k++){
      if (handMap[k] >= 1 && handMap[k+1] >= 1 && handMap[k+1] >= 1 && handMap[k+1] >= 1) {
        results = results + 1;
        break;
      }
    }
  }

  return results;
}


  createPossibleHandsFromSelectedHands(deadCards = []){
    this.selectedHands();

    let cards = [
      "As","Ah","Ad","Ac",
      "Ks","Kh","Kd","Kc",
      "Qs","Qh","Qd","Qc",
      "Js","Jh","Jd","Jc",
      "Ts","Th","Td","Tc",
      "9s","9h","9d","9c",
      "8s","8h","8d","8c",
      "7s","7h","7d","7c",
      "6s","6h","6d","6c",
      "5s","5h","5d","5c",
      "4s","4h","4d","4c",
      "3s","3h","3d","3c",
      "2s","2h","2d","2c"
    ];
    if (deadCards.length >= 1){
      for(let i = 0; i < cards.length; i++){
        for(let j = 0; j < deadCards.length; j++){
          if(cards[i] === deadCards[j]){
            cards[i] = "nil";
          }
        }
      }
    }

    let listOfHands = [];
    let numberOfHands = 0;
    for(let x = 0; x< this.selected.length; x++){
      if(this.selected[x].length ===  2 ){
        let card1 = this.selected[x][0];
        let card2 = this.selected[x][1];
        let count = 0;
        for(let i = 0; i< cards.length; i++){
          if(cards[i][0] === card1){
            for(let j = i; j< cards.length; j++){
              if(cards[j][0] === card2){
                if(cards[i][1] !== cards[j][1] ){
                  count++;
                  listOfHands.push([cards[i],cards[j]])
                }
              }
            }
          }
        }
        numberOfHands = numberOfHands + count;
      }
      else if(this.selected[x][2] === "s"){
        let card1 = this.selected[x][0];
        let card2 = this.selected[x][1];
        let count = 0;
        for(let i = 0; i< cards.length; i++){
          if(cards[i][0] === card1){
            for(let j = i; j< cards.length; j++){
              if(cards[j][0] === card2){
                if(cards[i][1] === cards[j][1] && cards[i][0] !== cards[j][0]){
                  count++;
                  listOfHands.push([cards[i],cards[j]])
                }
              }
            }
          }
        }
        numberOfHands = numberOfHands + count;
      } else {
        let card1 = this.selected[x][0];
        let card2 = this.selected[x][1];
        let count = 0;
        for(let i = 0; i< cards.length; i++){
          if(cards[i][0] === card1){
            for(let j = i; j< cards.length; j++){
              if(cards[j][0] === card2){
                if(cards[i][1] !== cards[j][1]){
                  count++;
                  listOfHands.push([cards[i],cards[j]])
                }
              }
            }
          }
        }
        numberOfHands = numberOfHands + count;
      }
    }
    this.listOfHands = listOfHands;

    this.numberOfPossibleHands = numberOfHands;
    return this.numberOfPossibleHands;
  }


}


export class HeroBoard {
  constructor(){
    this.grid = [];
    this.cards = [
      "As","Ah","Ad","Ac",
      "Ks","Kh","Kd","Kc",
      "Qs","Qh","Qd","Qc",
      "Js","Jh","Jd","Jc",
      "Ts","Th","Td","Tc",
      "9s","9h","9d","9c",
      "8s","8h","8d","8c",
      "7s","7h","7d","7c",
      "6s","6h","6d","6c",
      "5s","5h","5d","5c",
      "4s","4h","4d","4c",
      "3s","3h","3d","3c",
      "2s","2h","2d","2c"
    ]
    this.generateBoard();
  }
  selectedcards(){
    let cardArray = [];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        if(this.grid[i][j].isSelected()){
          cardArray.push(this.grid[i][j].string)
        }
      }
    }
    return cardArray;
  }


  generateBoard() {
    let count = 0;
    let color = "";
    for (let i = 0; i < 13; i++) {
      this.grid.push([]);
      for (let j = 0; j < 4; j++) {
        if(count % 2 === 0 ){
          color = "red";
        } else {
          color = "black";
        }
        const tile = new Tile(this, [i, j], this.cards[count], color);
        this.grid[i].push(tile);
        count++;
      }
    }
  }
}




export class TableBoard {
  constructor(){
    this.grid = [];
    this.cards = [
      "Ah","As","Ad","Ac",
      "Kh","Ks","Kd","Kc",
      "Qh","Qs","Qd","Qc",
      "Jh","Js","Jd","Jc",
      "Th","Ts","Td","Tc",
      "9h","9s","9d","9c",
      "8h","8s","8d","8c",
      "7h","7s","7d","7c",
      "6h","6s","6d","6c",
      "5h","5s","5d","5c",
      "4h","4s","4d","4c",
      "3h","3s","3d","3c",
      "2h","2s","2d","2c"
    ]
    this.generateBoard();
  }
  selectedcards(){
    let cardArray = [];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        if(this.grid[i][j].isSelected()){
          cardArray.push(this.grid[i][j].string)
        }
      }
    }

    return cardArray;
  }



  generateBoard() {
    let count = 0;
    let color = "";
    for (let i = 0; i < 13; i++) {
      this.grid.push([]);
      for (let j = 0; j < 4; j++) {
        if(count % 2 === 0 ){
          color = "red";
        } else {
          color = "black";
        }
        const tile = new Tile(this, [i, j], this.cards[count],0, color);
        this.grid[i].push(tile);
        count++;
      }
    }
  }
}
