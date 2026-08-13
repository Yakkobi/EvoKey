import type { ElectrobunConfig } from "electrobun";

export default {
	app: {
		name: "EvoKey",
		identifier: "evokey.app",
		version: "0.0.1",
	},
	build: {
		views: {
			mainview: {
				entrypoint: "src/mainview/script.js",
			},
		},
		copy: {
			"src/mainview/index.html": "views/mainview/index.html",
			"src/mainview/style.css": "views/mainview/style.css",
			"src/mainview/Assets/evokey-logo.png": "views/mainview/Assets/evokey-logo.png",
			"src/mainview/Assets/evokey-logo-v2.png": "views/mainview/Assets/evokey-logo-v2.png",
			"src/mainview/Assets/evokey-icon.png": "views/mainview/Assets/evokey-icon.png",
		},
		mac: {
			bundleCEF: false,
		},
		linux: {
			bundleCEF: false,
		},
		win: {
			bundleCEF: false,
		},
	},
} satisfies ElectrobunConfig;
