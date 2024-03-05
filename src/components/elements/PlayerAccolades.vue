<script setup></script>

<template>
  <section class="profile--accolades">
    <div class="profile--accolades__title df aic">
      <hr />
      <p>Accolades</p>
    </div>
    <div class="accoladeWrapper">
      <div class="accolade accolade--good"><p>Millionaire: Singed</p></div>
      <div class="accolade accolade--good"><p>Teemo Lover</p></div>
      <div class="accolade accolade--good"><p>KDA GOD</p></div>
      <div class="accolade accolade--good"><p>Millionaire: Singed</p></div>
    </div>
    <div class="accoladeWrapper">
      <div class="accolade accolade--bad"><p>Teemo Lover</p></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile--accolades {
  &__title {
    height: 24px;
    margin-bottom: 15px;
    p {
      margin-right: 8px;
      color: white;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.4;
      align-items: center;
      display: flex;
    }

    hr {
      width: 4px;
      height: 90%;
      background-color: #346565;
      border: none;
      border-radius: 5px 0 0 5px;
      margin-right: 10px;
    }
  }
  .accolade {
    display: flex;
    align-items: center;
    margin-right: 8px;

    p {
      color: white;
      line-height: 1;
      font-size: 14px;
      align-items: center;
      display: flex;
      padding: 0 10px;
      height: 24px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }

  .accolade--good {
    p {
      background-color: #1b9762;
    }
  }

  .accoladeWrapper {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  .accolade--bad {
    p {
      background-color: #840a0a;
    }
  }
}
</style>
