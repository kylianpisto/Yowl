<template>
    <div id="logo">
      <img
        src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Logo_Yowl_Black.png?token=GHSAT0AAAAAABQIKPKXPOOLYRGQCMBJA4NSYP3246A"
        alt="logo"
        v-on:click="ReturnHome()"

      />
    </div>

  <FormLogOut />
</template>
<script>
import FormLogOut from '@/components/formLogOut.vue'

export default {
  name: 'LogOut',
  components: { FormLogOut },
  methods: {
    ReturnHome() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
#logo {
  z-index: 10;
  position: absolute;
  top: 10px;
  left: 10px;
}

#logo img {
  width: auto;
  height: 90px;
}
</style>
