<template lang="html">
  <b-container
    fluid
    class="wrapper"
  >
    <b-container>
      <header>
        <nuxt-link to="/">
          <h1>
            Обменник
          </h1>
        </nuxt-link>
        <nav>
          <ul>
            <li>
              Онас
            </li>
            <li>
              Контакты
            </li>
            <li>
              Вход/Регистрация
            </li>
          </ul>
        </nav>
      </header>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import '~/style/vars.scss';

.wrapper {
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  height: max-content;
  background-color: $green;
  padding: 20px 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;
  h1 {
    color: $white;
    cursor: pointer;
    a:hover {
      text-decoration: none;
    }
  }
  ul {
    display: flex;
    li {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
