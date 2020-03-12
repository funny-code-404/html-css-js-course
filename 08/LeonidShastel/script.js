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
         if(!this.checkingFreeCell()) {
            return
         };
         let pointOne = this.randomNum();
         let pointTwo = this.randomNum();
         this.setValueToArrayFoBot (pointOne, pointTwo);
         this.readerArrayForBot(pointOne, pointTwo);
      },
      readerArrayForBot (pointOne, pointTwo) {
         document.getElementById(`${pointOne}${pointTwo}`).innerHTML=arr[pointOne][pointTwo];
      },
      setValueToArrayFoBot (pointOne, pointTwo) {
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
            for(let j=0; j<arr[i].length; j++) {
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
   class ClickHuman {
      constructor(options) {
         this.id = options.id;
         this.arr = options.arr;
      }
      click() {
         this.setValueToArray(this.id);
         this.readerArray(this.id);
         if (this.validateArray(this.arr)===true) {
            return
         };
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
      validateArray() {
         let lineOne = (this.arr[0][0]===this.arr[0][1] && this.arr[0][1]===this.arr[0][2]);
         let lineTwo = (this.arr[1][0]===this.arr[1][1] && this.arr[1][1]===this.arr[1][2]);
         let lineThree = (this.arr[2][0]===this.arr[2][1] && this.arr[2][1]===this.arr[2][2]);
         let columnOne = (this.arr[0][0]===this.arr[1][0] && this.arr[1][0]===this.arr[2][0]);
         let columnTwo = (this.arr[0][1]===this.arr[1][1] && this.arr[1][1]===this.arr[2][1]);
         let columnThree = (this.arr[0][2]===this.arr[1][2] && this.arr[1][2]===this.arr[2][2]);
         let diagonalLeft = (this.arr[0][0]===this.arr[1][1] && this.arr[1][1]===this.arr[2][2]);
         let diagonalRight = (this.arr[0][2]===this.arr[1][1] && this.arr[1][1]===this.arr[2][0]);     
         switch (lineOne) {
            case true: 
               preparingLines([0,0],[0,1],[0,2],0);
               endGame(this.arr[0][0]);
               return true;
         };
         switch (lineTwo) {
            case true: 
               preparingLines([1,0],[1,1],[1,2],0);
               endGame(this.arr[1][0]);
               return true;
         };
         switch (lineThree) {
            case true: 
               preparingLines([2,0],[2,1],[2,2],0);
               endGame(this.arr[2][0]);
               return true;
         };
         switch (columnOne) {
            case true: 
               preparingLines([0,0],[1,0],[2,0],90);
               endGame(this.arr[0][0]);
               return true;
         };
         switch (columnTwo) {
            case true: 
               preparingLines([0,1],[1,1],[2,1],90);
               endGame(this.arr[0][1]);
               return true;
         };
         switch (columnThree) {
            case true:
               preparingLines([0,2],[1,2],[2,2],90);
               endGame(this.arr[0][2]);
               return true;
         };
         switch (diagonalLeft) {
            case true: 
               preparingLines([0,0],[1,1],[2,2],45);
               endGame(this.arr[0][0]);
               return true;
         };
         switch (diagonalRight) {
            case true: 
               preparingLines([0,2],[1,1],[2,0],-45);
               endGame(this.arr[0][2]);
               return true;
         };
         return false
      };
   }
   class ClickBot {
      constructor(options){
         this.arr = options.arr;
      };

      click () {
         if(!this.checkingFreeCell()) {
            return
         };
         let pointOne = this.randomNum();
         let pointTwo = this.randomNum();
         this.setValueToArrayFoBot (pointOne, pointTwo);
         this.readerArrayForBot(pointOne, pointTwo);
      };
      readerArrayForBot (pointOne, pointTwo) {
         document.getElementById(`${pointOne}${pointTwo}`).innerHTML=arr[pointOne][pointTwo];
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
      }
   } 
   block.addEventListener(`click`, onClick);
   buttonClear.addEventListener(`click`, clearField);
   function onClick(e) {
      let clickPeople = new ClickHuman({
         id: e.target.id,
         arr: arr
      })
      let clickBot = new ClickBot({
         arr: arr
      })
      clickPeople.click();
      clickBot.click();
   };
   // function setValueToArray(id) {
   //    if (typeof(arr[id[0]][id[1]])===`number`) {
   //       counter++;
   //       arr[id[0]][id[1]]= counter%2 ? cross : zero;
   //    } else {
   //       return
   //    }
   // };
   // function validateArray(arr) {
   //    let lineOne = (arr[0][0]===arr[0][1] && arr[0][1]===arr[0][2]);
   //    let lineTwo = (arr[1][0]===arr[1][1] && arr[1][1]===arr[1][2]);
   //    let lineThree = (arr[2][0]===arr[2][1] && arr[2][1]===arr[2][2]);
   //    let columnOne = (arr[0][0]===arr[1][0] && arr[1][0]===arr[2][0]);
   //    let columnTwo = (arr[0][1]===arr[1][1] && arr[1][1]===arr[2][1]);
   //    let columnThree = (arr[0][2]===arr[1][2] && arr[1][2]===arr[2][2]);
   //    let diagonalLeft = (arr[0][0]===arr[1][1] && arr[1][1]===arr[2][2]);
   //    let diagonalRight = (arr[0][2]===arr[1][1] && arr[1][1]===arr[2][0]);     
   //    switch (lineOne) {
   //       case true: 
   //          preparingLines([0,0],[0,1],[0,2],0);
   //          endGame(arr[0][0]);
   //          return true;
   //    };
   //    switch (lineTwo) {
   //       case true: 
   //          preparingLines([1,0],[1,1],[1,2],0);
   //          endGame(arr[1][0]);
   //          return true;
   //    };
   //    switch (lineThree) {
   //       case true: 
   //          preparingLines([2,0],[2,1],[2,2],0);
   //          endGame(arr[2][0]);
   //          return true;
   //    };
   //    switch (columnOne) {
   //       case true: 
   //          preparingLines([0,0],[1,0],[2,0],90);
   //          endGame(arr[0][0]);
   //          return true;
   //    };
   //    switch (columnTwo) {
   //       case true: 
   //          preparingLines([0,1],[1,1],[2,1],90);
   //          endGame(arr[0][1]);
   //          return true;
   //    };
   //    switch (columnThree) {
   //       case true:
   //          preparingLines([0,2],[1,2],[2,2],90);
   //          endGame(arr[0][2]);
   //          return true;
   //    };
   //    switch (diagonalLeft) {
   //       case true: 
   //          preparingLines([0,0],[1,1],[2,2],45);
   //          endGame(arr[0][0]);
   //          return true;
   //    };
   //    switch (diagonalRight) {
   //       case true: 
   //          preparingLines([0,2],[1,1],[2,0],-45);
   //          endGame(arr[0][2]);
   //          return true;
   //    };
   //    return false
   // };
   // function readerArray(id) {
   //    document.getElementById(id).innerHTML=arr[id[0]][id[1]];
   // };
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
            lineOne.classList.add(`winDiagonalLeft`);
            lineTwo.classList.add(`winDiagonalLeft`);
            lineThree.classList.add(`winDiagonalLeft`);
            setTimeout(function(){
               lineOne.classList.remove(`winDiagonalLeft`);
               lineTwo.classList.remove(`winDiagonalLeft`);
               lineThree.classList.remove(`winDiagonalLeft`)
            }, 2980);
            break;
         case -45: 
            lineOne.classList.add(`winDiagonalRight`);
            lineTwo.classList.add(`winDiagonalRight`);
            lineThree.classList.add(`winDiagonalRight`);
            setTimeout(function(){
               lineOne.classList.remove(`winDiagonalRight`);
               lineTwo.classList.remove(`winDiagonalRight`);
               lineThree.classList.remove(`winDiagonalRight`)
            }, 2980);
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