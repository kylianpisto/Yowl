<template>
  <div>
    <NavBar />

    <div class="category">
      <div class="categoryname">
        <h1>Food</h1>
      </div>
      <div class="container">
        <div class="element el1bk"></div>
        <div class="element el2uber"></div>
        <div class="element el3mcdo"></div>
        <div class="element el4deliveroo"></div>
      </div>
    </div>

    <div class="category">
      <div class="categoryname">
        <h1>High tech</h1>
      </div>
      <div class="container">
        <div class="element el1apple"></div>
        <div class="element el2google"></div>
        <div class="element el3tesla"></div>
        <div class="element el4microsoft"></div>
      </div>
    </div>

    <div class="category">
      <div class="categoryname">
        <h1>Clothes</h1>
      </div>
      <div class="container">
        <div class="element el1hm"></div>
        <div class="element el2gucci"></div>
        <div class="element el3nike"></div>
        <div class="element el4tnf"></div>
      </div>
    </div>
    <div class="category">
      <div class="categoryname">
        <h1>Brand</h1>
      </div>
      <div class="container">
        <div class="element el1amazon"></div>
        <div class="element el2meta"></div>
        <div class="element el3total"></div>
        <div class="element el4neflix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue'

export default {
  name: 'Category',
  components: { NavBar }
}
</script>

<style>
@media (min-width: 700px) {
  .container {
    justify-content: space-around;
    display: flex;
    /*background: pink;*/
    width: 1200px;
    height: 260px;
    padding-top: 3%;
  }
}

.category {
  padding-bottom: 2%;
}

.categoryname {
  /*border: 5px solid red;*/
  background: #bebbdd;
  border-radius: 10px 40px 40px 10px;
  width: 30%;
  height: 50px;
}

.categoryname h1 {
  font-size: 25px;
  text-align: right;
  padding-right: 30px;
  padding-top: 2%;
}

.element {
  /*border: 5px solid red;*/
  text-align: center;
  margin: 5px;
  font-size: 50px;
  width: 266.6px;
  height: 185.88px;
  border-radius: 45px;
}

p {
  position: relative;
  top: 25%;
}

.el1bk {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card.png?token=GHSAT0AAAAAABQFZQ5KCRWAWL3RUAIJ5FFOYP332UQ');
}

.el2uber {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(1).png?token=GHSAT0AAAAAABQFZQ5KK2W6GOMJGG2TC4E2YP34BYQ');
}

.el3mcdo {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/-458880%201.png?token=GHSAT0AAAAAABQFZQ5KY5XJL7ENS6YYX6S4YP34EAQ');
}

.el4deliveroo {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(2).png?token=GHSAT0AAAAAABQFZQ5KPOYNGDHAFZ63ZPFAYP337VA');
}

.el1apple {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(6).png?token=GHSAT0AAAAAABQFZQ5KO6NREOG4V5UTBEQEYP34SPQ');
}

.el2google {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(5).png?token=GHSAT0AAAAAABQFZQ5KJ2KVOQKZOYVRZCKIYP34S7A');
}

.el3tesla {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(4).png?token=GHSAT0AAAAAABQFZQ5LCLLHH5QJQYBHG47IYP34TXA');
}

.el4microsoft {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(3).png?token=GHSAT0AAAAAABQFZQ5KIZEXDD7L5BHFJJYQYP34UKQ');
}

.el1hm {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(10).png?token=GHSAT0AAAAAABQFZQ5LGU5D456FL4GTSBAIYP34WWQ');
}

.el2gucci {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(9).png?token=GHSAT0AAAAAABQFZQ5KD3LSG4SHDDMLWVVQYP34ZUQ');
}

.el3nike {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(8).png?token=GHSAT0AAAAAABQFZQ5KRCMBYFXJSFTFXYNWYP342SQ');
}

.el4tnf {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(7).png?token=GHSAT0AAAAAABQFZQ5LB6WYYECBNQ5H3SQGYP346SA');
}

.el1amazon {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(14).png?token=GHSAT0AAAAAABQFZQ5K56YC5BMPU7BB246AYP35HQQ');
}

.el2meta {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(13).png?token=GHSAT0AAAAAABQFZQ5LULJLHOE7LSLEMLW2YP35HBA');
}

.el3total {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(12).png?token=GHSAT0AAAAAABQFZQ5LJ4N4BBT3XHX7WGH4YP35GPA');
}

.el4neflix {
  background-image: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Card%20(11).png?token=GHSAT0AAAAAABQFZQ5LBUZZ22K3LR4T53KYYP36PPA');
}
</style>
