/**
 * DSCI 6200 学习辅导手册 — 前端行为层
 * 设计原则：
 *   - 零依赖（原生 JS，不引入任何第三方库）
 *   - 渐进增强（无 JS 时站点仍可正常阅读，本脚本只负责"导航高亮"增强体验）
 *   - 严格模式，事件监听 passive，不触碰用户数据，不发起任何网络请求
 */
(function () {
  'use strict';

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('nav a[href^="#"]')
  );

  // 依据导航链接解析出对应的章节节点，过滤无效引用
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  if (!sections.length) return;

  /** 滚动监听：高亮当前阅读到的章节（scroll-spy） */
  function updateActiveLink() {
    var probe = window.scrollY + 90; // 为吸顶导航预留偏移
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= probe) {
        current = section;
      }
    });

    var activeId = current.getAttribute('id');
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink, { passive: true });
  updateActiveLink();
})();
