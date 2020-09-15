// キャラクターをインスタンス化する
let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);                   // 味方
let friend2 = new Friend("なーしゃ", 110, 16, 12, 3, 45);                 // 味方
let friend3 = new Friend("だすてん", 140, 43, 11, 1, 45);                 // 味方
let enemy1 = new Troll("トロル", 270, 38, 20, "../image/troll.png");      // 敵
let enemy2 = new Dragon("ドラゴン", 380, 68, 6, "../image/dragon.png");   // 敵

// キャラクター配列をつくる
let characters = [];
characters.push(friend1);     // 味方
characters.push(friend2);     // 味方
characters.push(friend3);     // 味方
characters.push(enemy1);      // 敵
characters.push(enemy2);      // 敵

// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();


characters[1].command = "enemyCommand";
characters[1].target = characters[searchCharacterByName("トロル")[0]];
characters[2].command = "enemyCommand";
characters[2].target = characters[searchCharacterByName("ドラゴン")[0]];
characters[3].command = "recoveryCommand";

gameManage.battle();
