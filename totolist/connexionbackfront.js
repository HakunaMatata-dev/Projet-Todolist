fetch('https://projet-todolist-one.vercel.app/todos')
  .then(res => res.json())
  .then(data => console.log(data));
