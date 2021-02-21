export const handleScrollDown = (e, elemId) => {
  e.preventDefault();
  // const windowCoords = document.documentElement.scrollHeight;
  let windowCoords = null;
  if (e.target.value === "footer") {
    windowCoords = document.documentElement.scrollHeight;
  } else {
    windowCoords = document.getElementById(e.target.value).scrollHeight;
  }

  window.scroll({
    top: windowCoords,
    behavior: "smooth",
  });
};

export const handleLink = (e, page = "shop") => {
  e.preventDefault();
  window.location.href = `/${e.target.value}`;
};

export const handleContinueRead = (e, href) => {
  e.preventDefault();
  window.open(href);
};

export const Like = (e) => {
  e.preventDefault();
};
