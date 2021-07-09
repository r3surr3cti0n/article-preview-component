const btn = document.querySelector(".share-btn");
const box = document.querySelector(".share-item-box");
let isActive = false;

btn.addEventListener("click", () => {
	if (!box.classList.contains("share-active")) {
		isActive = false;
	} else isActive = true;

	if (isActive) {
		box.classList.remove("share-active");
	} else box.classList.add("share-active");
});
