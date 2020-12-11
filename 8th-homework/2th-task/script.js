const outerLinks = document.getElementsByTagName("a");

for (let i = 0; i < outerLinks.length; i++) {
  currentLink = outerLinks[i];
  hasAttribute = currentLink.getAttribute("href");
  if (hasAttribute && hasAttribute.includes("://")) {
    currentLink.style.color = "red";
  }
}
