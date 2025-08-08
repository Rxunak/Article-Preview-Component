const popUp = document.getElementById("imageContainer");
const popUpTwo = document.getElementById("profileIcon");
const socialToast = document.getElementById("desktopTooltip");
const profileDiv = document.getElementById("profileSection");
const secondProfile = document.getElementById("mobileShareSection");
const backPointer = document.getElementById("tooltipArrow");

function showAndHidePopUp() {
  socialToast.classList.toggle("hidePopUp");
  backPointer.classList.toggle("hidePopUpBack");
}

popUp.addEventListener("click", showAndHidePopUp);

function showAndHideMobile() {
  socialToast.classList.toggle("disabled");
  backPointer.classList.toggle("disabled");
  profileDiv.classList.add("hideOriginalDiv");
  secondProfile.classList.add("showOption");
}
popUp.addEventListener("click", showAndHideMobile);

function showAndHideMobileSecond() {
  profileDiv.classList.remove("hideOriginalDiv");
  secondProfile.classList.remove("showOption");
}
popUpTwo.addEventListener("click", showAndHideMobileSecond);
