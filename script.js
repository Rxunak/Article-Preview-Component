const popUp = document.getElementById("imageContainer");
const popUpTwo = document.getElementById("profileIcon");
const socialToast = document.getElementById("desktopTooltip");
const profileDiv = document.getElementById("profileSection");
const secondProfile = document.getElementById("mobileShareSection");
const backPointer = document.getElementById("tooltipArrow");

function showAndHidePopUp() {
  socialToast.classList.toggle("hidePopUp");
  backPointer.classList.toggle("hidePopUpBack");
  socialToast.classList.toggle("disabled");
  backPointer.classList.toggle("disabled");
  profileDiv.classList.toggle("hideOriginalDiv");
  secondProfile.classList.toggle("showOption");
}

popUp.addEventListener("click", showAndHidePopUp);

function showAndHideMobileSecond() {
  socialToast.classList.toggle("hidePopUp");
  backPointer.classList.toggle("hidePopUpBack");
  socialToast.classList.toggle("disabled");
  backPointer.classList.toggle("disabled");
  profileDiv.classList.remove("hideOriginalDiv");
  secondProfile.classList.remove("showOption");
}
popUpTwo.addEventListener("click", showAndHideMobileSecond);
