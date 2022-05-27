<template>
  <el-container style="position: relative; z-index: 40" ref="close">
    <el-aside
      style="width: 200px"
      :style="TheStyle"
      @click="backTop()"
      class="back"
    >
      <!-- <div @click="backTop()"><i class="el-icon-upload2"></i></div> -->
      <h1>关注我们</h1>
      <el-image :src="Asideurl"></el-image>
      <h1>扫码关注微信</h1>
      <ul>
        <li>
          <div>
            <span class="iconfont icon-weibo"></span>
          </div>
          <span>官方微博</span>
        </li>
        <li>
          <div>
            <span class="iconfont icon-taptap"></span>
          </div>
          <span>TapTap</span>
        </li>
        <li>
          <div>
            <span class="iconfont icon-mihoyo2"></span>
          </div>
          <span>官方社区</span>
        </li>
      </ul>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      Asideurl: require("../../assets/img/AsideInfo.jpg"),
      TheStyle: {
        position: "absolute",
        right: 0,
        top: 0,
        display: "none",
      },
    };
  },
  // vue的两个生命钩子，这里不多解释。
  // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      //   let ispeed = Math.floor(-document.documentElement.scrollTop / 5);
      //   console.log(ispeed);
      //   console.log(document.documentElement.scrollTop);
      let timer = setInterval(() => {
        let ispeed = Math.floor(-document.documentElement.scrollTop / 8);
        document.documentElement.scrollTop += ispeed;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //   console.log(scrollTop);
      //   console.log(scrollTop, back.offsetTop);
      if (scrollTop > 200) {
        this.TheStyle.position = "fixed";
        this.TheStyle.right = "0";
        this.TheStyle.display = "block";
        this.TheStyle.top = "400px";
      } else {
        this.TheStyle.display = "none";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  position: relative;
  text-align: center;
  z-index: 80;
  line-height: 45px;
  border: 1px solid #999;
  background-color: white;
  color: skyblue;
  cursor: pointer;
  li {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    div {
      width: 80px;
    }
  }
  li:hover {
    background-color: #333333;
  }
}
</style>
