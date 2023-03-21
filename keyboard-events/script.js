(() => {
	const keydownPanel = document.getElementById("keydown-stats");
	const keyupPanel = document.getElementById("keyup-stats");
	const keypressPanel = document.getElementById("keypress-stats");
	const parameters = [
		"altKey",
		"charCode",
		"code",
		"ctrlKey",
		"key",
		"keyCode",
		"location",
		"shiftKey",
		"type",
	];

	const state = {
		keydown: {
			altKey: null,
			charCode: null,
			code: null,
			ctrlKey: null,
			key: null,
			keyCode: null,
			location: null,
			shiftKey: null,
		},
		keypress: {
			altKey: null,
			charCode: null,
			code: null,
			ctrlKey: null,
			key: null,
			keyCode: null,
			location: null,
			shiftKey: null,
		},
		keyup: {
			altKey: null,
			charCode: null,
			code: null,
			ctrlKey: null,
			key: null,
			keyCode: null,
			location: null,
			shiftKey: null,
		},
	};

	const flashElement = (element) => {
		element.classList.add("event-fired");
		setTimeout(() => {
			element.classList.remove("event-fired");
		}, 100);
	};

	const increaseCounter = (element) => {
		const counterValue = Number(element.querySelector("p").innerText);
		element.querySelector("p").innerText = counterValue + 1;
	};

	document.body.addEventListener("keydown", (e) => {
		const counter = keydownPanel.querySelector("div");
		flashElement(counter);
		increaseCounter(counter);

		const spanCollection = keydownPanel.querySelectorAll("span");
		const spanArray = [...spanCollection];
		parameters.forEach((item, index) => {
			if (state.keydown[parameters[index]] !== e[item]) {
				state.keydown[parameters[index]] = e[item];
				flashElement(spanArray[index]);
			}

			spanArray[index].innerText = `${item}:  ${e[item]}`;
		});
	});
	document.body.addEventListener("keyup", (e) => {
		const counter = keyupPanel.querySelector("div");
		flashElement(counter);
		increaseCounter(counter);

		const spanCollection = keyupPanel.querySelectorAll("span");
		const spanArray = [...spanCollection];
		parameters.forEach((item, index) => {
			if (state.keyup[parameters[index]] !== e[item]) {
				state.keyup[parameters[index]] = e[item];
				flashElement(spanArray[index]);
			}
			spanArray[index].innerText = `${item}:  ${e[item]}`;
		});
	});
	document.body.addEventListener("keypress", (e) => {
		const counter = keypressPanel.querySelector("div");
		flashElement(counter);
		increaseCounter(counter);

		const spanCollection = keypressPanel.querySelectorAll("span");
		const spanArray = [...spanCollection];
		parameters.forEach((item, index) => {
			if (state.keypress[parameters[index]] !== e[item]) {
				state.keypress[parameters[index]] = e[item];
				flashElement(spanArray[index]);
			}
			spanArray[index].innerText = `${item}:  ${e[item]}`;
		});
	});
})();
