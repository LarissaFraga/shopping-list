<script>
  let counter = 0
</script>

<div>
	Valor: {counter}
	<button on:click={() => counter++}>Incrementar</button>
	<button on:click={() => counter--}>Decrementar</button>
</div>

<style>
  button {
    color: blue;
  }
</style>