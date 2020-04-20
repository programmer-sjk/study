<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" @click="increaseCount()" :value="counter">
    <input type="button" @click="increaseCount2()" :value="counter2">
    <h2>{{double()}}</h2>
    <h3>{{triple}}</h3>
    
  </div>
</template>

<script>
//var data = {counter: 0, counter2: function() {return  0}}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    double() {
      console.log('inside double')
      return this.counter * 2;
    },
    increaseCount() {
      this.counter++;
    },
    increaseCount2() {
      this.counter2++;
    }
  },
  computed: {
    triple: function() {
      console.log('inside triple')
      return this.counter * 3;
    }
  }
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
