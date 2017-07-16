const pad = number => {
  return number < 10 ? '0' + number : number;
};

const formatDate = timestamp => {
  let dateObj = new Date(timestamp);
  return `${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())} ${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
};

export {
  formatDate,
  pad
}
