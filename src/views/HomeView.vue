<template>
  <div :class="`home-${this.$store.state.theme}`">
    <div class="container">
      <h1>Hello, I'm an indie app developer based in Japan!</h1>

      <div class="header">
        <div class="info">
          <h2>Rami Ahmed</h2>
          <h4>Digital Craftsman ( Artist / Developer / Designer )</h4>
        </div>
        <img src="../assets/70b903b9-1da9-4732-9ef1-6616cdb43a8b.jpg" alt="" />
      </div>

      <div class="data">
        <h3>work</h3>

        <p>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called Inkdrop. He publishes content for marketing his
          products and his YouTube channel called "Dev as Life" has more than
          100k subscribers
        </p>

        <button @click="this.$router.push('/works')">
          My Works <icon icon="arrow-right" />
        </button>

        <h3>bio</h3>

        <div class="bio-cont">
          <p>2002 : Lorem ipsum dolor sit amet consectetur.</p>
          <p>2002 : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>2002 : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <h3>I love</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab qui
          commodi quas amet esse ipsam molestiae modi et obcaecati facere.
        </p>
      </div>

      <div class="on-the-web">
        <h3>On The Web</h3>

        <ul class="links-cont">
          <li>
            <router-link to="/"> Phone number </router-link>
          </li>

          <li>
            <router-link to="/"> Whatsapp number </router-link>
          </li>
          <li>
            <router-link to="/"> Instagram </router-link>
          </li>
          <li>
            <router-link to="/"> facebook </router-link>
          </li>
          <li>
            <router-link to="/"> gitHub </router-link>
          </li>
          <li>
            <router-link to="/"> LinkedIn </router-link>
          </li>
          <li>
            <router-link to="/"> Code wars </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
@import "../sass/varibels";
.home-dark {
  width: 100%;
  min-height: 100vh;
  background-color: $dark-theme;
  padding: 10px 0px;

  .container {
    width: 40%;
    min-height: 100vh;
    margin: auto;
    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }

    h1 {
      padding: 10px;
      border-radius: 10px;
      margin: 5px 0px;
      color: $font-light;
      background-color: $message-dark;
      font-size: $medium;
      text-align: center;
    }

    .header {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $phone) {
        justify-content: center;
      }

      .info {
        width: 75%;
        height: 100%;
        color: $font-light;
        @media (max-width: $phone) {
          width: 100%;
        }

        h2 {
          width: 100%;
          height: auto;
          font-size: $x4-large;
        }

        h4 {
          width: 100%;
          height: auto;
          font-size: $small;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid $dark-icon-theme-color;
        @media (max-width: $phone) {
          margin: 10px;
        }
      }
    }

    .data {
      width: 100%;
      height: auto;
      margin: 20px 0px;

      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-light;
        font-size: $large;
      }

      p {
        width: 98%;
        height: auto;
        margin: 3px 1%;
        color: $font-light;
        font-size: $medium;
        text-align: justify;
        position: relative;
      }

      button {
        border: none;
        outline: none;
        width: 30%;
        height: 40px;
        text-decoration: none;
        border-radius: 5px;
        font-size: $small;
        margin: 10px 35%;
        cursor: pointer;
        background-color: $blue-1-light;
        color: $font-dark;

        svg {
          margin: 0px 5px;
        }
      }

      .bio-cont {
        width: 100%;
        height: auto;

        p {
          width: 98%;
          height: auto;
          margin: 3px 1%;
          color: $font-light;
          font-size: $small;
        }
      }
    }

    .on-the-web {
      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-light;
        font-size: $large;
      }

      .links-cont {
        width: 100%;
        height: auto;
        padding: 10px 0px;
        list-style-type: none;

        li {
          margin: 10px 0px;
          a {
            width: auto;
            list-style-type: none;
            margin: 10px 0px;
            padding: 5px 10px;
            border-radius: 5px;
            color: $blue-1-light;
            text-decoration: none;
            margin: 10px 5px;
            cursor: pointer;
            transition-duration: 0.5s;
            text-decoration: none;
            color: $blue-1-dark;
          }

          a:hover {
            background-color: $blue-2-dark;
          }
        }
      }
    }
  }
}

.home-light {
  width: 100%;
  min-height: 100vh;
  background-color: $light-theme;
  padding: 10px 0px;

  .container {
    width: 40%;
    min-height: 100vh;
    margin: auto;
    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }

    h1 {
      padding: 10px;
      border-radius: 10px;
      margin: 5px 0px;
      color: $font-dark;
      background-color: $message-light;
      font-size: $medium;
      text-align: center;
    }

    .header {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $phone) {
        justify-content: center;
      }

      .info {
        width: 75%;
        height: 100%;
        color: $font-dark;

        @media (max-width: $phone) {
          width: 100%;
        }

        h2 {
          width: 100%;
          height: auto;
          font-size: $x4-large;
        }

        h4 {
          width: 100%;
          height: auto;
          font-size: $small;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid $dark-icon-theme-color;
        @media (max-width: $phone) {
          margin: 10px;
        }
      }
    }

    .data {
      width: 100%;
      height: auto;
      margin: 20px 0px;

      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-dark;
        font-size: $large;
      }

      p {
        width: 98%;
        height: auto;
        margin: 3px 1%;
        color: $font-dark;
        font-size: $medium;
        text-align: justify;
        position: relative;
      }

      button {
        border: none;
        outline: none;
        width: 30%;
        height: 40px;
        text-decoration: none;
        border-radius: 5px;
        font-size: $small;
        margin: 10px 35%;
        cursor: pointer;
        background-color: $blue-1-light;
        color: $font-light;

        svg {
          margin: 0px 5px;
        }
      }

      .bio-cont {
        width: 100%;
        height: auto;

        p {
          width: 98%;
          height: auto;
          margin: 3px 1%;
          color: $font-dark;
          font-size: $small;
        }
      }
    }

    .on-the-web {
      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-dark;
        font-size: $large;
      }

      .links-cont {
        width: 100%;
        height: auto;
        padding: 10px 0px;

        li {
          margin: 10px 0px;
          list-style-type: none;
          a {
            width: auto;
            list-style-type: none;
            margin: 10px 0px;
            padding: 5px 10px;
            border-radius: 5px;
            color: $blue-1-light;
            text-decoration: none;
            margin: 10px 5px;
            cursor: pointer;
            transition-duration: 0.5s;
            text-decoration: none;
          }

          a:hover {
            background-color: $blue-2-light;
          }
        }
      }
    }
  }
}
</style>
