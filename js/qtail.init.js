/**
 * qtail.js 部分
 */
import {qtail} from "./qtail.js";
import {html} from "./qtail.html.js";
console.log("[qtail] 初始化qtail");
qtail.html = html;
globalThis.qtail = qtail;
globalThis.msg = html.message;
console.log("[qtail] qtail初始化完毕");

/**
 * qtp 部分
 */
import {page} from "./page.js";
globalThis.page = page;

document.querySelector("#verText").innerHTML = (`Running <a class="github outlink" href="https://github.com/XiaozhiSans/qtail.js">qtail.js</a> ${qtail.version.type} v${qtail.version.name.join('.')}`);

((document.referrer != '')&&(document.referrer.replace(/((http)|(https)):\/\//, '').split('/')[0] != location.href.replace(/((http)|(https)):\/\//, '').split('/')[0]))?
msg(`来自 ${document.referrer.replace(/((http)|(https)):\/\//, '').split('/')[0]} 的网友,欢迎使用 qtail`):
msg("欢迎使用 qtail");

document.querySelector("[qtpv]").innerHTML = `v${page.version.name}`;

/**
 * cookie 部分
 */
(() => {
	let cookies = document.cookie.split("; ");
	if(cookies == '') return;
	for(let cookie of cookies) {
		cookie = cookie.split('=');
		(cookie[0] == "name")? document.querySelector("#name").value = cookie[1]:
		(cookie[0] == "tail")? document.querySelector("#tail").value = cookie[1]:
		null;
	}
	console.log("[qtail] 成功获取上次的表单");
})();

globalThis.saveLastForm = () => {
	let date = new Date();
	date.setDate(date.getDate() + 7);
	document.cookie = `name=${document.querySelector("#name").value}; expires=${date}`;
	document.cookie = `tail=${document.querySelector("#tail").value}; expires=${date}`;

	console.log("[qtail] 保存上次的表单成功");
}

/**
 * server worker 部分
 */
if(navigator.serviceWorker) {
	navigator.serviceWorker.register("../sw.js")
	.then(function(registration) {
		console.log("Registered events at scope: ", registration.scope);
	});
}
