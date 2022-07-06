<template>
  <div class="searchbar">
    <div class="logo-wrapper">
      <div class="logo-wrapper-logo">
        <img src="@/assets/Brand-Logo.svg" alt="logo" />
      </div>
    </div>
    <div class="profile">
      <div class="profile-getleads">Get Leads Now</div>
      <img src="@/assets/dummy-pfp.svg" alt="pfp" class="profile-img" />
      <div class="profile-name">Nancy Meyers</div>
      <div class="profile-dropdown-wrapper">
        <img src="@/assets/arrow-down-pfp.svg" class="profile-dropdown" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  font-family: "Poppins", sans-serif;
  margin: 2.426rem auto 2.911rem auto;
  height: 6.4rem;
  width: 134.4rem;
  background: $white;
  box-shadow: 0 0 0.2rem rgba(40, 41, 61, 0.04),
    0 0.4rem 0.8rem rgba(96, 97, 112, 0.16);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-wrapper {
  height: 3.314rem;
  width: 14.6rem;
  margin-left: 2.4rem;
}

.profile {
  height: 3.2rem;
  width: 32.8rem;
  margin: 1.6rem;
  display: flex;
  align-items: center;

  &-getleads {
    height: 3.2rem;
    width: 13.8rem;
    background-color: $black;
    border-radius: 0.4rem;
    line-height: 3.2rem;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.2px;
    color: $light-peach;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &-name {
    width: 9.9rem;
    height: 2.4rem;
    line-height: 2.4rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: black;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &-dropdown-wrapper {
    height: 2.4rem;
    width: 1.9rem;
    line-height: 2.4rem;
    cursor: pointer;
  }

  &-dropdown {
    height: 0.3rem;
    width: 0.8rem;
  }

  &-img {
    height: 4.338rem;
    width: 4.338rem;
    margin-left: 2.231rem;
    margin-right: 0.631rem;
    border-radius: 50%;
  }
}
</style>
