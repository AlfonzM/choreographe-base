// QiSessionオブジェクトの作成
var session = new QiSession();

// Pepperにデータ送信
function sayPepper(message) {
	session.service("ALMemory").done(function (ALMemory) {
		ALMemory.raiseEvent("tabletPepper/ToPepper", message);
	});
}