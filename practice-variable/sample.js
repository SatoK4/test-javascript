// -----再宣言-----
// ・varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)
// 問題ないことを確認

// ・letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)
// 「nickname」という変数は既に宣言されているというエラーが発生。
// 再宣言はできない

// ・constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)
// 「let」と同様のエラーが出る
// 再宣言はできない

// 再宣言は「var」のみ可


// -----再代入-----
// 変数に値を代入した後に、別の値を代入すること

// ・varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// 問題ないことを確認

// ・letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// 問題ないことを確認

// ・constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// 「定数とした変数には割り当てできない（nicknameにはjiroを代入できない）」エラーが発生

// 再代入は「var」と「let」が可