import { Component } from "solid-js"
import { useTodo } from "@context/todo"

const Home: Component = () => {
	const [todo, setTodo] = useTodo()
	const addRandomTask = () => {
		const newTodo = {
			task: 'Hello',
			completed: false
		}
		setTodo('todos', t => [...t, newTodo])
	}
	return (
		<div>
			<pre class="p-2 rounded text-left bg-blue-700">{JSON.stringify(todo, null, 2)}</pre>
			<button class="p-2 mt-3 rounded bg-blue-500" onclick={addRandomTask}>Mutate</button>
		</div>
	)
}

export default Home