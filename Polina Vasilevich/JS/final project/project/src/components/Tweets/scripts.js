export const parseDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  const postYear = date.getFullYear();
  const postMonth = months[date.getMonth()];
  const postDay = date.getDate();

  const dayDiff = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );

  if (dayDiff === 0) {
    return "today";
  } else if (dayDiff <= 5 && dayDiff) {
    const condition = dayDiff === 1;
    return condition ? "1 day ago" : `${dayDiff} days ago`;
  } else {
    return `${postMonth} ${postDay}th, ${postYear}`;
  }
};
