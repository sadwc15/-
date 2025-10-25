// 简单主题切换并记忆到 localStorage
(function(){
  const btn = document.getElementById('themeToggle');
  const key = 'resume-theme-dark';
  const apply = isDark => document.body.classList.toggle('dark', isDark);

  apply(localStorage.getItem(key) === '1');

  btn.addEventListener('click', () => {
    const dark = !document.body.classList.contains('dark');
    apply(dark);
    localStorage.setItem(key, dark ? '1' : '0');
  });
})();
