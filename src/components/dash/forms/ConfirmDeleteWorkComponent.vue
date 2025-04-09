<template>
  <div :class="`confirm-form-${this.$store.state.confirm_delete_work_status}`">
    <h3>Delete Work</h3>
    <p>
      Are you sure? All work data will be permanently deleted and you will not
      be able to retrieve it.
    </p>
    <button class="delete" @click="this.DeleteWork">Delete</button>
    <button
      class="cancel"
      @click="this.$store.commit('OpenOrCloseConfirmDeleteWork')"
    >
      cancel
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async DeleteWork() {
      this.$store.state.loader_status = "open";

      const data = {
        admin_id: this.$store.state.admin_data._id,
        work_id: this.$store.state.work_id_for_delete,
      };

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      await axios
        .delete(this.$store.state.Apis.works.delete, { data, headers })
        .then((res) => {
          this.$router.push("/dashboard/works");
          this.$store.state.loading_rate = 0;
          this.$store.state.message.type = "success";
          this.$store.state.message.message = res.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
          this.$store.commit("OpenOrCloseConfirmDeleteWork");
        })
        .catch((err) => {
          this.$store.state.loading_rate = 0;
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
          this.$store.commit("OpenOrCloseConfirmDeleteWork");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../../sass/varibels";

.confirm-form-open {
  width: 50%;
  max-height: 200px;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 25%;
  opacity: 1;
  transition-duration: 0.5s;
  backdrop-filter: blur(30px);
  padding: 5px;
  background-color: var(--card-bg);
  box-shadow: 0px 0px 10px var(--shadow-color);

  @media (max-width: $phone) {
    width: 96%;
    left: 2%;
  }

  h3 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border-bottom: 1px solid var(--border-color);
  }

  p {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    margin: 5px 0px;
  }

  button {
    width: 100%;
    height: 40px;
    margin: 3px 0px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    color: var(--theme-text);
    border: 1px solid var(--confirm-form-green-border);
    background-color: var(--confirm-form-green-body);
    transition-duration: 0.5s;
  }

  .delete {
    border: 1px solid var(--confirm-form-red-border);
    background-color: var(--confirm-form-red-body);
  }

  .delete:hover {
    background-color: var(--confirm-form-red-border);
  }

  .cancel:hover {
    background-color: var(--confirm-form-green-border);
  }
}

.confirm-form-close {
  @extend .confirm-form-open;
  top: -50%;
  opacity: 0;
}
</style>
