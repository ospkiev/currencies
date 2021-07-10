<template lang="html">
  <b-container
    fluid
    class="wrapper"
  >
    <b-container>
      <header>
        <h1>
          <nuxt-link to="/">
            <img
              src="https://obmenka24.kiev.ua/content/sites/site-42.png"
              alt="img"
              width="150px"
            >
          </nuxt-link>
        </h1>
        <nav>
          <ul>
            <li>
              About Us
            </li>
            <li>
              Contacts
            </li>
            <li>
              Sign In
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
  h1 {
    cursor: pointer;
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
