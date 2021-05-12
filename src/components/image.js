export default (src) => {
  const imageEl = document.createElement("img");

  imageEl.src = src;

  return imageEl;
};
