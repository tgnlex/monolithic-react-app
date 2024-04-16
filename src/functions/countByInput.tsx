export const countByInput = (countBy: number) => {
  let seconds = countBy;
  setInterval(() => {
    postMessage(seconds);
    seconds += countBy;
  }, 1000);
};