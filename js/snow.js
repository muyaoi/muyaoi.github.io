// 全站飘雪动效（用户开启系统"减少动态效果"时自动跳过）
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var c = document.createElement('canvas');
  c.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:99999';
  document.body.appendChild(c);
  var ctx = c.getContext('2d');
  var flakes = [];
  function resize() { c.width = innerWidth; c.height = innerHeight; }
  resize();
  addEventListener('resize', resize);
  var N = Math.min(120, Math.floor(innerWidth / 14));
  for (var i = 0; i < N; i++) {
    flakes.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 2.4 + 1,
      s: Math.random() * 1.1 + 0.4,
      o: Math.random() * 0.5 + 0.3,
      a: Math.random() * Math.PI * 2
    });
  }
  (function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#fff';
    flakes.forEach(function (f) {
      f.y += f.s;
      f.x += Math.sin((f.a += 0.01)) * 0.4;
      if (f.y > c.height + 6) { f.y = -6; f.x = Math.random() * c.width; }
      ctx.globalAlpha = f.o;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, 7);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
})();
