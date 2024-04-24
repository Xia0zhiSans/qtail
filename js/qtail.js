const qtail = {
	appName: "qtail.js",
	appNameShort: "qtail",
	version: "v1.6.2",
	versionCode: 16120240424,
	buildVer: "(20240424)",
	buildType: "Stable",
	license: "MIT License",
	author: "XiaozhiSans",
	url: "https://github.com/XiaozhiSans/qtail",
	getVer: function() {
		console.log("qtail.js version: " + qtail.buildType + ' ' + qtail.version + qtail.buildVer);
		return qtail.version;
	},
	generation: function(name, tail) {
		console.log("正在生成新的昵称 (￣﹃￣)");
		tail = qtail.rstr(tail);
		console.log("尾巴重整完毕 (￣﹃￣) 结果为: " + tail);
		var result = name + String.fromCharCode(8295) + tail + String.fromCharCode(8294);

		console.log("新昵称生成完毕 (￣﹃￣) 结果为: " + result);

		return result;
	},
	rstr: function(str) {
		for (var i = 33; i <= 47; i++) { // ! - /
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 58; i <= 65; i++) { // : - @
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 91; i <= 96; i++) { // [ - `
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (var i = 123; i <= 191; i++) { // { - ¿
			var symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		return str;
		// return str.split('').reverse().join('');
	}
}

console.log(
	"\n" +
		" %c " + qtail.appName + ' ' + qtail.version + " by " + qtail.author  +
		" %c License: " + qtail.license +
		" %c " + qtail.url +
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;",
	"color: black; background-color: #999; padding: 5px 0;",
	"background: #FFF; padding: 5px 0;"
);
