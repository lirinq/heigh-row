//exportを入れることで他のjsファイルでimport{class名}を使うことで
// 作成したクラスを使うことができる
export class CreateDeck {
  constructor() {
    let sute = ["spade", "club", "heart", "diamond"];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //constructour内で変数などを定義する場合はグローバル変数に
    //干渉しないように必ずthisをつけるように
    this.deck = [];
    for (let i = 0; i < sute.length; i++) {
      for (let j = 0; j < number.length; j++) {
        let pad = number[j].toString().padStart(2, "0");
        let card = {
          suit: sute[i],
          number: number[j],
          isOpen: false,
          get src() {
            return this.isOpen
              ? `img/card_${this.suit}_${pad}.png`
              : "img/card_back.png";
          },
        };
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    for (let i = 0; i < 52; i++) {
      let rand = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[i];
      this.deck[i] = this.deck[rand];
      this.deck[rand] = temp;
    }
  }



  flip(index,element , g){
    this.deck[index].isOpen = g;
    element[index].setAttribute('src',this.deck[index].src)
  }

  drow(n, prev = true) {
    if (prev === false) {
      return this.deck.slice(0, n);
    } else if (prev === true) {
      return this.deck.splice(0, n);
    }
  }


}

function test() {
  // ---使い方メモ---
  //import {CreateDeck} from '.js/deck.js'; //←使う階層によってfromの後は変える
  let deck2 = new CreateDeck();
  let deck1 = new CreateDeck();
  deck1.shuffle(); //デッキのシャッフル用method
  let tempdeck1 = JSON.parse(JSON.stringify(deck1)); //デッキ１の出来確認
  console.log(tempdeck1);
  deck2.shuffle(); //デッキのシャッフル用method
  let tempdeck2 = JSON.parse(JSON.stringify(deck2)); //デッキ2の出来確認
  console.log(tempdeck2);
  deck2.flip("all", 5); //("all",開きたい枚数)にすることで指定した数までのすべてのカードのisOpenをtrueにできる
  deck1.flip(0, 1); //(数字,開きたいカードの配列準)にするとdeck配列の中の一枚だけを開ける
  console.log(deck1.drow(2, false)); //(ドローする枚数,ドローしたカードをdeckから削除するかどうか)　falseの場合sliceなので削除しない
  console.log(deck1);
  console.log(deck2.drow(6, true)); // trueの場合deckから削除される
  console.log(deck2);
  console.log("読み込み完了");
}
//test();//実行したい時用
