<template>
<div class="empty-card">
      <div class="empty-card-top"></div>
    </div>
</template>

<style lang="scss" scoped>
.empty-card {
  width: 20.263rem;
  height: 25.568rem;
  background-color: $light-grey-three;
  border-radius: 0.6rem;

  &-top {
    height: 14.089rem;
    width: 20.263rem;
    background-color: $subtle-white-two;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: -5%;
      left: -5%;
      height: 14.089rem;
      background-color: $light-grey-three;
      clip-path: ellipse(54.2% 50% at 40% 100%);
    }
  }
}

</style>