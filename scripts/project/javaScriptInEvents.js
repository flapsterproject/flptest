

const scriptsInEvents = {

	async Main_Event14_Act3(runtime, localVars)
	{
		const param = Telegram.WebApp.initDataUnsafe.start_param; 
		runtime.globalVars.parent_candidate = param;
	},

	async Main_Event15_Act1(runtime, localVars)
	{
const playerId = runtime.globalVars.player_id;
const fullUrl = `https://t.me/FlapsterMiner_bot?startapp=${playerId}`;
runtime.globalVars.ref_link = fullUrl;
	},

	async Main_Event16_Act1(runtime, localVars)
	{
		// 1. Через start_param
		const param = Telegram.WebApp.initDataUnsafe.start_param;
		if (param) {
		  runtime.globalVars.parent_candidate = param;
		} else {
		  // 2. Через ?ref=
		  const urlParams = new URLSearchParams(window.location.search);
		  const ref = urlParams.get("ref");
		  if (ref) {
		    runtime.globalVars.parent_candidate = ref;
		  }
		}
		
	},

	async Referral_Event2_Act1(runtime, localVars)
	{
const playerId = runtime.globalVars.player_id;
const fullUrl = `https://t.me/FlapsterMiner_bot?startapp=${playerId}`;
const messageText = `Привет! Вступай в мою команду! Давай играть и зарабатывать вместе!`;
const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(messageText)}`;
window.open(shareUrl, "_blank");
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
