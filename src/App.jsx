import logo from "./logo.svg";
import styles from "./App.module.css"

function App() {
  return (
    <div class="text-center bg-blue-900 text-indigo-50">
      <header class="flex items-center justify-center flex-col min-h-screen" style="font-size: calc(10px + 2vmin)">
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="my-5">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
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
