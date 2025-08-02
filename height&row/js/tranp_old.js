'use strict';

let element = document.querySelectorAll('.card');
let fCard = document.querySelector('first-card');
let sCard = document.querySelector('second-card');
let judgeH =document.getElementById('heigh');
let judgeR =document.getElementById('row'); 
let card = [];//場のカードを格納する場所
let HeigthButton = document.getElementById("height");
let RowButton = document.getElementById("row");
import {CreateDeck} from './deck.js';
let deck1 = new CreateDeck();
deck1.shuffle();
let tempdeck1 = JSON.parse(JSON.stringify(deck1));
for(let i = 0; i < 2; i++){//ここで場のカードの画像を変更
    let pdd = deck1.deck[i].number.toString().padStart(2,"0");
    //↑この行でpadStart()を使って文字の数を整える(文字数、"足りない文字数を埋める文字列")　
    // padString()は文字列じゃないと使えないためtoStringを使って数値を文字列に変換してからpadStratを使う
    card.push({
        src:'img/card_' + deck1.deck[i].suit + '_'  + pdd + '.png',
        date:deck1.deck[i]
    });
    element[i].setAttribute('src',card[i].src);
    console.log(card[i]);
};

let isBack = card[1].date.isOpen;//裏表判定のための定義 次からは裏表を変換するときに使う
isBack = true;
console.log(tempdeck1);
judgeH.addEventListener('click' ,function(){
    if(card[0].date.number < card[1].date.number){
        let drowCard = deck1.drow(1,true)[0];
        let pdd = drowCard.number.toString().padStart(2,"0");
        let src = 'img/card_' + drowCard.suit + '_'  + pdd + '.png';

        card[0] = {src:src, date:drowCard} 
        element[0].setAttribute('src',card[0].src);
        console.log("ドロー");
        console.log(deck1);
    }else if(card[0].date.number > card[1].date.number){
        console.log("不正解");
    }
});

console.log(card[0].date.number);
console.log(card[1].date.number);
//まずカードを保存しておく変数が必要
//作ったdeck配列の一つ目と二つ目を表示する
//で一つ目と二つ目の数字を比較してハイロウが正解なら二つ目のめくったカードが一枚目になるように配列の数字を進める

//繰り返すのはmarkとnamber　繰り返した二つの配列をどうやって一つのセットにするかが問題
//流れ的にはmark[i]とnamber[i]をして１セットにする→ランダムに並べ替える→deckに入れる
//↑このfor文で出来たランダムなカードプールから先頭5枚をcardに出力する
// 役ごとにfunctionを作る
// 例えば　Function RSF(){ if(){}};みたいな感じで作る、　が条件をどうするかが問題
// それをswitch関数でcard[]を通過させることで当てはまった役の処理で止まる

//cardを使って場のカードのimgを変更してswitch文の結果を使って文字列を変更して役にあった説明文に変更するn