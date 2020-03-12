window.onload = function() {
   const blockEndGame = document.getElementById(`endGame`)
   const block = document.getElementById(`field`);
   const zonePlay = document.getElementsByClassName(`block`);
   const buttonClear = document.getElementById(`clearField`)
   const zero = `&Omicron;`;
   const cross = `✕`;
   const lineEndGame = `<hr>`;
   let bot = {
      click () {
         let pointOne = this.randomNum();
         let pointTwo = this.randomNum();
         this.setValueToArrayFoBot (pointOne, pointTwo);
         this.readerArrayForBot(pointOne, pointTwo);
      },
      readerArrayForBot (pointOne, pointTwo) {
         document.getElementById(`${pointOne}${pointTwo}`).innerHTML=arr[pointOne][pointTwo];
      },
      setValueToArrayFoBot (pointOne, pointTwo) {
         if(!this.checkingFreeCell()) {
            return
         }
         if (typeof(arr[pointOne][pointTwo])==`number`) {
            counter++;
            arr[pointOne][pointTwo]= counter%2 ? cross : zero;
         } else {
            this.click();
         }
      },
      randomNum() {
         return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      },
      checkingFreeCell() {
         for (let i=0; i<arr.length; i++){
            for(let j=0; j<arr.length; i++) {
               if(typeof(arr[i][j])==`number`) {
                  return true
               };
            };
         };
         return false
      }
   };
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
   block.addEventListener(`click`, onClick);
   buttonClear.addEventListener(`click`, clearField);
   function onClick(e) {
      setValueToArray(e.target.id);
      readerArray(e.target.id);
      if (validateArray(arr)===true) {
         return
      };
      bot.click();
      validateArray(arr);
      if (validateArray(arr)===true) {
         return
      };
   };
   function setValueToArray(id) {
      if (typeof(arr[id[0]][id[1]])===`number`) {
         counter++;
         arr[id[0]][id[1]]= counter%2 ? cross : zero;
      } else {
         return
      }
   };
   function validateArray(arr) {
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
            preparingLines([0,0],[0,1],[0,2],0);
            endGame(arr[0][0]);
            return true;
      };
      switch (lineTwo) {
         case true: 
            preparingLines([1,0],[1,1],[1,2],0);
            endGame(arr[1][0]);
            return true;
      };
      switch (lineThree) {
         case true: 
            preparingLines([2,0],[2,1],[2,2],0);
            endGame(arr[2][0]);
            return true;
      };
      switch (columnOne) {
         case true: 
            preparingLines([0,0],[1,0],[2,0],90);
            endGame(arr[0][0]);
            return true;
      };
      switch (columnTwo) {
         case true: 
            preparingLines([0,1],[1,1],[2,1],90);
            endGame(arr[0][1]);
            return true;
      };
      switch (columnThree) {
         case true:
            preparingLines([0,2],[1,2],[2,2],90);
            endGame(arr[0][2]);
            return true;
      };
      switch (diagonalLeft) {
         case true: 
            preparingLines([0,0],[1,1],[2,2],45);
            endGame(arr[0][0]);
            return true;
      };
      switch (diagonalRight) {
         case true: 
            preparingLines([0,2],[1,1],[2,0],-45);
            endGame(arr[0][2]);
            return true;
      };
      return false
   };
   function readerArray(id) {
      document.getElementById(id).innerHTML=arr[id[0]][id[1]];
   };
   function endGame (userWin) {
      block.removeEventListener(`click`, onClick);
      blockEndGame.innerHTML=`ПОБЕДА ${userWin}`;
      blockEndGame.classList.add(`winGame`);
      setTimeout(clearField, 3000);
   };
   function clearField () {
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
   function preparingLines(z1,z2,z3,deg) {
      let lineOne = document.getElementById(`${z1[0]}${z1[1]}`);
      let lineTwo = document.getElementById(`${z2[0]}${z2[1]}`);
      let lineThree = document.getElementById(`${z3[0]}${z3[1]}`);
      lineOne.innerHTML=lineEndGame;
      lineTwo.innerHTML=lineEndGame;
      lineThree.innerHTML=lineEndGame;
      switch (deg) {
         case 45: 
            lineOne.classList.add(`winDiagonal`);
            lineTwo.classList.add(`winDiagonal`);
            lineThree.classList.add(`winDiagonal`);
            setTimeout(function(){
               lineOne.classList.remove(`winDiagonal`);
               lineTwo.classList.remove(`winDiagonal`);
               lineThree.classList.remove(`winDiagonal`)
            }, 2900);
            break;
         case 90: 
            lineOne.classList.add(`winColumn`);
            lineTwo.classList.add(`winColumn`);
            lineThree.classList.add(`winColumn`);
            setTimeout(function(){
               lineOne.classList.remove(`winColumn`);
               lineTwo.classList.remove(`winColumn`);
               lineThree.classList.remove(`winColumn`)
            }, 2900);
            break;
      };
   };
}