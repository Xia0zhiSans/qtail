console.log("[page.js] page has been loaded.")

setTimeout(() => {
	document.getElementById("verText").innerHTML = ("Running <a class=\"github outlink\" href=\"https://github.com/XiaozhiSans/qtail.js\">qtail.js</a> " + qtail.buildType + ' ' + qtail.version);
}, 2500);

const page = {
	appName: "page.js",
	appNameShort: "page",
	version: "v1.0.2",
	buildVer: "(20240520)",
	buildType: "",
	license: "",
	author: "XiaozhiSans",
	url: "",
	changeBg: () => {
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
	changeBoxAlpha: () => {
		var alpha = prompt("请输入透明度（0 ~ 1.0）：", "1.0");
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
	changeBoxBg: () => {
		const box = document.getElementById("bg");
		var bgUrl = prompt("请输入图片url：", "https://eg.web/imgs/img0.jpg");
		if((bgUrl != null)&&(bgUrl != "")) {
			box.setAttribute("style", "background-image: url(" + bgUrl + ");\nmargin: auto;");
		}
		else return -1;
		alert("更改成功 (￣﹃￣)");
		return 0;
	},*/
	hideBox: () => {
		let footer = document.querySelector("div.footerPnl");
		let hideBtn = document.getElementById("hide");
		footer.style.display = "none";
		hideBtn.setAttribute("tooltip", "展开"),
		hideBtn.setAttribute("onclick", "page.displayBox();");
		hideBtn.innerHTML = "<img title=\"展开\" class=\"svg\" src=\"../img/plus-solid.svg\">";
		return;
	},
	displayBox: () => {
		let footer = document.querySelector("div.footerPnl");
		let hideBtn = document.getElementById("hide");
		footer.style.display = "block";
		hideBtn.setAttribute("onclick", "page.hideBox();");
		hideBtn.setAttribute("tooltip", "收起");
		hideBtn.innerHTML = "<img title=\"收起\" class=\"svg\" src=\"../img/minus-solid.svg\">";
		return;
	},
	changeTip: target => {
		target.innerHTML = tips[Math.floor(Math.random() * (tips.length - 1))];
	}/*,
	randBg: () => {
		document.getElementById("customBg").style.background = bgUrl + bgList[Math.floor(Math.random() * 6)];
	}*/
}
let tip = document.getElementById("tips");
$.get("./tips.txt", data => {
	globalThis.tips = data.split('\n');
	page.changeTip(tip);
});
setInterval(() => {
	page.changeTip(tip);
}, 15000);

const msg = qtail.html.meassage;
icpCheck(1);
