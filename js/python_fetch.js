var uuid = localStorage.getItem("uuid");
				if (!uuid) {
					uuid = uuidv4();
					localStorage.setItem("uuid", uuid);
				}
				if (!document.querySelector(".container1")) {
					var container = document.createElement("div");
					container.className = "container1";

					var chatbox = document.createElement("div");
					chatbox.className = "chatbox";

					var supportDiv = document.createElement("div");
					supportDiv.className = "chatbox__support";

					var headerDiv = document.createElement("div");
					headerDiv.className = "chatbox__header";

					var imageDiv = document.createElement("div");
					imageDiv.className = "chatbox__image--header";
					var image = document.createElement("img");
					image.src = "https://i.imgur.com/jr7rCuU.png"; // Replace with the actual image URL
					image.className = "img";
					imageDiv.appendChild(image);

					var contentDiv = document.createElement("div");
					contentDiv.className = "chatbox__content--header";

					var heading = document.createElement("h4");
					heading.className = "chatbox__heading--header";
					heading.style.color = "#000";
					heading.textContent = "Blozum";

					var description = document.createElement("p");
					description.className = "chatbox__description--header";
					description.style.color = "#000";
					description.textContent = "bluetick.ai Customer Support";

					contentDiv.appendChild(heading);
					contentDiv.appendChild(description);

					headerDiv.appendChild(imageDiv);
					headerDiv.appendChild(contentDiv);

					var messagesDiv = document.createElement("div");
					messagesDiv.className = "chatbox__messages";
					var innerDiv = document.createElement("div");
					messagesDiv.appendChild(innerDiv);

					var footerDiv = document.createElement("div");
					footerDiv.className = "chatbox__footer";

					var input = document.createElement("input");
					input.type = "text";
					input.placeholder = "Ask me anything about bluetick.ai...";
					input.style.backgroundColor = "#fff";

					var sendButton = document.createElement("button");
					sendButton.className = "chatbox__send--footer send__button";
					var sendIcon = document.createElement("i");
					sendIcon.className = "fa-solid fa-paper-plane";
					sendIcon.style.fontSize = "24px";
					sendIcon.style.color = "#f58698";
					sendButton.appendChild(sendIcon);

					footerDiv.appendChild(input);
					footerDiv.appendChild(sendButton);

					supportDiv.appendChild(headerDiv);
					supportDiv.appendChild(messagesDiv);
					supportDiv.appendChild(footerDiv);

					var buttonDiv = document.createElement("div");
					buttonDiv.className = "chatbox__button";
					var button = document.createElement("button");
					button.className = "button-35";
					button.id = "chat_button";
					var svgElement = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"svg"
					);
					svgElement.setAttribute("version", "1.0");
					svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
					svgElement.setAttribute("width", "64px");
					svgElement.setAttribute("height", "64px");
					svgElement.setAttribute("viewBox", "0 0 584 584");
					svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
					svgElement.classList.add("rounded-svg");
					var gElement = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"g"
					);
					gElement.setAttribute(
						"transform",
						"translate(0.000000,584.000000) scale(0.100000,-0.100000)"
					);
					gElement.setAttribute("fill", "#3cb043");
					gElement.setAttribute("stroke", "#000");
					var path1Element = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"path"
					);
					path1Element.setAttribute(
						"d",
						"M0 2920 l0 -2920 2920 0 2920 0 0 2920 0 2920 -2920 0 -2920 0 0 -2920z m1000 678 l0 -743 32 53 c63 108 189 223 318 287 174 88 375 116 564 80 315 -60 584 -314 667 -630 29 -113 29 -297 1 -417 -70 -289 -319 -545 -607 -624 -81 -21 -297 -30 -377 -15 -219 43 -430 175 -544 342 l-49 71 -5 -193 -5 -193 -55 -1 -55 0 -3 1363 -2 1362 60 0 60 0 0 -742z m2070 -360 c0 -1202 -1 -1165 57 -1285 32 -64 137 -174 196 -204 69 -36 148 -59 199 -59 l48 0 0 -45 c0 -25 -1 -48 -2 -52 -4 -11 -94 -4 -161 13 -105 25 -185 72 -273 159 -57 57 -90 99 -113 145 -69 143 -65 56 -68 1303 l-4 1127 61 0 60 0 0 -1102z m1800 7 c0 -3 -87 -148 -194 -322 -596 -979 -726 -1194 -726 -1198 0 -3 207 -5 461 -5 l460 0 -3 -52 -3 -53 -557 -2 c-378 -1 -558 1 -558 8 0 9 58 106 420 704 54 88 188 310 298 493 l202 332 -415 0 -415 0 0 50 0 50 515 0 c283 0 515 -2 515 -5z"
					);
					var path2Element = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"path"
					);
					path2Element.setAttribute(
						"d",
						"M1597 3175 c-94 -18 -220 -77 -299 -139 -132 -105 -243 -271 -284 -426 -24 -88 -24 -272 0 -360 55 -209 217 -404 414 -500 178 -87 415 -94 595 -18 168 70 330 228 402 393 45 101 59 172 59 305 0 187 -40 312 -145 453 -100 133 -266 248 -407 283 -89 22 -245 26 -335 9z"
					);
					gElement.appendChild(path1Element);
					gElement.appendChild(path2Element);
					svgElement.appendChild(gElement);
					button.appendChild(svgElement);
					buttonDiv.appendChild(button);
					chatbox.appendChild(supportDiv);
					chatbox.appendChild(buttonDiv);
					container.appendChild(chatbox);
					document.body.appendChild(container);
				}
				var openButton = document.querySelector(".chatbox__button");
				var chatBox = document.querySelector(".chatbox__support");
				var sendButton = document.querySelector(".send__button");
				var chat_button = document.getElementById("chat_button");
				var messages = [];

				openButton.addEventListener("click", () => toggleState(chatBox));

				sendButton.addEventListener("click", () => onSendButton(chatBox));

				var node = chatBox.querySelector("input");
				node.addEventListener("keyup", ({ key }) => {
					if (key === "Enter") {
						onSendButton(chatBox);
					}
				});

				var state = false;

				function toggleState(chatbox) {
					state = !state;

					if (state) {
						chatbox.classList.add("chatbox--active");
						chat_button.style.backgroundColor = "black";
					} else {
						chatbox.classList.remove("chatbox--active");
						chat_button.style.backgroundColor = "white";
					}
				}

				function onSendButton(chatbox) {
					var textField = chatbox.querySelector("input");
					var text1 = textField.value;
					if (text1 === "") {
						return;
					}
					var html =
						'<div class="messages__item messages__item--operator">' +
						text1 +
						"</div>";
					chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;
					textField.value = "";
					fetch("/get_response?message=" + encodeURIComponent(text1))
						.then(function (response) {
							const resp = response.text();
							return resp;
						})
						.then(function (botMessage) {
							var chatmessage = chatbox.querySelector(".chatbox__messages");
							try {
								var jsonData = JSON.parse(botMessage);
								console.log(jsonData);
								if (typeof jsonData === "object") {
									for (var key in jsonData) {
										if (jsonData.hasOwnProperty(key)) {
											html = "";
											html += jsonData[key];
											chatmessage = chatbox.querySelector(".chatbox__messages");
											chatmessage.innerHTML = html + chatmessage.innerHTML;
										}
									}
								}
							} catch (error) {
								// Regular bot message
								console.error(error);
								console.log("Error me aagaya.");
								html = "";
								chatmessage = chatbox.querySelector(".chatbox__messages");
								chatmessage.innerHTML = html + chatmessage.innerHTML;
								textField.value = "";
							}
						});
				}

				function updateChatText(chatbox) {
					var html = "";
					messages
						.slice()
						.reverse()
						.forEach(function (item, index) {
							if (item.name === "Blozum") {
								console.log("Blozum me aagaya3");
								html +=
									'<div class="messages__item messages__item--visitor">' +
									item.message +
									"</div>";
							} else if (item.name === "User") {
								console.log("User me aagaya");
								html +=
									'<div class="messages__item messages__item--operator">' +
									item.message +
									"</div>";
							}
						});
					var chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;
				}

				function selectOption(option) {
					var textField1 = chatBox.querySelector("input");
					chatBox = document.querySelector(".chatbox__support");
					var Option1 = "Yes123";
					var html = "";
					var chatmessage = chatbox.querySelector(".chatbox__messages");
					if (option === "Buy") {
						html = `<div class="messages__item messages__item--visitor">Please pay through this link within the next 5 minutes to confirm your order.<br><br><a href="https://blozum.com/">https://blozum.pay/upi/ quick_pay</a></div>`;
						setTimeout(function () {
							textField1.value = "";
							chatmessage = chatbox.querySelector(".chatbox__messages");
							console.log("Idhar aagayaa1234");
							chatmessage.innerHTML = html + chatmessage.innerHTML;
						}, 1500);
					}
					if (option === "Yes") {
						Option1 = "blozumdabest01834082340293";
						html =
							'<div class="messages__item messages__item--operator">Yes</div>';
						chatmessage = chatbox.querySelector(".chatbox__messages");
						chatmessage.innerHTML = html + chatmessage.innerHTML;
						fetch("/get_response?message=" + encodeURIComponent(Option1))
							.then(function (response) {
								return response.text();
							})
							.then(function (response) {
								var jsonData = JSON.parse(response);
								console.log(jsonData);
								if (typeof jsonData === "object") {
									for (var key in jsonData) {
										if (jsonData.hasOwnProperty(key)) {
											html = "";
											html += jsonData[key];
											chatmessage = chatbox.querySelector(".chatbox__messages");
											console.log("Idhar aagayaa12345");
											chatmessage.innerHTML = html + chatmessage.innerHTML;
										}
									}
								}
							});
					} else if (option === "No") {
						Option1 = "blozumdabest82340978294587";
						html =
							'<div class="messages__item messages__item--operator">No</div>';
						chatmessage = chatbox.querySelector(".chatbox__messages");
						chatmessage.innerHTML = html + chatmessage.innerHTML;
						fetch("/get_response?message=" + encodeURIComponent(Option1))
							.then(function (response) {
								return response.text();
							})
							.then(function (response) {
								var jsonData = JSON.parse(response);
								console.log(jsonData);
								if (typeof jsonData === "object") {
									// Iterate over JSON properties and create ticket details
									for (var key in jsonData) {
										if (jsonData.hasOwnProperty(key)) {
											html = "";
											html += jsonData[key];
											chatmessage = chatbox.querySelector(".chatbox__messages");
											console.log("Idhar aagayaa123456");
											chatmessage.innerHTML = html + chatmessage.innerHTML;
										}
									}
								}
							});
					}
				}