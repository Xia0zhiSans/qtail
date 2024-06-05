// 热键绑定
document.addEventListener("keydown", event => {
	(event.code == "Enter")? (() => {
		qtail.html.main();
	})():
	(event.code == "Escape")? (() => {
		qtail.html.exit();
	})():
	(event.key == "F8")? (() => {
		qtail.html.copy();
	})(): (() => {
		return;
	})();
});

export const html = {
	appName: "qtail.html module",
	appNameShort: "qtail-html-module",
	version: {
		name: [],
		bulid: "",
		type: ""
	},
	license: "",
	author: "XiaozhiSans",
	url: "",
	main: () => {
		console.log("[qtail.html] 开始生成新昵称 (￣﹃￣)");
		console.log("[qtail.html] 获取表单内容 (￣﹃￣)");
		const qtailData = new FormData(document.querySelector("#qtail"));

		let name = qtailData.get("name");
		let tail = qtailData.get("tail");
		if (name == "" || tail == "") {
			msg("生成已取消!<br>昵称或尾巴不能为空");
			console.error("[qtail.html] 生成已取消 (￣﹃￣): 昵称或尾巴不能为空");
			return -1;
		}
		console.log(`[qtail.html] 获取到昵称：${name} 获取到尾巴：${tail}`);
		
		let result = qtail.generation(name, tail);

		console.log("[qtail.html] 将结果返回页面 (￣﹃￣)");
		document.getElementById("result").value = result;
		msg("生成完毕!");
	},
	message: (content) => {
		let target = document.getElementById("message"), box = document.querySelector("#messageBox");
		target.innerHTML = content;
		box.setAttribute("show", '');
		setTimeout(() => {
			box.removeAttribute("show");
		}, (content.length > 5)? 8000: 4500);
		/* let value = 100;
		$("span#fg").cssText = ("max-width", "${value}%");
		setInterval(() => {
			value >= 0? value -= 33: (() => {return;})();
			$("span#fg").cssText = ("max-width", "${value}%");
		}, 1000); */
	},
	copy: () => { // 复制结果 (￣﹃￣)
		const result = document.querySelector("#result");
		result.select();
		document.execCommand("copy");
		msg("复制成功!<br>快去 qq 试试吧");
		return 0;
	},
	share: () => {
		(!navigator.share)? (() => {msg("您的浏览器不支持分享功能"); return -1;})():
		(() => {navigator.share({title: location.title, url: location.href, text: "hi,我发现了一个超有意思的昵称生成器 —— qtail"}); return 0;})();
	},
	donation: () => {
		msg("感谢您的支持!! ✪ ω ✪");
	}
}

console.log("[qtail.html] 已加载");
