<template>
  <div>
    <input type="button" @click="increaseCountHasDep()" :value="counterHasDep">
    <input type="button" @click="increaseCountHasNoDep()" :value="counterHasNoDep">
    <h2>{{noWorkFunction()}}</h2>
    <h2>{{getCounterHasDep()}}</h2>
    <h2>{{computcounterHasDep}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Test',
  data: function() {
    return {
      counterHasDep: 0,
      counterHasNoDep: 0,
    };
  },
  methods: {
    // button 클릭 시 data increase
    increaseCountHasDep() {
      this.counterHasDep++;
    },
    increaseCountHasNoDep() {
      this.counterHasNoDep++;
    },

    // 템플릿에서 사용되는 methods
    noWorkFunction() {
      console.log('inside of noWorkFunction')
    },
    getCounterHasDep() {
      console.log('inside of getCounterHasDep')
      return this.counterHasDep;
    },
  },
  computed: {
    computcounterHasDep: function() {
      console.log('inside of computed')
      return this.counterHasDep;
    }
  }
}
</script>

