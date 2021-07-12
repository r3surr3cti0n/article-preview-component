const btn = document.querySelector(".fa-share");
const box = document.querySelector(".share-item-box");
let isActive;

document.addEventListener("click", (e) => {
	isActive = box.classList.contains("share-active");

	// If active and we've not clicked on the
	// box hide it
	if (isActive && e.target !== box) {
		box.classList.remove("share-active");
	} else if (!isActive && e.target === btn) {
		box.classList.add("share-active");
	}
});
