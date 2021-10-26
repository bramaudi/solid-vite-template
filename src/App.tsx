import { JSXElement } from "solid-js"
import logo from "./logo.svg";
import styles from "./App.module.css"
import { Link } from "solid-app-router";
import ReloadPrompt from "@components/ReloadPrompt";

function App({ Routes }: { Routes: () => JSXElement }) {
  return (
    <div class="text-center bg-blue-900 text-indigo-50">
      <ReloadPrompt />
      <header class="flex items-center justify-center flex-col min-h-screen">
        <img src={logo} class={ styles.logo} alt="logo" />
        <p class="my-5">
          Edit <code class="p-1 rounded bg-blue-700">src/App.tsx</code> and save to reload.
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
          href="https://solidjs.com"
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
