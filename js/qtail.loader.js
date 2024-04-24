const qL = {
	appName: "qtailLoader",
	appNameShort: "qL",
	version: "v1.0.0",
	versionCode: 10020240424,
	buildVer: "(20240424)",
	buildType: "Stable",
	license: "MIT License",
	author: "XiaozhiSans",
	url: "https://github.com/XiaozhiSans/qtailLoader",
	checkJquery: function() {
		if(typeof(jQuery) == "undefined") {
			console.info("未安装 jQuery.js,开始载入 jQuery.js 3.5.1");
			qL.jQueryLoad();
		}
		else {
			console.info("已安装 jQuery.js, 开始载入 qtail.js.");
			qL.startLoad();
		}
	},
	jQueryLoad: function() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://cdn.jsdelivr.net/gh/jquery/jquery@3.5.1/dist/jquery.min.js";
		document.body.appendChild(script);
		setTimeout(function() {qL.checkJquery();}, 1000);
	},
	startLoad: function() {
		$.get("ql.ini", function(data) {
			let lines = data.split('\n').join('').split('\r');
			for(let line of lines) {
				if(line.startsWith("==")) {
					console.log(line);
				}
				else if(line != '') {
					let l = line.split("; ");
					$("body").append(`
						<script type="text/javascript" name="${l[1]}" version="${l[2]}" src="js/${l[0]}"></script>
					`);
					if(typeof(l[3]) == "undefined") {
						console.error(l[1] + '(' + l[0] + ')' + "加载失败.");
					}
					else {
						console.info(l[1] + '(' + l[0] + ')' + "已加载,版本为:" + l[2]);
					}
					
				}
			}
		});
	}
}

console.log(
	"\n" +
		" %c " + qL.appName + ' ' + qL.version +
		" %c Author: " + qL.author +
		" %c " + qL.url +
		"\n" +
	"\n",
	"color: white; background: deeppink; padding: 5px;",
	"color: black; background-color: hotpink; padding: 5px;",
	"background-color: grey; padding: 5px 0;"
);

console.info("qtailLoader: 开始加载 qtail.");
qL.checkJquery();
