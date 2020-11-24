<template>
  <div class="hello">
    <h1>{{ memberInfo }}</h1>
    <button
      v-for="item in buyList"
      :key="item.userStatus"
      v-html="item.name"
      @click="btnClick(item)"
    ></button>
    <button @click="shareFunc">分享升级</button>
    <button @click="aaa"></button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
export default {
  name: "HelloWorld",
  data() {
    return {
      buyList: [
        { userStatus: 0, userLevel: "", name: "普通会员" },
        { userStatus: 1, userLevel: "", name: "vip会员" },
        { userStatus: 2, userLevel: "2", name: "vip2会员" },
      ],
    };
  },
  computed: {
    ...mapGetters(["memberInfo"]),
  },
  methods: {
    aaa() {
      this.$router.push({
        path: "page",
      });
    },
    btnClick: function (e) {
      store.dispatch("getMember", e).then((res) => {
        alert(res);
      });
    },
    shareFunc: function () {
      store.dispatch("share").then((res) => {
        alert(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
