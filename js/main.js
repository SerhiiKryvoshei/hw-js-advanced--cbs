//#region ---------show listing-----------------------------------------------

const buttonOne = document.querySelector(".task-one__button");
const picSolutionOne = document.querySelector(".task-one__pic");
buttonOne.addEventListener("click", buttonOneHandler);
function buttonOneHandler() {
	if (buttonOne.innerHTML === "Показать скриншот") {
		buttonOne.innerHTML = "Скрыть скриншот";
		picSolutionOne.style.display = "block";
	} else {
		buttonOne.innerHTML = "Показать скриншот";
		picSolutionOne.style.display = "none";
	}
}

//#endregion

//#region task1 --------------------------------------------------------------

//#endregion
