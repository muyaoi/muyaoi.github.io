// 在侧栏"最新文章"卡片底部追加"全部文章"跳转按钮
(function () {
  function addButton() {
    var card = document.querySelector('#aside-content .card-widget.card-recent-post');
    if (!card || card.querySelector('.all-posts-btn')) return;
    var a = document.createElement('a');
    a.className = 'all-posts-btn';
    a.href = '/posts/';
    a.textContent = '全部文章';
    card.appendChild(a);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButton);
  } else {
    addButton();
  }
})();
