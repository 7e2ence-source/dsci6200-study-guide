// 面试题库筛选：按难度 / 岗位 过滤题目
// 零依赖，渐进增强：无 JS 时所有题目照常展示
(function () {
  'use strict';

  var details = Array.prototype.slice.call(document.querySelectorAll('details.question'));
  if (!details.length) return;

  // 从 summary 文本里解析 〔难度 · 岗位〕 标签，回填到 data 属性
  details.forEach(function (d) {
    var s = d.querySelector('summary');
    if (!s) return;
    var m = s.textContent.match(/〔(.+?)\s*·\s*(.+?)〕/);
    if (!m) return;
    d.setAttribute('data-diff', m[1].trim());
    d.setAttribute('data-role', m[2].trim());
  });

  var state = { diff: 'all', role: 'all' };

  function apply() {
    var visible = 0;
    details.forEach(function (d) {
      var okDiff = state.diff === 'all' || d.getAttribute('data-diff') === state.diff;
      var okRole = state.role === 'all' || d.getAttribute('data-role') === state.role;
      var show = okDiff && okRole;
      d.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    var counter = document.getElementById('q-count');
    if (counter) counter.textContent = String(visible);
  }

  function bind(selector, dim) {
    var btns = Array.prototype.slice.call(document.querySelectorAll(selector));
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        state[dim] = b.getAttribute('data-value');
        btns.forEach(function (x) { x.classList.toggle('active', x === b); });
        apply();
      });
    });
  }

  bind('.diff-btn', 'diff');
  bind('.role-btn', 'role');
  apply();
})();
