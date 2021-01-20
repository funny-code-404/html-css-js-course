const createBlockAboutMe = function (container) {
  const content = document.getElementById(container.id);
  content.innerHTML = "";
  const photo = document.createElement("div");
  photo.classList.add("photo");
  content.appendChild(photo);
};
