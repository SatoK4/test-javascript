// -----変数の書き方-----
// let 変数 = 内容;
// 例)
// let hello = "Hello, World";
// alert(hello);

// -----文字列の結合-----
// 例1)
// alert('Hello' + 'World');

// 例2)
// let str1 = 'Hello';
// let str2 = 'World!!';

// alert(str1 + str2);

// -----条件分岐-----
// 条件式が1つ
// if(条件){
//   処理
// }

// 1つの条件式で処理を分ける（条件を満たすときは処理1、満たさない時は処理2を実行)
// if(条件){
//   処理1
// } else{
//   処理2
// }

// 2つの条件式で処理を分ける（条件1が〇=>処理1,条件2が〇=>処理2,両方×=>処理3）
// if(条件1){
//   処理1
// } else if(条件2){
//   処理2
// } else{
//   処理3
// }

// 例)
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い')
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段')
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// -----繰り返し処理-----
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');