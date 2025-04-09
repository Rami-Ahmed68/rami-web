<template>
  <div class="not-found-page">
    <div class="container">
      <h1>Not Found</h1>
      <p>The page you're looking for was not found.</p>
      <router-link to="/">Rutern to home</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "../sass/varibels";

.not-found-page {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .container {
    width: 100%;
    height: auto;
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
      height: auto;
      color: var(--theme-text);
    }

    p {
      width: 100%;
      height: auto;
      margin: 5px 0px;
      color: var(--theme-text);
      border-bottom: 1px solid var(--border-color);
    }

    a {
      padding: 10px 15px;
      border-radius: 5px;
      margin: 10px 0px;
      border: none;
      outline: none;
      text-decoration: none;
      color: var(--button-text);
      font-weight: 700;
      background-color: var(--blue);
    }
  }
}
</style>
