/**
 * media query list のaddEventListenerをどのブラウザ（主にsafari）でも使えるようにする
 */
export const mediaQueryListSafe = () => {
  if (typeof window === 'undefined') return;
  if (typeof window.matchMedia('all').addEventListener !== 'undefined') return;
  MediaQueryList.prototype.addEventListener = (type, listener) => {
    this.addListener(listener);
  };
  MediaQueryList.prototype.removeEventListener = (type, listener) => {
    this.removeListener(listener);
  };
};
