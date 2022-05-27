<template>
  <div class="MainView">
    <el-image class="main" :src="mainUrl"></el-image>
    <div class="section">
      <h1 class="newsWords">新闻资讯</h1>
      <div class="banner">
        <div style="width: 640px">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="(item, index) in banner" :key="index">
              <!-- <img :src="item.url" alt="" /> -->
              <el-image :src="item.url" style="height: 100%"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bannerNews">
          <el-tabs v-model="activeName">
            <el-tab-pane
              v-for="(item, index) in bannerNews"
              :key="index"
              :label="item.label"
              :name="item.order"
            >
              <ul>
                <li v-for="(i, k) in item.conent" :key="k">
                  <p>{{ i.value }}</p>
                  <p>{{ i.time }}</p>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
          <div class="watchMore">
            <p><i class="el-icon-plus"></i>查看全部资讯</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        {
          url: require("../../assets/img/banner/1.jpg"),
        },
        {
          url: require("../../assets/img/banner/2.png"),
        },
        {
          url: require("../../assets/img/banner/3.jpg"),
        },
        {
          url: require("../../assets/img/banner/4.jpg"),
        },
      ],
      mainUrl: require("../../assets/img/section.jpg"),
      activeName: "first",
      bannerNews: [
        {
          label: "最新",
          order: "first",
          conent: [
            {
              value: "《原神》2.7版本「荒梦藏虞渊」内容专题页上线",
              time: "2022/5/25",
            },
            {
              value: "「线人来信了，嗯，看来又出现了新的变数。」",
              time: "2022/5/25",
            },
            {
              value: "天地一渺渺，幽客自来去",
              time: "2022/5/25",
            },
            {
              value: "《原神》夜兰角色PV——「天网恢恢」",
              time: "2022/5/25",
            },

            {
              value: "《原神》预下载即将开启",
              time: "2022/5/25",
            },
          ],
        },
        {
          label: "新闻",
          order: "second",
          conent: [
            {
              value: "《原神》2.7版本「荒梦藏虞渊」内容专题页上线",
              time: "2022/5/25",
            },
            {
              value: "「线人来信了，嗯，看来又出现了新的变数。」",
              time: "2022/5/25",
            },
            {
              value: "天地一渺渺，幽客自来去",
              time: "2022/5/25",
            },
            {
              value: "《原神》夜兰角色PV——「天网恢恢」",
              time: "2022/5/25",
            },

            {
              value: "《原神》预下载即将开启",
              time: "2022/5/25",
            },
          ],
        },
        {
          label: "公告",
          order: "third",
          conent: [
            {
              value: "《原神》祈愿概率公示",
              time: "",
            },
            {
              value: "《原神》2.5版本「薄樱初绽时」更新通知",
              time: "2022/2/16",
            },
            {
              value: "《原神》2.5版本「薄樱初绽时」更新通知",
              time: "2022/2/14",
            },
            {
              value: "「流光飞彩」海灯节答谢邮件发放问题处理说明",
              time: "2022/2/09",
            },

            {
              value: "《原神》2.4版本「飞彩镌流年」更新说明",
              time: "2022/1/05",
            },
          ],
        },
        {
          label: "活动",
          order: "fourth",
          conent: [
            {
              value: "《原神》「神工天巧」活动即将开启",
              time: "2022/2/28",
            },
            {
              value: "「岩港奇珍行记」网页活动说明",
              time: "2020/11/22",
            },
            {
              value: "《原神》月夕祝颂-万份空月祝福相赠",
              time: "2020/10/01",
            },
            {
              value: "“在尘世的相逢”抖音《原神》公测主播招募",
              time: "2020/9/28",
            },

            {
              value: "“在尘世的相逢”快手直播《原神》主播招募活动开启",
              time: "2020/9/16",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.MainView {
  .main {
    z-index: 0;
    .el-image {
      padding: 0;
    }
  }
  .section {
    background: url("../../assets/img/sectionBg.jpg") no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 910px;
    color: #fff;
    .newsWords {
      margin-bottom: 100px;
      font-size: 40px;
    }
    .banner {
      display: flex;
      justify-content: center;
      .bannerNews {
        width: 600px;
        height: 360px;
        padding: 20px;
        background: rgba(38, 18, 12, 0.62);
        .el-tabs__item {
          color: white;
          font-size: 20px;
        }
        .is-active {
          color: #ffd49f;
        }
        li {
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          border-bottom: 2px solid rgba(255, 255, 255, 0.08);
          p {
            padding: 0 0 0 5px;
          }
        }
        li:hover {
          background: rgba(31, 14, 10, 0.62);
        }
        // 查看全部资讯
        .watchMore {
          line-height: 60px;
          text-align: right;
          p {
            display: inline-block;
            cursor: pointer;
          }
          p:hover {
            color: #ffd49f;
          }
          .el-icon-plus {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
