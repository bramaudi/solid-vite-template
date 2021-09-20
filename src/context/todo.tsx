import { createContext, useContext } from "solid-js"
import { createStore, Store, SetStoreFunction } from "solid-js/store"

type Todo = {
	todos: Array<{
		task: string
		completed: boolean
	}>
}
type Context = [
	Store<Todo>,
	SetStoreFunction<Todo>
]

const TodoContext = createContext<Context>()

export const TodoProvider = (props: { children: unknown }) => {
	const [todo, setTodo] = createStore({
		todos: []
	})

	return (
		<TodoContext.Provider value={[todo, setTodo]}>
			{props.children}
		</TodoContext.Provider>
	)
}

export const useTodo = () => useContext(TodoContext)