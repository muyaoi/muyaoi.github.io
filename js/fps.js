// 左下角 FPS 显示（与参考站一致：满帧显示"十分流畅"）
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var el = document.createElement('div');
  el.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:99998;color:#fff;'
    + 'font:12px/1.6 Consolas,monospace;background:rgba(0,0,0,.35);padding:2px 10px;'
    + 'border-radius:8px;pointer-events:none;text-shadow:0 1px 2px rgba(0,0,0,.5)';
  document.body.appendChild(el);
  var last = performance.now(), frames = 0;
  function tick(now) {
    frames++;
    if (now - last >= 1000) {
      var fps = Math.round(frames * 1000 / (now - last));
      frames = 0;
      last = now;
      el.textContent = 'FPS:' + fps + (fps >= 55 ? ' 十分流畅🤣' : fps >= 30 ? ' 还行' : ' 有点卡');
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
