/**
 * innerWidth, innerHeightを参照したvw, vhを設定する
 */
let prevInnerWidth = 0;
let prevInnerHeight = 0;
export const defineViewportUnits = () => {
  document.documentElement.style.setProperty(
    '--vw',
    `${document.documentElement.offsetWidth / 100}px`
  );
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight / 100}px`
  );

  // twitter webview 対策で、高さが変わるときに大きければ更新するタイプの変数
  if (window.innerHeight > prevInnerHeight) {
    document.documentElement.style.setProperty(
      '--larger-vh',
      `${window.innerHeight / 100}px`
    );
  }

  // 縦方向のリサイズで値を更新しないvh
  // 主にモバイルで使用
  if (window.innerWidth !== prevInnerWidth) {
    document.documentElement.style.setProperty(
      '--initial-vh',
      `${window.innerHeight / 100}px`
    );
  }

  prevInnerWidth = window.innerWidth;
  prevInnerHeight = window.innerHeight;
};
