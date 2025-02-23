<template>
  <div class="works">
    <div class="conatiner">
      <h1>This is an works page</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import "../sass/varibels";
.works {
  width: 100%;
  min-height: 100vh;
  color: $font-light;

  .conatiner {
    width: 40%;
    min-height: 100vh;
    margin: auto;
    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }
  }
}
</style>
