<template>
  <div class='skillButtonContainer'>
    <a href='#'>
      <div :class='{selected: selected}' class='skillButton'>
        <img v-if='selected'  src='@/assets/caret.svg'/>
        <img v-else src='@/assets/question.svg'/>
      </div>
      <div class='skillButtonText'><slot></slot></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;

    display: grid;
    justify-items: center;
    align-items: center;

    color: #1a1a1a;
  }

  .skillButtonContainer {
    width: 150px;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .skillButton {
    width: 30px;
    height: 30px;

    color: #304c72;

    display: grid;
    justify-items: center;
    align-items: center;
  
    border-radius: 50%;
    background: #ffd111;

    box-shadow: 0px 3px 5px #00000030;
  }

  .skillButtonText {
    font-family: Avenir, Helvetica, Arial, sans-serif;;
    font-size: 1.4rem;
    font-weight: bold;
  }

  img {

    transform: scale(1.2) translate(1px, 1px)
  }

  .selected {
    background: #eef5ff;
  }

</style>