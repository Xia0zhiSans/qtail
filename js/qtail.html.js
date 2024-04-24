document.addEventListener("keydown", function(event) {
	// 热键绑定
	if (event.code == "Enter") {
		qtailHtml.main();
	}
	if (event.code == "Escape") {
		qtailHtml.exit();
	}
	if (event.key == "F8") {
		qtailHtml.copy();
	}
});

const qtailHtml = {
	appName: "qtail.js html module",
	appNameShort: "qtail-html-module",
	version: "v1.0.0",
	versionCode: 10020240420,
	buildVer: "(20240420)",
	buildType: "Stable",
	license: "MIT License",
	author: "XiaozhiSans",
	url: "",
	main: function() {
		console.log("开始生成新昵称 (￣﹃￣)");
		console.log("获取表单内容 (￣﹃￣)");
		const qtailForm = document.querySelector("#qtail");
		const qtailData = new FormData(qtailForm);

		var name = qtailData.get("name");
		var tail = qtailData.get("tail");
		if (name == "" || tail == "") {
			qtailHtml.message("生成已取消 (￣﹃￣)<br>昵称或尾巴不能为空.", 3);
			console.error("qtail.js: on main, error code: -1");
			return -1;
		}
		console.log("获取到昵称：" + name + " 获取到尾巴：" + tail);
		
		var result = qtail.generation(name, tail);

		console.log("将结果返回页面 (￣﹃￣)");
		document.getElementById("result").innerHTML = result;
		qtailHtml.message("生成完毕 (￣﹃￣)", 3);
	},
	message: function(content, time) {
		let target = document.getElementById("message");
		target.innerHTML = content;
		setTimeout(function() {
			target.innerHTML = null;
		}, time * 1000);
	},
	copy: function() { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		qtailHtml.message("复制成功 (￣﹃￣)<br>快去 qq 试试吧", 3);
		return 0;
	},
	share: function() {
		if(!navigator.share) {qtailHtml.message("您的浏览器不支持分享功能！ (￣﹃￣)", 3); return -1;}
		else {navigator.share({title: location.title, url: location.href, text: "hi,我发现了一个超有意思的昵称生成器 —— qtail"}); return 0;}
	},
	donation: function() {
		qtailHtml.message("感谢您的支持!! ✪ ω ✪", 3);
	},
	exit: function() {
		window.close();
	}
}

console.log(
	"\n" +
		" %c " + qtailHtml.appName + ' ' + qtailHtml.version + " by " + qtail.author  +
		" %c License: " + qtailHtml.license +
		" %c " + qtailHtml.url +
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;",
	"color: black; background-color: #999; padding: 5px 0;",
	"background: #FFF; padding: 5px 0;"
);
