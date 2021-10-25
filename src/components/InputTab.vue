<template>
  <router-link :to='to'>
    <div class='tabButton' :class='{active: actived}'>
      {{ text }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'InputTab',
  props: {
    to: String,
    text: String,
    actived: Boolean
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;
  }

  .tabButton {

    text-align: center;

    display: inline-block;

    width: 100%;
    max-width: 310px;
    margin: 3px;
    padding: 10px;

    color: #969697;
    background-color: #dcddde;

    border-radius: 30px;

    font-family: sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .active {
    color: #2b2302;
    background-color: #ffd111;
  }

</style>