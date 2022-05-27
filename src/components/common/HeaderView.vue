<template>
  <div class="headerView">
    <div class="headerLeft">
      <i class="el-icon-edit"></i>
      <div class="logo"></div>
      <ul class="headerList">
        <li
          v-for="(item, index) in headerList"
          :key="index"
          :class="{ isActive: item.isActive }"
          @click="go(item.url, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <ul class="headerRight">
      <li>成长关爱系统 <i class="el-icon-edit"></i></li>
      <li>登录 <i class="el-icon-edit"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoUrl: require("../../assets/img/logo.jpg"),
      headerList: [
        {
          name: "首页",
          isActive: true,
          url: "/",
        },
        {
          name: "新闻",
          isActive: false,
          url: "newsView",
        },
        {
          name: "角色",
          url: "/characterView",
          isActive: false,
        },
        {
          name: "世界",
          isActive: false,
          url: "/worldView",
        },
        {
          name: "漫画",
          isActive: false,
          url: "/cartoonView",
        },
        {
          name: "社区",
          isActive: false,
          url: "/comunityView",
        },
      ],
    };
  },
  methods: {
    go(url, index) {
      // console.log(window.location.href);
      // let href = window.location.href.split("http://localhost:8080/")[1];
      this.$router.push(url);
      for (let item in this.headerList) {
        if (item == index) {
          this.headerList[index].isActive = true;
        } else {
          this.headerList[item].isActive = false;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.headerView {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: gray;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 95px;
    height: 60px;
    background: url("../../assets/img/logo.jpg");
    background-size: cover;
  }
  .headerLeft {
    padding: 0 0 0 100px;
    display: flex;
    align-items: center;
    .el-icon-edit {
      margin: 0 10px;
    }
    .headerList {
      font-size: 20px;
      padding: 0 0 0 100px;
      display: flex;
      align-items: center;
      li {
        border-top: 4px solid gray;
        height: 56px;
        margin: 0 30px;
        line-height: 58px;
        cursor: pointer;
      }
      li:hover {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
        color: #fff;
      }
    }
  }
  .headerRight {
    padding: 0 100px 0 0;
    display: flex;
    align-items: center;
    li {
      margin: 0 20px;
      cursor: pointer;
    }
    li:hover {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
  }
}
.isActive {
  border-top: 4px solid #69e0ff !important;
}
</style>
