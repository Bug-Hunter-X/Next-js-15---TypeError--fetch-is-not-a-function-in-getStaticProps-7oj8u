```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import fetch from 'node-fetch'; // Import fetch

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  return {
    props: {
      todo: data,
    },
  };
}

export default function About({ todo }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Todo: {todo.title}</p>
    </div>
  );
}
```