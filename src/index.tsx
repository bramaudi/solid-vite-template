import { render } from 'solid-js/web'
import { Router, useRoutes } from 'solid-app-router'
import { TodoProvider } from "@context/todo"
import App from './App'
import generatedRoutes from 'virtual:generated-pages';
import rsort from 'sort-route-paths'
import { lazy } from 'solid-js';
import './index.css'

const lazyRoutes = (route) => ({...route, component: lazy(route.component)})
const Routes = useRoutes(rsort(
	generatedRoutes.map(lazyRoutes),
	route => route.path
))

render(
  () => (
    <Router>
      <TodoProvider>
        <App Routes={Routes} />
      </TodoProvider>
    </Router>
  ),
  document.getElementById('root')
)