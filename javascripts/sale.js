const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    let purchase = {
        price: price,
        number: number,
    };
    // 以下を変更

    let newPurchase = true; //--1

    purchases.forEach((item) => {  //--2
        if (item.price === purchase.price) {
            newPurchase = false;
        }
    })

    if (purchases.length < 1 || newPurchase) { //--3
        purchases.push(purchase);
    } else {
        for (let i = 0; i < purchases.length; i++) {
            if (purchases[i].price === purchase.price) {
                purchases[i].number += purchase.number;
            }
        }
    }

    window.alert(`${display()}\n小計${subtotal()}円`);
    priceElement.value = "";
    numberElement.value = "";
}

// 購入履歴の内容の文字列（「○○が○点、○○が○点」）を返す関数、display()関数
function display() {
    let string = "";
    // 合計を算出する処理
    for (let i = 0; i < purchases.length; i++) {
        string += `${purchases[i].price}円が${purchases[i].number}点\n`;
    }
    return string;
}

// 小計を算出する関数subtotal()関数
function subtotal() {
    let sum = 0;
    // 合計を算出する処理
    for(let i=0; i<purchases.length; i++){
        sum += purchases[i].price * purchases[i] * number ;
}
 return sum;
}
 

// add()関数、subtotal()関数と、display()関数の値を使い、「○○が○点、○○が○点、小計○○円」とポップアップする処理を加える

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum)
    window.alert(`小計は${sum}円、送料は${postage}円、合計は${sum + postage}円です`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}


// subtotal()関数の値を利用するように書き換える
function calcPostageFromPurchase(小計) {
  // 条件分岐とreturn
if (sum == 0 || sum >= 3000) {
    return 0 ;
} else if  (sum < 2000) {
    return 500 ;
} else {
    return 250 ;
}
}




