// キャラクターをインスタンス化する
let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);                   // 味方
let friend2 = new Friend("なーしゃ", 110, 16, 12, 3, 45);                 // 味方
let friend3 = new Friend("だすてん", 140, 43, 11, 1, 45);                 // 味方
let enemy1 = new Troll("トロル", 270, 38, 20, "../image/troll.png");      // 敵
let enemy2 = new Dragon("ドラゴン", 380, 68, 6, "../image/dragon.png");   // 敵

// キャラクター配列をつくる
let charactors = [];
charactors.push(friend1);     // 味方
charactors.push(friend2);     // 味方
charactors.push(friend3);     // 味方
charactors.push(enemy1);      // 敵
charactors.push(enemy2);      // 敵


charactors[0].command = "enemyCommand";
charactors[0].target = charactors[searchCharactorByName("トロル")[0]];
charactors[0].action();
