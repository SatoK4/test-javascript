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