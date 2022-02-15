<template>
  <NavBar />

  <div id="main">
    <div class="row_1">
      <h1 id="title_tchat">Pokeball :D (no link to db)</h1>
      <div id="div_image">
        <img
          id="image_product"
          src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/pokeball_test1.png?token=GHSAT0AAAAAABQIKPKXF44XLWQ4PFET2OP2YPKXBFQ"
          alt=""
        />
      </div>
      <div id="tchat_box">
        <div id="top_tchat_box">
          <div class="bouton_tcaht_box">
            <div id="item1"></div>
            <div id="item2"></div>
            <div id="item3"></div>
            <div id="item4"></div>
          </div>
          <div class="bouton_tcaht_box"></div>
          <div class="bouton_tcaht_box"></div>
          <div class="bouton_tcaht_box"></div>
        </div>
        <form @submit.prevent="onSubmit">
          <textarea
            v-model="form.comment"
            name="comment"
            cols="30"
            rows="10"
            placeholder="Write text here"
          >
          </textarea>
          <button type="submit" class="envoie-btn">
            <img
              src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/icon_Send.png?token=GHSAT0AAAAAABQIKPKWKOHX5FYQNW4VYA4CYPONFLQ"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
    <div class="tchat">
      <div class="message">
        <div class="user">
          <h3 class="name_user">Bulby</h3>
          <img
            src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Icon_user_test.png?token=GHSAT0AAAAAABQIKPKXM5I7CYWHVR4ZZT3IYPO34DA"
            alt=""
          />
        </div>
        <div class="text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            magni reprehenderit dolore corrupti laborum illo vero, rem inventore
            dolorum rerum excepturi minus laboriosam aspernatur perspiciatis
            voluptate, natus eum error esse accusantium? Optio inventore cumque
            odio doloremque numquam quod aliquam. Quasi asperiores molestias
            quos vero quia debitis! Similique odio animi obcaecati maiores
            doloremque inventore vel sunt atque eos modi error libero
            reprehenderit ex nisi voluptatem vero, impedit eligendi ipsum rerum
            labore deserunt aut corrupti? Ex temporibus aliquid ut tenetur
            labore facere et eius ratione rem ipsa? Vitae optio delectus tempore
            adipisci quaerat corporis, nemo facere doloribus, provident, nostrum
            quam. Iusto quidem maxime repellendus repellat repudiandae
            reiciendis ipsum natus optio pariatur in dolorem facere quos quia
            aliquid porro sapiente explicabo aperiam, blanditiis exercitationem
            ullam nostrum praesentium. Veritatis sit tempore dicta magnam aut
            esse ducimus ad debitis ex vel. Quaerat, perspiciatis aliquid nihil
            minus architecto ullam veniam. Laudantium, aut accusantium corrupti
            aliquam placeat odio, libero sapiente at fugiat fugit facilis esse
            obcaecati? Iste, earum modi quam optio dolores qui! Dignissimos
            sapiente unde accusantium pariatur, maxime temporibus fuga ratione
            vero excepturi. Consequatur dicta amet tempore facere tempora rem at
            ipsam quas iusto delectus soluta exercitationem dolore praesentium
            quod, omnis, vel et officia vitae deleniti provident, vero quae
            aperiam! Porro, consequuntur. Obcaecati suscipit maiores voluptas
            magni reiciendis ad excepturi. Fugit incidunt id voluptas commodi
            delectus! Animi expedita recusandae velit accusantium natus nulla
            dolore quam soluta iste consequuntur quo quod, aspernatur sequi
            reprehenderit laudantium veniam alias corporis voluptas voluptates
            non. Natus officiis, dolorum fugiat cupiditate tempora similique,
            suscipit odit esse, assumenda sit sapiente id accusamus saepe
            consequuntur! Dolorem repudiandae quidem, quis vero recusandae rerum
            aliquid distinctio earum quaerat quos amet ullam ut labore commodi
            atque ad consequuntur totam aut provident, velit at aperiam!
            Repellat in autem adipisci nesciunt blanditiis voluptates recusandae
            ut commodi molestias officia ullam quos ex vel maxime, minima facere
            soluta at quod culpa quae. Atque quam sit corrupti quasi iusto cum
            consequatur doloribus quas unde incidunt animi, modi, esse repellat.
            Architecto, ut numquam obcaecati quae ducimus, sapiente repellat,
            nisi exercitationem neque velit saepe ea hic ab! Laborum, similique
            aut iusto velit quod temporibus libero illo facere itaque nam ad
            dolor non aspernatur perferendis pariatur, eius animi magni quasi at
            alias. Eos veritatis sed repellat, quo et, quidem cumque nihil
            explicabo beatae tempore perferendis odio voluptatum officia! Culpa,
            ad iste repudiandae alias voluptatum, beatae enim laudantium
            temporibus distinctio, corrupti iure! Perferendis, aut velit officia
            ipsum voluptatum eos, soluta facilis tenetur voluptatem consequatur
            perspiciatis. Fugit rerum quaerat soluta id. Maiores minima
            recusandae ullam dolorum. Deleniti quasi quos hic doloremque officia
            eveniet. Expedita nisi natus dolorum quod quidem suscipit magnam.
            Dolor similique laudantium hic fugiat accusamus. Nam earum pariatur
            quos sed? Possimus adipisci voluptatibus, alias veniam harum a
            pariatur repellendus! Architecto ducimus suscipit voluptatibus
            distinctio, necessitatibus exercitationem dolores vero expedita
            voluptatum saepe, ipsam error id omnis officiis harum modi?
            Veritatis alias accusantium commodi fugit tenetur suscipit natus,
            vero modi? Natus dolores placeat dolore iusto ipsum sed officiis
            pariatur quisquam! Perferendis repudiandae atque dolore corporis
            voluptas excepturi?
          </p>
        </div>
      </div>

      <div class="barrer"></div>

      <div class="message">
        <div class="user">
          <h3 class="name_user">Bulby</h3>
          <img
            src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Icon_user_test.png?token=GHSAT0AAAAAABQIKPKXM5I7CYWHVR4ZZT3IYPO34DA"
            alt=""
          />
        </div>
        <div class="text">
          <p></p>
        </div>
      </div>

      <div class="message"></div>
      <div class="message"></div>
      <div class="message"></div>
      <div class="message"></div>
      <div class="message"></div>
      <div class="message"></div>
    </div>
  </div>
</template>

<style scoped>
input:focus,
textarea:focus {
  outline: none;
}

.row_1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#title_tchat {
  font: 48px;
  font-style: italic;
  display: flex;

  width: 350px;
  margin: 40px;
}

#div_image {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px;
  width: 90%;
  max-width: 700px;
  height: 400px;

  background: white;
  border-radius: 80px;
  margin: 40px;
}

#image_product {
  border-radius: 80px;
  max-height: 300px;
}

#tchat_box {
  position: relative;
  height: 700px;
  width: 400px;

  margin: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 50px;
}

#tchat_box #top_tchat_box {
  border-radius: 500px;
  width: 100%;
  max-width: 340px;
  height: 40px;
  z-index: 1;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #77acf1;
}

#tchat_box #top_tchat_box .bouton_tcaht_box {
  width: 30px;
  height: 30px;
  display: flex;
  padding: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  border-radius: 5px;
  background: white;
}

#tchat_box #top_tchat_box .bouton_tcaht_box #item1 {
  height: 4px;
  width: 23px;
  margin-bottom: 2px;

  background: black;
  border-radius: 500px;
}

#tchat_box #top_tchat_box .bouton_tcaht_box #item2 {
  height: 4px;
  width: 19px;
  margin-bottom: 2px;

  background: black;
  border-radius: 500px;
}

#tchat_box #top_tchat_box .bouton_tcaht_box #item3 {
  height: 4px;
  width: 23px;
  margin-bottom: 2px;

  background: black;
  border-radius: 500px;
}

#tchat_box #top_tchat_box .bouton_tcaht_box #item4 {
  height: 4px;
  width: 14px;
  margin-bottom: 2px;

  background: black;
  border-radius: 500px;
}

#tchat_box textarea {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 0;
  height: 700px;
  width: 400px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.75);
  padding: 80px 20px;
  text-align: start;

  font-size: 18px;
  color: black;
}
#tchat_box input {
  position: absolute;
  bottom: -0px;
  left: 0;
}

#tchat_box input {
  background: url('https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/icon_Send.png?token=GHSAT0AAAAAABQIKPKXGMCZAYXJXYBLO6C6YPK42PQ');
}

textarea {
  position: absolute;
  resize: none;
}

.envoie-btn {
  position: absolute;
  bottom: -150px;

  z-index: 999;
}

#tchat_box form button {
  padding: 0;
  border: none;
  background: none;
}

button img {
  width: 150px;
  height: 150px;
}

form {
  display: flex;
  justify-content: center;
}

.tchat {
  max-width: 1400px;
}

.message .user {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  margin: 10px 0;
}

.message {
  display: flex;
  max-width: 1300px;
  width: auto;

  margin-left: 50px;
  background: #ffffff70;
  border-radius: 25px;
  margin-bottom: 10px;
}

.message .user img {
  width: 100px;
  height: 100px;

  border-radius: 50px;
}

.message .text p {
  top: 0;
}

.message .text {
  padding: 20px;
  width: 90%;
}

.barrer {
  width: 97%;
  height: 3px;
  background: grey;
  margin: 30px 25px;
}

@media screen and (max-width: 1700px) {
  .row_1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #div_image {
    display: flex;
    justify-content: center;

    margin: 0;
    padding: 0;

    width: 80%;
    max-width: 700px;
    height: 400px;

    background: white;
    border-radius: 80px;
  }

  #image_product {
    border-radius: 80px;
    max-height: 300px;
  }

  #title_tchat {
    font: 48px;
    font-style: italic;
    display: flex;

    width: 350px;
  }
}
</style>

<script>
// import { createUser } from '@/firebase'
import { reactive } from 'vue'
import NavBar from '@/components/navBar.vue'

export default {
  setup() {
    const form = reactive({ comment: '' })

    const onSubmit = () => {
      console.log({ ...form })
      form.comment = ''
    }

    return { form, onSubmit }
  },
  components: { NavBar }
}
</script>
