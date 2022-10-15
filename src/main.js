import './app.css'
import ShoppingList from './shopping-list/ShoppingList.svelte';

const app = new ShoppingList({
  target: document.getElementById('app')
})

export default app
