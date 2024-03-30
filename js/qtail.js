const appName = "qtail";
const appShortName = "qtail";
const version = "v1.2";
const bulidVer = "(20240330)";
const bulidType = "Beta";
const license = "MIT License";
const author = "XiaozhiSans";
const copyright = "Copyright (c) 2024 XiaozhiSans. All rights reservered.";

const appNameLog = '[' + appShortName + '] ';


console.log("                __        _ __");
console.log("         ____ _/ /_____ _(_) /");
console.log("        / __ `/ __/ __ `/ / / ");
console.log("       / /_/ / /_/ /_/ / / /  ");
console.log("       \\__, /\\__/\\__,_/_/_/   ");
console.log("         /_/                  \n");
console.log("=====================================\n");
console.log(appNameLog + "qtail by XiaozhiSans");
console.log(appNameLog + "启动完毕 (￣﹃￣)");
console.log(appNameLog + "已连接到控制台 (￣﹃￣)");
console.log(appNameLog + "当前版本：" + version + ' ' + bulidType + bulidVer );

const qtail= {
	getVer: function() {
		const verText = document.getElementById("verText");
		verText.innerHTML = ("Running <a href=\"https://github.com/XiaozhiSans/qtail\">qtail</a> " + bulidType + ' ' + version);
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
		tail = qtail.reverseStr(tail);

		result = name + '⁧' + tail + '⁦';

		console.log(appNameLog + "将结果返回页面 (￣﹃￣)");
		document.getElementById("result").innerHTML = result;

		console.log(appNameLog + "新昵称生成完毕 (￣﹃￣)");
		alert("生成完毕 (￣﹃￣)");
		return 0;
	},
	reverseStr: function(str) { // 反转字符串 (￣﹃￣)
		str = str.split("").reverse().join("");
		console.log(appNameLog + "尾巴反转成功 (￣﹃￣) 结果为：" + str);

		return str;
	},
	copy: function() { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		alert("复制成功 (￣﹃￣)");
		return 0;
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
			return -1;
		}
		if((typeof alpha) != "string") {
			alert("更改失败 Σ(っ °Д °;)っ \n 输入的内容不合法。");
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
		const footer = document.getElementById("footerPnl"), tabBtn = document.getElementById("footerTabBtn");
		footer.setAttribute("style", "display: none;");
		tabBtn.setAttribute("onclick", "qtail.displayFooter();");
		tabBtn.innerHTML = "➕";
	},
	displayFooter: function() {
		const footer = document.getElementById("footerPnl"), tabBtn = document.getElementById("footerTabBtn");
		footer.setAttribute("style", "display: block;");
		tabBtn.setAttribute("onclick", "qtail.hideFooter();");
		tabBtn.innerHTML = "➖";
	}
}
