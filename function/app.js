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

// -----入力ダイアログで値を入力-----
// 今まではalert()関数でアラートウィンドウを表示させてきた。
// 今回は、入力をできるように設定する。

// ブラウザ上で文字を入力する場合、通常フォームが使われるが、今回は入力ダイアログに入力して実行する。
// 例）
// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);
// 文字を入力すると、「promptStr」に格納され、アラートウィンドウ上に表示される。

// -----複数の関数を定義-----
// 今回は、ユーザーが入力したじゃんけんの手（グー・チョキ・パー）と、JavaScriptがランダムに出すじゃんけんの手を比較し、勝ち負けの結果を表示させる関数を定義する。
// まず、じゃんけんの手を入力するプロンプト欄を作成。
// --------------------------
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + 'です。');
// --------------------------
// 次に、相手のじゃんけんの手をランダムに選択する関数を追加する。
// --------------------------
// function getJShand(){
//   let js_hand_num = Math.floor(Math.random() * 3);

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;

// ～～～解説～～～
// ・73行目
// 乱数を生成する関数を設定。
// Math.floor(Math.random() * 3)は、0～2までのランダムな整数値を生成する。
// ・75～81行目
// ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分ける。
// ・83行目
// 関数の戻り値として、グー・チョキ・パーの文字列を返す。
// --------------------------
// 上で学んだことを応用して、勝ち、負け、引き分けの結果までを表示するコードが以下のものになる。
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}