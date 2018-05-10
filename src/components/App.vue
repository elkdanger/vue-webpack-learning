<template>
    <div>
        <h1>My Webpack Site</h1>
        <p>This is pretty awesome</p>
        <Button />
    </div>
</template>

<script>
import './App.css'
import Button from './Button'

module.exports = {
  components: {
    Button
  }
}
</script>

<style lang="css">
h1 {
  font-family: Helvetica, sans-serif;
  font-size: 3rem;
  color: blue;
}
</style>
