<template>
  <div class="home">
    <ButtonText>Hello</ButtonText>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { ButtonText } from "components-9421";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ButtonText
  }
};
</script>
