import { BrowserWindow } from "electrobun/bun";

const mainWindow = new BrowserWindow({
	title: "EvoKey",
	url: "views://mainview/index.html",
	frame: {
		width: 480,
		height: 640,
		x: 200,
		y: 200,
	},
});
