<template>
  <div :class="`${this.$store.state.theme}-model`">
    <div id="three-container">
      <div class="loader" v-if="this.model_loaded"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import modelPath from "../../../public/model/source/model/model.dae";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

export default {
  data() {
    return {
      model_loaded: true,
    };
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const controls = new OrbitControls(camera, renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    camera.position.z = 4;

    const loader = new ColladaLoader();
    let model;
    let rotationAngle = 0;

    loader.load(
      modelPath,
      (collada) => {
        model = collada.scene;
        scene.add(model);
        // update the model_loaded to close the loader animation
        this.model_loaded = false;

        model.scale.set(0.8, 0.8, 0.8);
        model.position.set(0, 1, 0);

        // إضافة الإضاءة هنا
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      if (model) {
        rotationAngle += 0.005;
        model.rotation.y = rotationAngle;
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  },
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";
.dark-model {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #three-container {
    background-color: none;
    width: 100%;
    height: 300px;
    overflow: hidden;

    @media (max-width: $phone) {
      height: 400px;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes rotate {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    .loader {
      width: 100px;
      height: 100px;
      @media (max-width: $phone) {
        width: 70px;
        height: 70px;
        margin-top: 50%;
      }
      margin: 110px auto 0;
      border: solid 3px $light-theme;
      border-radius: 50%;
      border-right-color: transparent;
      border-bottom-color: transparent;
      -webkit-transition: all 0.5s ease-in;
      -webkit-animation-name: rotate;
      -webkit-animation-duration: 1s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;

      transition: all 0.5s ease-in;
      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  .model-cont {
    width: 50%;
    height: 100%;
    margin: auto;
    background-color: orange;

    @media (max-width: $phone) {
      width: 100%;
    }
  }
}

.light-model {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  #three-container {
    background-color: none;
    width: 100%;
    height: 300px;
    overflow: hidden;

    @media (max-width: $phone) {
      height: 400px;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes rotate {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    .loader {
      width: 100px;
      height: 100px;
      @media (max-width: $phone) {
        width: 70px;
        height: 70px;
        margin-top: 50%;
      }
      margin: 110px auto 0;
      border: solid 3px $dark-theme;
      border-radius: 50%;
      border-right-color: transparent;
      border-bottom-color: transparent;
      -webkit-transition: all 0.5s ease-in;
      -webkit-animation-name: rotate;
      -webkit-animation-duration: 1s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;

      transition: all 0.5s ease-in;
      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  .model-cont {
    width: 50%;
    height: 100%;
    margin: auto;

    @media (max-width: $phone) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
