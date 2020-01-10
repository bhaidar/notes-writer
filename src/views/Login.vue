<template>
  <div class="login">
    <section class="session">
      <div class="left"></div>
      <section>
        <header>
          <h1>Notes Writer</h1>
          <p>Welcome to Notes Writer App! Login to your account to manage your notes:</p>
        </header>
        <form class="form">
          <div class="form__field">
            <input
              id="email"
              type="text"
              placeholder="Email"
              autocomplete="off"
            >
            <label for="email">Email:</label>
          </div>
          <div class="form__field">
            <input
              id="password"
              type="password"
              placeholder="Password"
              autocomplete="off"
            >
            <label for="password">Password:</label>
          </div>
          <button class="btn form__btn--submit">Log In</button>
        </form>
      </section>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/components/login.scss";
</style>
