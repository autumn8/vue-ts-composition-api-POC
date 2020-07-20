<template>
  <div class="home">
    Hello this is hom
    <img alt="Vue logo" src="../assets/logo.png" />
    <formy />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Formy from "@/components/Formy.vue";

export default {
  name: "Home",
  components: {
    Formy
  }
};
</script>
