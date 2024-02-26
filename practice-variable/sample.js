// -----再宣言-----
// 一度宣言した変数名で、再度変数宣言を行うこと

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

// -----スコープ-----
// 変数にはスコ―プ（有効範囲）がある。
// グローバルスコープとローカルスコープがある。
// グローバルスコープ：どこからでも参照できる変数

// ・varのスコープ
// 関数スコープ（ローカルスコープ）とグローバルスコープの変数を宣言できる
// 関数スコープ：関数の中でvarによって宣言された変数。有効範囲は関数内。
// 例）
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)
// 73行目の「console.log(y)」で「yという定義がされていない」という参照エラーが発生。
// 「y」は「foo」という関数の中でvarによって宣言された、関数スコープのため、関数の外からyを参照しようとしても、有効範囲外となりエラーとなる。

// ・letのスコープ
// ブロックスコープ（ローカルスコープ）の変数を宣言できる。
// ブロック：()、{}の組で区切られたもの
// 例1）
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()
// 87行目でyが定義されていないと参照エラーが発生。
// yという変数は83~5行目の{}のブロック内でletによって宣言されたもので、ブロック外から参照したためエラーになった。

// 例2)
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)
// 99行目でiが定義されていないと参照エラーが発生。
// iという変数はfor句の()ブロック内でletによって宣言されたもので、ブロック外から参照したためエラーが発生。

// ・constのスコープ
// ブロックスコープの変数を宣言できる。
