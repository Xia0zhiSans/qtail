// 热键绑定
document.addEventListener("keydown", event => {
	(event.code == "Enter")? function() {
		qtail.html.main();
	}():
	(event.code == "Escape")? function() {
		qtail.html.exit();
	}():
	(event.key == "F8")? function() {
		qtail.html.copy();
	}(): function() {
		return;
	}();
});

qtail.html = {
	appName: "qtail.js html module",
	appNameShort: "qtail-html-module",
	version: "v1.0.1",
	buildVer: "(20240420)",
	buildType: "Stable",
	license: "MIT",
	author: "XiaozhiSans",
	url: "",
	main: () => {
		console.log(`[${qtail.html.appName}] 开始生成新昵称 (￣﹃￣)`);
		console.log(`[${qtail.html.appName}] 获取表单内容 (￣﹃￣)`);
		const qtailForm = document.querySelector("#qtail");
		const qtailData = new FormData(qtailForm);

		let name = qtailData.get("name");
		let tail = qtailData.get("tail");
		if (name == "" || tail == "") {
			qtail.html.message("生成已取消 (￣﹃￣)<br>昵称或尾巴不能为空");
			console.error(`[${qtail.html.appName}] 生成已取消 (￣﹃￣): 昵称或尾巴不能为空`);
			return -1;
		}
		console.log(`[${qtail.html.appName}] 获取到昵称：${name} 获取到尾巴：${tail}`);
		
		let result = qtail.generation(name, tail);

		console.log(`[${qtail.html.appName}] 将结果返回页面 (￣﹃￣)`);
		document.getElementById("result").innerHTML = result;
		qtail.html.message("生成完毕 (￣﹃￣)");
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
			value >= 0? value -= 33: (() => {return;})();
			$("span#fg").cssText = ("max-width", `${value}%`);
		}, 1000);
	},
	copy: () => { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		qtail.html.message("复制成功 (￣﹃￣)<br>快去 qq 试试吧");
		return 0;
	},
	share: () => {
		(!navigator.share)? (() => {qtail.html.message("您的浏览器不支持分享功能！ (￣﹃￣)"); return -1;})():
		(() => {navigator.share({title: location.title, url: location.href, text: "hi,我发现了一个超有意思的昵称生成器 —— qtail"}); return 0;})();
	},
	donation: () => {
		qtail.html.message("感谢您的支持!! ✪ ω ✪");
	},
	exit: () => {
		window.close();
	}
}

console.log(
	"\n" +
		" %c " + `${qtail.html.appName} ${qtail.html.version} ${qtail.html.buildType} by ${qtail.html.author}` +
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;"
);
