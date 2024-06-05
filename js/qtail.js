export const qtail = {
	appName: "qtail.js",
	appNameShort: "qtail",
	version: {
		name: [1, 7, 2],
		build: "2024/06/05",
		type: "stable"
	},
	license: "MIT",
	author: "XiaozhiSans",
	url: "https://github.com/XiaozhiSans/qtail",
	getVer() {
		console.log(`[qtail] version: ${qtail.version.type} v${qtail.version.name.join('.')}(${qtail.version.build})`);
		return qtail.version;
	},
	generation(name, tail) {
		console.log("[qtail] 正在生成新的昵称 (￣﹃￣)");
		// tail = qtail.rstr(tail);
		tail = this.retail(tail);
		console.log("[qtail] 尾巴重整完毕 (￣﹃￣) 结果为: " + tail);
		let result = name + String.fromCharCode(8295) + tail + String.fromCharCode(8294);

		console.log("[qtail] 新昵称生成完毕 (￣﹃￣) 结果为: " + result);

		return result;
	},
	retail(tail) {
		let symbols = tail.replace(/[\u4e00-\u9fa5]|[\u4e00-\u9fa5]|[a-zA-Z]|[0-9]/g, '');
		if(!symbols || symbols == '') {return tail;}
		let name = eval(`tail.replace(/${symbols}/g, '');`);
		let result = symbols + name;
		return result;
	},
	/* rstr: function(str) {
		for (let i = 33; i <= 47; i++) { // ! - /
			let symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (let i = 58; i <= 65; i++) { // : - @
			let symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (let i = 91; i <= 96; i++) { // [ - `
			let symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		for (let i = 123; i <= 191; i++) { // { - ¿
			let symbol = String.fromCharCode(i);
			if (str.endsWith(symbol)) {
				str = symbol + str.split(symbol).join("");
				return str;
			}
		}
		return str;
		// return str.split('').reverse().join('');
	} */
}

console.log(
	"\n" +
		" %c " + `${qtail.appName} v${qtail.version.name.join('.')} ${qtail.version.type} by ${qtail.author} `+
		"\n" +
	"\n",
	"color: #fff; background: #fd79a8; padding: 5px 0;"
);
