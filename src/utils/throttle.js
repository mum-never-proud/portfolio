export default function throttle(callback, delay) {
  let timerRef;

  return () => {
    if (!timerRef) {
      timerRef = window.setTimeout(() => {
        if (typeof callback === 'function') {
          callback();
        }

        timerRef = undefined;
      }, delay);
    }
  };
}
