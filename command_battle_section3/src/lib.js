//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// メッセージクラス
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Message
{
	// メッセージを表示する
	static printMessage(text)
	{
		messageView.innerHTML = text;
	}

	// メッセージを追加する
	static addMessage(text)
	{
		messageView.innerHTML += text;
	}
}

Message.printMessage("あれすの攻撃<br>");
Message.addMessage("トロルに20のダメージを与えた！<br>");

