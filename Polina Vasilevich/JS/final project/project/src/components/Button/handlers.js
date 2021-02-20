export const handleScrollDown = (e) => {
  e.preventDefault();

  // const scrollTarget = e.target;

  // const topOffset = document.querySelector("footer").offsetHeight;

  // const elementPosition = scrollTarget.getBoundingClientRect().top;
  // const offsetPosition = elementPosition - topOffset;

  // window.scrollBy({
  //   top: offsetPosition,
  //   behavior: "smooth",
  // });
  const windowCoords = document.documentElement.scrollHeight;
  window.scroll({
    top: windowCoords,
    behavior: "smooth",
  });

  // const windowCoords = document.documentElement.scrollHeight;
  // // window.scrollBy(0, windowCoords);
  // window.scrollTo(0, windowCoords);
  // window.scrollTo({
  //   top: windowCoords,
  //   behavior: "smooth",
  // });
};

export const handleLink = (e, page = "shop") => {
  e.preventDefault();
  window.location.href = `/${e.target.value}`;
};

export const handleReadMore = (e) => {
  e.preventDefault();
};

// export const setHandleButton = (typeHandle) => {
//   switch (typeHandle) {
//     case "scrollDown":
//       return handleScrollDown;

//     case "link":
//       return handleLink;

//     default:
//       break;
//   }
// };
