<template>
  <div class="hello">
    <div>
      <p @click="$emit(this.addElementForm = false)">Закрыть</p>
      <h1></h1>
    </div>
    <div>

    </div>
    <form action="">

    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
