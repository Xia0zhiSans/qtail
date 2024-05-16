// 热键绑定
document.addEventListener("keydown", event => {
	(event.code == "Enter")? function() {
		qtailHtml.main();
	}():
	(event.code == "Escape")? function() {
		qtailHtml.exit();
	}():
	(event.key == "F8")? function() {
		qtailHtml.copy();
	}(): function() {
		return;
	}();
});

const qtailHtml = {
	appName: "qtail.js html module",
	appNameShort: "qtail-html-module",
	version: "v1.0.1",
	buildVer: "(20240420)",
	buildType: "Alpha-Stable",
	license: "MIT",
	author: "XiaozhiSans",
	url: "",
	main: () => {
		console.log("开始生成新昵称 (￣﹃￣)");
		console.log("获取表单内容 (￣﹃￣)");
		const qtailForm = document.querySelector("#qtail");
		const qtailData = new FormData(qtailForm);

		let name = qtailData.get("name");
		let tail = qtailData.get("tail");
		if (name == "" || tail == "") {
			qtailHtml.message("生成已取消 (￣﹃￣)<br>昵称或尾巴不能为空.", 3);
			console.error("qtail.js: on main, error code: -1");
			return -1;
		}
		console.log("获取到昵称：" + name + " 获取到尾巴：" + tail);
		
		let result = qtail.generation(name, tail);

		console.log("将结果返回页面 (￣﹃￣)");
		document.getElementById("result").innerHTML = result;
		qtailHtml.message("生成完毕 (￣﹃￣)", 3);
	},
	message: (content, time) => {
		let target = document.getElementById("message"), box = document.querySelector("#messageBox");
		target.innerHTML = content;
		box.setAttribute("show", '');
		setTimeout(() => {
			box.removeAttribute("show");
		}, 3000);
		let value = 100;
		$("span#fg").cssText = ("max-width", `${value}%`);
		setInterval(() => {
			value >= 0? value -= 33: function() {return;}();
			$("span#fg").cssText = ("max-width", `${value}%`);
		}, 1000);
	},
	copy: () => { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		qtailHtml.message("复制成功 (￣﹃￣)<br>快去 qq 试试吧", 3);
		return 0;
	},
	share: () => {
		(!navigator.share)? function() {qtailHtml.message("您的浏览器不支持分享功能！ (￣﹃￣)", 3); return -1;}() :
		function() {navigator.share({title: location.title, url: location.href, text: "hi,我发现了一个超有意思的昵称生成器 —— qtail"}); return 0;}();
	},
	donation: () => {
		qtailHtml.message("感谢您的支持!! ✪ ω ✪", 3);
	},
	exit: () => {
		window.close();
	}
}

console.log(
	"\n" +
		" %c " + qtailHtml.appName + ' ' + qtailHtml.version + ' ' + qtailHtml.buildType + " by " + qtailHtml.author  +
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;"
);
