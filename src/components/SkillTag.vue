<template>
  <a v-if='show' @click='click' class='skillTag' href='#'>
    <div class='plus'>+</div>
    <slot/>
  </a>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    click() {
      this.show = false
    }
  }
}
</script>

<style scoped>

  .skillTag {
    margin: 10px;
    display: inline-block;

    white-space: nowrap;
    
    padding: 10px;

    color:white;

    background: blue;
    border: 1px solid grey;
    border-radius: 5px;

    text-decoration: none;
    background: #f1f1f1;
    color: #7b7b7b;

    font-weight: bolder;
  }

  .plus {
    margin-right: 8px;
    display: inline-block;
    color: #f2f2f2;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background: #7b7b7b;

    font-size: 18px;
    text-align: center;
  }

</style>