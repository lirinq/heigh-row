"use strict";

let element = document.querySelectorAll(".card");
let fCard = document.querySelector("first-card");
let sCard = document.querySelector("second-card");
let judgeH = document.getElementById("heigh");
let judgeR = document.getElementById("row");
let fild = []; //場のカードを格納する場所
let HeigthButton = document.getElementById("height");
let RowButton = document.getElementById("row");
//クラスのインポート
import { CreateDeck } from "./deck.js";

//クラスの代入
let deck1 = new CreateDeck();

//デッキのシャッフル
deck1.shuffle();
console.log(deck1);

//シャッフルしたデッキをHTMLのsrcに反映
let fildCard = {};
//ここで場のカードの画像を変更
for (let i = 0; i < 2; i++) {
  fild.push(deck1.deck[i]);
  element[i].setAttribute("src", fild[i].src);
  fildCard[i] = fild[i];
  fild[0].isOpen = true;
  console.log(fild[i].isOpen);
}

//一枚目だけ表表示
deck1.flip(0,element,true);

judgeH.addEventListener("click", function () {
    if (fildCard[0].number < fildCard[1].number) {
        
        console.log("正解");
    } else if(fildCard[1].number < fildCard[0].number) {
        console.log("不正解");
    } else if(fildCard[0].number === fildCard[1].number){
        console.log("ひきわけ");
    }
});

console.log();
// judgeH.addEventListener("click", function () {
//   switch(fild[0].number){

//         case fild[1].number > fild[0]:
//         fild[0].flip(0,element,true);
//         break;

//         case fild[0].number > fild[1]:
        
//         break;
//     }
// });
//

console.log(fild[0].number);
console.log(fild[1].number);


