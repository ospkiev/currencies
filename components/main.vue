<template lang="html">
  <b-container fluid>
    <b-container>
      <main>
        <b-row>
          <h2>
            Добро пожаловать в Обменник!
          </h2>
          <div>
            <nuxt-link to="/currencies">
              <h3>
                Получить актуальные курсы валют
              </h3>
              <i
                class="fa fa-arrow-right fa-2x"
                aria-hidden="true"
              />
            </nuxt-link>
          </div>
        </b-row>
      </main>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
@import '~/style/vars.scss';

.container-fluid {
  padding: 0;
  background-color: $green-light;
  height: calc(100vh - 100px);
  .container {
    height: 100%;
  }
}

main {
  display: flex;
  height: 100%;
  .row {
    color: $white;
    margin: auto;
    display: block;
    text-align: center;
    h2 {
      padding-bottom: 20px;
    }
    a {
      font-size: 20px;
      color: inherit;
      display: flex;
      align-items: center;
      i {
        margin-left: 20px;
      }
      &:hover {
        text-decoration: none;
        color: orange;
      }
    }
  }
}
</style>
