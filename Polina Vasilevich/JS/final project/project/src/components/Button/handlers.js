export const handleScrollDown = (e) => {
  e.preventDefault();
  const windowCoords = document.documentElement.scrollHeight;
  window.scroll({
    top: windowCoords,
    behavior: "smooth",
  });
};

export const handleLink = (e, page = "shop") => {
  e.preventDefault();
  window.location.href = `/${e.target.value}`;
};

export const handleReadMore = (e) => {
  e.preventDefault();
};
