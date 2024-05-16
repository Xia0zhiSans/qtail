const qL = {
	appName: "qtailLoader",
	appNameShort: "qL",
	version: "v1.0.1",
	buildVer: "(20240516)",
	buildType: "Lite-Alpha",
	license: "MIT",
	author: "XiaozhiSans",
	url: "https://github.com/XiaozhiSans/qtailLoader",
	startLoad: () => {
		$.get("ql.ini", data => {
			let lines = data.split('\n');
			for(let line of lines) {
				if(line.startsWith("==") || line == '') {continue;}
				else {
					let l = line.split(/;\s/g);
					$.getScript("js/" + l[0], () => {}, () => {});
				}
			}
		});
	}
}

console.info("qtailLoader: 加载器版本:" + qL.version + " " + qL.buildType + " " + qL.buildVer);

console.log("qtailLoader: 开始加载 qtail.");
qL.startLoad();
