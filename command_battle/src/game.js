// キャラクターをインスタンス化する
let friend1 = new Friend("あれす", 140, 66, 13, 2, 60);                // 味方
let friend2 = new Friend("なーしゃ", 70, 16, 12, 3, 70);               // 味方
let friend3 = new Friend("だすてん", 120, 43, 11, 1, 50);              // 味方
let enemy1 = new Troll("トロル", 200, 38, 20, "../image/troll.png");      // 敵
let enemy2 = new Dragon("ドラゴン", 260, 56, 6, "../image/dragon.png");   // 敵

// キャラクター配列をつくる
let charactors = [];
charactors.push(friend1);     // 味方
charactors.push(friend2);     // 味方
charactors.push(friend3);     // 味方
charactors.push(enemy1);      // 敵
charactors.push(enemy2);      // 敵

// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();

// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();
