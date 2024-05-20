const qL = {
	appName: "qtailLoader",
	appNameShort: "qL",
	version: "v1.1.0",
	buildVer: "(20240520)",
	buildType: "Stable",
	license: "MIT",
	author: "XiaozhiSans",
	url: "https://github.com/XiaozhiSans/qtailLoader",
	startLoad: () => {
		console.info("[qtailLoader] 开始加载 qt 模块");
		$.get("js/ql.ini", data => {
			let lines = data.trim().split('\n');
			let modules = [];

			for (let line of lines) {
				line = line.trim();

				// 忽略注释和空行
				let isComment = (line.startsWith(';') || line.startsWith('#'));
				if(isComment || line === '') {
					continue;
				}

				line = line.replace(/;.*|#.*/g ,'');

				let parts = line.split(/\s+\-\s+/).map(part => {
					return part.trim();
				});

				let part = [parts[1], "js/" + parts[0], parts[2]];
				modules.push(part);
			}

		loadScripts(modules);
		});
	}
}

const loadScripts = (scripts) => {
	let loaded = 0;

	let loadNextScript = () => {
		if(loaded >= scripts.length) {
			console.info(`[qtailLoader] qtail 模块加载完毕,共加载了${loaded}个模块`);
			return;
		}

		let script = scripts[loaded][1];
		loaded++;

		$.getScript(script, () => {
			console.info(`[qtailLoader] 已加载${script}`);
			loadNextScript();
		}).fail((jqxhr, settings, exception) => {
			console.info(`[qtailLoader] 未能加载${script}`);
			loadNextScript();
		});
	}

	loadNextScript();
}

console.info(`[qtailLoader] 版本:${qL.version} ${qL.buildType}${qL.buildVer}`);

qL.startLoad();
