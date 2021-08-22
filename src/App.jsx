import logo from "./logo.svg";
import styles from "./App.module.css"
import { Link } from "solid-app-router";
import ReloadPrompt from "./ReloadPrompt";

function App({ Routes }) {
  return (
    <div class="text-center bg-blue-900 text-indigo-50">
      <ReloadPrompt />
      <header class="flex items-center justify-center flex-col min-h-screen">
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="my-5">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div>
          <Routes />
          <br />
          <Link class="text-purple-300 underline mx-2" href="/">Home</Link>
          <Link class="text-purple-300 underline mx-2" href="/about">About</Link>
          <Link class="text-purple-300 underline mx-2" href="/post">Post Index</Link>
          <Link class="text-purple-300 underline mx-2" href="/post/1">Post ID</Link>
          <Link class="text-purple-300 underline mx-2" href="/404">404</Link>
        </div>
        <a
          class="text-blue-300"
          href="https://github.com/ryansolid/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
