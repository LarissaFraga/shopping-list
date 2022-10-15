<script>
// @ts-nocheck

  import ItemList from './ItemList.svelte'

  let items = JSON.parse(localStorage.getItem('shopping-list')) ?? []

  $: missingItems = items.filter(item => !item.buy).length
  
  $: {
    localStorage.setItem('shopping-list', JSON.stringify(items))
  }

  let inputEl = null

  function addItem() {
    items = [...items, { buy: false, description: inputEl.value }];
    inputEl.value = "";
  }

  function removeItem(item) {
    items = items.filter((i) => i !== item)
  }
</script>

<h2>Shopping List</h2>
<form on:submit|preventDefault={addItem}>
  <input bind:this={inputEl} />
  <button type="submit">Add Item</button>
</form>

{#if items.length === 0}
  <div>The list is empty</div>
{:else}
  {#each items as item}
    <ItemList 
      bind:buy={item.buy} 
      description={item.description} 
      on:removedItem={removeItem(item)}
    />
  {/each}
{/if}

<div>Missing items: {missingItems}</div>