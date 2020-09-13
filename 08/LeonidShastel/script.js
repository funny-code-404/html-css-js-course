window.onload = function() {
   const blockEndGame = document.getElementById(`endGame`)
   const block = document.getElementById(`field`);
   const buttonClear = document.getElementById(`clearField`);
   const zero = `&Omicron;`;
   const cross = `✕`;
   let counter = 1;
   let arrDefault = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
   ]
   let arr = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
   ];
   let clearArr = [
      ['','',''],
      ['','',''],
      ['','','']
   ];
   class ClickHuman {   
      constructor(options) {
         this.id = options.id;
         this.arr = options.arr;
      }
      click() {
         this.setValueToArray(this.id);
         this.readerArray(this.id);
      };
      setValueToArray() {
         if (typeof(arr[this.id[0]][this.id[1]])===`number`) {
            counter++;
            this.arr[this.id[0]][this.id[1]]= counter%2 ? cross : zero;
         } else {
            return
         }
      };
      readerArray() {
         document.getElementById(this.id).innerHTML=this.arr[this.id[0]][this.id[1]];
      };
   };
   class ClickBot {
      constructor(options){
         this.arr = options.arr;
      };
      static lastClick = new Array;
      click () {
                  // console.log(ClickBot.lastClick)
         if(this.checkingFreeCell()===false) {
            return
         };
         if(ClickBot.lastClick.length>0){
            // console.log(`yes`);           
            if (this.checkLines(ClickBot.lastClick)===false) {
               ClickBot.lastClick.length=0;
               this.click();
            } else {
               return
            }
        } else {
            ClickBot.lastClick.length = 0;
            let pointOne = this.randomNum();
            let pointTwo = this.randomNum();
            this.setValueToArrayFoBot (pointOne, pointTwo);
            this.readerArrayForBot(pointOne, pointTwo);   
         }
      };
      checkLines(lastClick){
         let checkRightDiagonal = [[0,0], [1,1], [2,2]];
         let checkLeftDiagonal = [[2,0], [1,1], [0,2]];
         for (let i=0; i<arr[lastClick[0]].length; i++) {
            if (typeof(arr[lastClick[0]][i])==`number`){
               this.setValueToArrayFoBot (lastClick[0], i);
               document.getElementById(`${lastClick[0]}${i}`).innerHTML=this.arr[lastClick[0]][i];  
               return
            };
         };
         for (let i=0; i<arr.length; i++){
            if (typeof(arr[i][lastClick[1]])==`number`) {
               this.setValueToArrayFoBot (i, lastClick[1]);
               document.getElementById(`${i}${lastClick[1]}`).innerHTML=this.arr[i][lastClick[1]];  
               return   
            };
         };
         if (lastClick===[1,1] || lastClick===[0,0] || lastClick===[2,2]){
            for(let i=0; i<checkRightDiagonal.length; i++){
               if (typeof(arr[checkRightDiagonal[i][0]][checkRightDiagonal[i][1]])){
                  this.setValueToArrayFoBot (i, lastClick[1]);
                  document.getElementById(`${i}${lastClick[1]}`).innerHTML=this.arr[i][lastClick[1]];  
                  return   
               };
            };
         };
         if (lastClick===[2,0] || lastClick===[1,1] || lastClick===[0,2]){
            for(let i=0; i<checkLeftDiagonal.length; i++){
               if (typeof(arr[checkLeftDiagonal[i][0]][checkLeftDiagonal[i][1]])){
                  this.setValueToArrayFoBot (i, lastClick[1]);
                  document.getElementById(`${i}${lastClick[1]}`).innerHTML=this.arr[i][lastClick[1]];  
                  return   
               };
            };
         };
         return false
      };
      readerArrayForBot (pointOne, pointTwo) {
         document.getElementById(`${pointOne}${pointTwo}`).innerHTML=arr[pointOne][pointTwo];
         ClickBot.lastClick[0]=pointOne;
         ClickBot.lastClick[1]=pointTwo;
      };
      setValueToArrayFoBot (pointOne, pointTwo) {
         if (typeof(arr[pointOne][pointTwo])==`number`) {
            counter++;
            this.arr[pointOne][pointTwo]= counter%2 ? cross : zero;
         } else {
            this.click();
         }
      };
      randomNum() {
         return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      };
      checkingFreeCell() {
         for (let i=0; i<this.arr.length; i++){
            for(let j=0; j<this.arr[i].length; j++) {
               if(typeof(this.arr[i][j])==`number`) {
                  return true
               };
            };
         };
         return false
      };
   };
   class EndGame {
      constructor(options) {
      };
      validateArray() {
         let lineOne = (arr[0][0]===arr[0][1] && arr[0][1]===arr[0][2]);
         let lineTwo = (arr[1][0]===arr[1][1] && arr[1][1]===arr[1][2]);
         let lineThree = (arr[2][0]===arr[2][1] && arr[2][1]===arr[2][2]);
         let columnOne = (arr[0][0]===arr[1][0] && arr[1][0]===arr[2][0]);
         let columnTwo = (arr[0][1]===arr[1][1] && arr[1][1]===arr[2][1]);
         let columnThree = (arr[0][2]===arr[1][2] && arr[1][2]===arr[2][2]);
         let diagonalLeft = (arr[0][0]===arr[1][1] && arr[1][1]===arr[2][2]);
         let diagonalRight = (arr[0][2]===arr[1][1] && arr[1][1]===arr[2][0]);     
         switch (lineOne) {
            case true: 
               this.preparingLines([0,0],[0,1],[0,2],0);
               this.endGame(arr[0][0]);
               return true;
         };
         switch (lineTwo) {
            case true: 
               this.preparingLines([1,0],[1,1],[1,2],0);
               this.endGame(arr[1][0]);
               return true;
         };
         switch (lineThree) {
            case true: 
               this.preparingLines([2,0],[2,1],[2,2],0);
               this.endGame(arr[2][0]);
               return true;
         };
         switch (columnOne) {
            case true: 
               this.preparingLines([0,0],[1,0],[2,0],90);
               this.endGame(arr[0][0]);
               return true;
         };
         switch (columnTwo) {
            case true: 
               this.preparingLines([0,1],[1,1],[2,1],90);
               this.endGame(arr[0][1]);
               return true;
         };
         switch (columnThree) {
            case true:
               this.preparingLines([0,2],[1,2],[2,2],90);
               this.endGame(arr[0][2]);
               return true;
         };
         switch (diagonalLeft) {
            case true: 
               this.preparingLines([0,0],[1,1],[2,2],45);
               this.endGame(arr[0][0]);
               return true;
         };
         switch (diagonalRight) {
            case true: 
               this.preparingLines([0,2],[1,1],[2,0],-45);
               this.endGame(arr[0][2]);
               return true;
         };
         return false
      };
      endGame (userWin) {
         block.removeEventListener(`click`, onClick);
         blockEndGame.innerHTML=`ПОБЕДА ${userWin}`;
         blockEndGame.classList.add(`winGame`);
         setTimeout(this.clearField, 3000);
      };
      clearField () {
         for (let i=0; i<clearArr.length; i++) {
            for (let j=0; j<clearArr[i].length; j++) {
               document.getElementById(`${i}${j}`).innerHTML = clearArr[i][j];
            };
         };
         blockEndGame.classList.remove(`winGame`);
         for (let i=0; i<arrDefault.length; i++) {
            for (let j=0; j<arrDefault[i].length; j++) {
               arr[i][j] = arrDefault[i][j];
            };
         };
         counter = 1;
         block.addEventListener(`click`, onClick);
      };
      preparingLines(z1,z2,z3,deg) {
         let lineOne = document.getElementById(`${z1[0]}${z1[1]}`);
         console.log(lineOne);
         
         let lineTwo = document.getElementById(`${z2[0]}${z2[1]}`);
         console.log(lineTwo);
         
         let lineThree = document.getElementById(`${z3[0]}${z3[1]}`);
         console.log(lineThree);
         
         lineOne.innerHTML=`<hr>`;
         lineTwo.innerHTML=`<hr>`;
         lineThree.innerHTML='<hr>';
         switch (deg) {
            case 45: 
               lineOne.classList.add(`winDiagonalLeft`);
               lineTwo.classList.add(`winDiagonalLeft`);
               lineThree.classList.add(`winDiagonalLeft`);
               setTimeout(function(){
                  lineOne.classList.remove(`winDiagonalLeft`);
                  lineTwo.classList.remove(`winDiagonalLeft`);
                  lineThree.classList.remove(`winDiagonalLeft`)
               }, 3000);
               break;
            case -45: 
               lineOne.classList.add(`winDiagonalRight`);
               lineTwo.classList.add(`winDiagonalRight`);
               lineThree.classList.add(`winDiagonalRight`);
               setTimeout(function(){
                  lineOne.classList.remove(`winDiagonalRight`);
                  lineTwo.classList.remove(`winDiagonalRight`);
                  lineThree.classList.remove(`winDiagonalRight`)
               }, 3000);
               break;
            case 90: 
               lineOne.classList.add(`winColumn`);
               lineTwo.classList.add(`winColumn`);
               lineThree.classList.add(`winColumn`);
               setTimeout(function(){
                  lineOne.classList.remove(`winColumn`);
                  lineTwo.classList.remove(`winColumn`);
                  lineThree.classList.remove(`winColumn`)
               }, 3000);
            break;
         };
      };
   }
   let endGame = new EndGame({})
   block.addEventListener(`click`, onClick);
   buttonClear.addEventListener(`click`, endGame.clearField);
   function onClick(e) {
      let clickPeople = new ClickHuman({
         id: e.target.id,
         arr: arr
      });
      let clickBot = new ClickBot({
         arr: arr
      });
      clickPeople.click();
      if(endGame.validateArray()===true) {
         return
      };
      clickBot.click();
      if(endGame.validateArray()===true) {
         return
      };
   };
}