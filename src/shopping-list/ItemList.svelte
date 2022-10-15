<script>
  import { createEventDispatcher } from "svelte";

  const dispach = createEventDispatcher();

  export let description;
  export let buy;
</script>

<div class="alignCenter">
  <label class="alignCenter">
    <input class="input" type="checkbox" bind:checked={buy} />
    {description}
  </label>
  <button on:click={() => dispach("removedItem")}>Delete</button>
</div>

<style>
  .alignCenter {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .input {
    height: 22px;
    margin-bottom: 5px;
  }
</style>
