<template>
  <div class='label' :class='{h1: h1, h2: h2}' onho>
    <slot></slot>
    <span v-if='marked' class='star'>★</span>
    <span v-if='hint'>
      <img src='@/assets/question-mark.svg'>
      <span  class='tooltip'>{{ hint }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    marked: Boolean,
    h1: Boolean,
    h2: Boolean,
    hint: String,
  }
}
</script>

<style>

  .label {
    font-family: system-ui;
  }

  .h1 {
    font-size: 1.4rem;
    font-weight: bolder;
  }

  .h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .star {
    width: 0;
    color: red;
    display:inline-block;

    font-size: 0.6rem;

    transform: translate(-1px, -8px);
  }

  img {
    height: 1.2rem;
    transform: translate(2px, 2px);
  }

  .tooltip {
    position: absolute;
    visibility: hidden;
    background: #333333f0;
    color: #eeeeee;

    padding: 20px;

    border-radius: 5px;
    border: 2px solid black;

    transform: translate(10px, -50px)
  }

  .label:hover .tooltip {
    visibility: visible;
  }

</style>