const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App element not found');
}

app.insertAdjacentHTML('beforeend', '<h1>Example is running!</h1>');
