
export const page = {
	appName: "qtail page",
	appNameShort: "qtp",
	version: {
		name: "0605",
		build: "2024/06/05",
		type: "stable"
	},
	license: "",
	author: "XiaozhiSans",
	url: "",
	changeBg() {
		let bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		(!bgUrl || bgUrl == '')? (() => {
			console.error("[page.js] 背景url为空,取消更改背景");
			return;
		})(): (() => {
			document.getElementById("body").style.backgroundImage = bgUrl;
			document.getElementById("body").style.backgroundSize = auto;
		})();
		msg("更改成功 (￣﹃￣)");
		return;
	},
	changeBoxAlpha() {
		let alpha = prompt("请输入透明度（0 ~ 1.0）：", "1.0");
		((alpha > 1.0)||(alpha < 0.0)||(isNaN(alpha)))? (() => {
			msg("更改失败 Σ(っ °Д °;)っ<br>无效的数值。");
			console.error("page.js: on changeBoxAlpha, error code: -1");
			return -1;
		})(): undefined;
		if((typeof alpha) != "string") {
			msg("更改失败 Σ(っ °Д °;)っ<br>输入的内容不合法。");
			console.error("page.js: on changeBoxAlpha, error code: -2");
			return -2;
		}
		document.getElementById("mainWindow").style.opacity = alpha;
		msg("更改成功 (￣﹃￣)");
		return 0;
	},/*
	changeBoxBg() {
		const box = document.getElementById("bg");
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			box.setAttribute("style", "background-image: url(" + bgUrl + ");\nmargin: auto;");
		}
		else return -1;
		alert("更改成功 (￣﹃￣)");
		return 0;
	},*/
	hideBox() {
		let footer = document.querySelector("div.footerPnl");
		let hideBtn = document.getElementById("hide");
		footer.style.display = "none";
		hideBtn.setAttribute("tooltip", "展开"),
		hideBtn.setAttribute("onclick", "page.displayBox();");
		hideBtn.innerHTML = "<img title=\"展开\" class=\"svg\" src=\"./img/plus-solid.svg\">";
		return;
	},
	displayBox() {
		let footer = document.querySelector("div.footerPnl");
		let hideBtn = document.getElementById("hide");
		footer.style.display = "block";
		hideBtn.setAttribute("onclick", "page.hideBox();");
		hideBtn.setAttribute("tooltip", "收起");
		hideBtn.innerHTML = "<img title=\"收起\" class=\"svg\" src=\"./img/minus-solid.svg\">";
		return;
	},
	changeTip(target) {
		target.innerHTML = tips[Math.floor(Math.random() * (tips.length - 1))];
	}/*,
	randBg() {
		document.getElementById("customBg").style.background = bgUrl + bgList[Math.floor(Math.random() * 6)];
	}*/
}
let tip = document.getElementById("tips");
if(typeof jQuery !== "undefined") {
	try {$.get("./tips.txt", data => {
		globalThis.tips = data.split('\n');
		page.changeTip(tip);
	});} catch(error) {
		console.warn("[qtail page] tips.txt 加载失败,原因: ", error);
	}
} else {
	console.warn("[qtail page] tips.txt 加载失败,原因: jQuery 未被加载或加载失败");
	globalThis.tips = ["tips.txt 加载失败"];
}
setInterval(() => {
	page.changeTip(tip);
}, 15000);

console.log(`[qtail page] page.js has been loaded. page version: v${page.version.name}`);
