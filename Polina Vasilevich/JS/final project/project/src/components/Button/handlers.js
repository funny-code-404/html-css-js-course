export const handleScrollDown = (e) => {
  e.preventDefault();
  const windowCoords = document.documentElement.scrollHeight;
  window.scrollBy(0, windowCoords);
};

export const handleLink = (e, page = "shop") => {
  e.preventDefault();
  window.location.href = `/${e.target.value}`;
};

export const setHandleButton = (typeHandle) => {
  switch (typeHandle) {
    case "scrollDown":
      return handleScrollDown;

    case "link":
      return handleLink;

    default:
      break;
  }
};
