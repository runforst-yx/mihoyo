<template>
  <div class="map">
    <div
      style="
        width: 100%;
        height: 258px;
        display: flex;
        justify-content: flex-end;
        position: relative;
      "
      v-for="(item, index) in mapList"
      :key="index"
      :style="{
        background: `url(${item.mapUrl}) no-repeat`,
        backgroundSize: `${item.size}px`,
      }"
      @mouseenter="show(index)"
      @mouseleave="off(index)"
    >
      <p class="mapName">{{ item.name }}</p>
      <el-image v-show="item.isShow" :src="item.characterUrl"></el-image>
    </div>
    <div class="none">
      <p class="mapName">敬请期待</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mapList: [
        {
          name: "蒙德城",
          mapUrl: require("../../assets/img/content/mengde.jpg"),
          characterUrl: require("../../assets/img/content/qing.png"),
          isShow: false,
          size: 1902,
        },
        {
          name: "璃月港",
          mapUrl: require("../../assets/img/content/liyue.jpg"),
          characterUrl: require("../../assets/img/content/xiao.png"),
          isShow: false,
          size: 1902,
        },
        {
          name: "稻妻城",
          mapUrl: require("../../assets/img/content/daoqi.jpg"),
          characterUrl: require("../../assets/img/content/linghua.png"),
          isShow: false,
          size: 1902,
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.mapList[index].isShow = true;
    },
    off(index) {
      this.mapList[index].isShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.mapName {
  z-index: 3;
  font-size: 36px;
  color: #fff;
  position: absolute;
  left: calc(45%);
  top: calc(45%);
}
.none {
  width: 100%;
  height: 258px;
  background-color: black;
  position: relative;
}
</style>
