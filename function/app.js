// -----関数-----
// ・function
// 繰り返し使われる一連の処理を1つにまとめたもの。
// 関数の形で定義しておき、この関数を呼び出すことで、同じプログラムを書かずに処理を実行できる。
// 例）
// function 関数名(){
//   処理内容
// }

// ・引数（ひきすう）と戻り値
// 引数：入力する値
// 戻り値：出力される値

// 関数に引数を渡すときは、()内に引数を書く。
// 複数指定する場合は「,」でつなぐことができ、順番に引数が格納されていく。

// 関数の結果を出力したいときは、return内に戻り値を渡す。
// 例）
// function 関数名（引数）{
//   処理
//   return 戻り値;
// }

// ～～～実際の例～～～
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }
// -----解説-----
// ・25行目
// function の後に関数名「addString」を記述、引数に「strA」を定義
// ・26行目
// 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合している。
// ・27行目
// 結合結果の格納された「addStr」を、関数の戻り値としている。return を記述することで、出力結果が表示される。

// -----作成した関数を呼び出す-----
// メイン部分
// let alertString

// 作成した関数を呼び出し、変数へ格納
// alertString = addString("webCamp");

// 変数の中身をアラートで表示
// alert(alertString);

// 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }