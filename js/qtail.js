const appName = "qtail.js";
const appNameShort = "qtail";
const version = "v1.6";
const buildVer = "(20240418)";
const buildType = "Stable";
const license = "MIT License";
const author = "XiaozhiSans";
const url = "https://github.com/XiaozhiSans/qtail"

const appNameLog = '[' + appNameShort + '] ';

console.log(
	"\n" +
		" %c " + appNameShort + ' ' + buildType + ' ' + version + buildVer + " by " + author  +
		" %c License: " + license +
		" %c " + url +
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;",
	"color: black; background-color: #999; padding: 5px 0;",
	"background: #FFF; padding: 5px 0;"
);

document.addEventListener("keydown", function(event) {
	// 热键绑定
	if (event.code == "Enter") {
		qtail.main();
	}
	if (event.code == "Escape") {
		qtail.exit();
	}
	if (event.key == "F8") {
		qtail.copy();
	}
});

const qtail= {
	getVer: function() {
		const verText = document.getElementById("verText");
		verText.innerHTML = ("Running <a href=\"https://github.com/XiaozhiSans/qtail\">qtail.js</a> " + buildType + ' ' + version);
		return version;
	},
	main: function() {
		console.log(appNameLog + "开始生成新昵称 (￣﹃￣)");
		console.log(appNameLog + "获取表单内容 (￣﹃￣)");
		const qtailForm = document.querySelector("#qtail");
		const qtailData = new FormData(qtailForm);

		var name = qtailData.get("name");
		var tail = qtailData.get("tail");
		console.log(appNameLog + "获取到昵称：" + name + " 获取到尾巴：" + tail);

		console.log(appNameLog + "生成新的昵称 (￣﹃￣)");
		tail = qtail.rstr(tail);
		console.log(appNameLog + "尾巴重整完毕 (￣﹃￣) 结果为: " + tail);
		var result = name + String.fromCharCode(8295) + tail + String.fromCharCode(8294);

		console.log(appNameLog + "新昵称生成完毕 (￣﹃￣) 结果为: " + result);
		console.log(appNameLog + "将结果返回页面 (￣﹃￣)");
		document.getElementById("result").innerHTML = result;

		alert("生成完毕 (￣﹃￣)");
		return 0;
	},
	rstr: function(str) {
		for (var i = 33; i <= 47; i++) { // ! - /
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 58; i <= 65; i++) { // : - @
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 91; i <= 96; i++) { // [ - `
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 123; i <= 191; i++) { // { - ¿
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		return str;
		// return str.split('').reverse().join('');
	},
	copy: function() { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		alert("复制成功 (￣﹃￣)");
		return 0;
	},
	share: function() {
		if(!navigator.share) {alert("您的浏览器不支持分享功能！ (￣﹃￣)"); return -1;}
		else {navigator.share({title: location.title, url: location.href, text: "hi,我发现了一个超有意思的昵称生成器 —— qtail"}); return 0;}
	},
	donation: function() {
		if(confirm("感谢您的支持!! ✪ ω ✪")) {return 0;}
		else {return -1;}
	},
	exit: function() {
		if(confirm("您确定要关闭 qtail 吗? ＞︿＜")) {
			history.back();
		}
	},
	changeBg: function() {
		const bg = document.getElementById("customBg");
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			bg.innerHTML = ("body{background-image: url(" + bgUrl + "); background-size: auto, auto;");
		}
		else return -1;
		alert("更改成功 (￣﹃￣)");
		return 0;
	},
	changeBoxAlpha: function() {
		const box = document.getElementById("bg");
		var alpha = prompt("请输入透明度（0 ~ 1.0）：", "1.0");
		if((alpha > 1.0)||(alpha < 0.0)||(alpha == NaN)) {
			alert("更改失败 Σ(っ °Д °;)っ \n 无效的数值。");
			console.error(appNameLog + "on changeBoxAlpha, error code: -1");
			return -1;
		}
		if((typeof alpha) != "string") {
			alert("更改失败 Σ(っ °Д °;)っ \n 输入的内容不合法。");
			console.error(appNameLog + "on changeBoxAlpha, error code: -2");
			return -2;
		}
		box.setAttribute("style", "opacity: " + alpha + ';');
		alert("更改成功 (￣﹃￣)");
		return 0;
	},
	changeBoxBg: function() {
		const box = document.getElementById("bg");
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			box.setAttribute("style", "background-image: url(" + bgUrl + ");\nmargin: auto;");
		}
		else return -1;
		alert("更改成功 (￣﹃￣)");
		return 0;
	},
	hideFooter: function() {
		const footer = document.getElementById("footerPnl"), hideBtn = document.getElementById("hide");
		footer.setAttribute("style", "display: none;");
		hideBtn.setAttribute("onclick", "qtail.displayFooter();");
		hideBtn.setAttribute("title", "显示")
		hideBtn.innerHTML = "➕";
		return 0;
	},
	displayFooter: function() {
		const footer = document.getElementById("footerPnl"), hideBtn = document.getElementById("hide");
		footer.setAttribute("style", "display: block;");
		hideBtn.setAttribute("onclick", "qtail.hideFooter();");
		hideBtn.setAttribute("title", "隐藏");
		hideBtn.innerHTML = "➖";
		return 0;
	}/*,
	sentence: function() {
		
	},
	randBg: function() {
		const url = "https://s21.ax1x.com/";
		if (device.mobile()){
			const bgList = [
				"2024/04/18/pFzwE79.jpg"
			]
		}
		else {
			const bgList = [
				"2024/04/18/pFzwQXD.jpg",
				"2024/04/18/pFzwmfx.jpg",
				"2024/04/18/pFzwE79.jpg",
				"2024/04/18/pFzwZkR.jpg",
				"2024/04/18/pFzwup6.jpg"
			]
		}
		document.getElementById("customBg").style.background = bgUrl + bgList[Math.floor(Math.random() * 6)];
	}*/
}
