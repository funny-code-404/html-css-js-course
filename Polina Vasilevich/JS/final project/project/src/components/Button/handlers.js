export const handleScrollDown = (e) => {
  e.preventDefault();
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

export const handleScrollTop = (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  console.log(1);
};

export const handleLink = (e, page = "shop") => {
  e.preventDefault();
  // window.location.href = `/${e.target.value}`;
  window.location.href = `/${page}`;
};

export const handleContinueRead = (e, href) => {
  e.preventDefault();
  window.open(href);
};
