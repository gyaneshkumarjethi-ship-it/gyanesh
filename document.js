document.addEventListener('DOMContentLoaded', function () {
  const title = document.querySelector('h1');
  if (title) {
    title.addEventListener('click', function () {
      alert('Welcome to your index.html!');
    });
  }
});
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };