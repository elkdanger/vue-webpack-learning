<template>
    <div>
        <h1>My Webpack Site!</h1>
        <p>This is pretty awesome</p>
        <Button />
    </div>
</template>

<script>
import Button from './Button'

module.exports = {
  components: {
    Button
  }
}
</script>

<style lang="scss">
h1 {
  font-family: Helvetica, sans-serif;
  font-size: 3rem;
}
</style>
