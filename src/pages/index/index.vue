<template>
  <view>
    <!-- 搜索框开始 -->
      <search></search>
    <!-- 搜索框结束 -->
    <!-- 轮播图开始 -->
    <swiper
      indicator-dots
      autoplay
      circular
      interval="2000"
      indicator-color="rgba(255,255,255,0.3)"
      indicator-active-color="rgba(255,255,255,1)"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item.image_src" class="slide-image" mode="aspectfill"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 轮播图结束 huiling678837*-->

    <!-- 首页分类开始 -->
     <view class="cate">
      <block
        v-for="(item,index) in cate"
        :key="index">
          <image class="cate-img" :src="item.image_src"> </image>
      </block>
    </view>
    <!-- 首页分类结束 -->

    <!-- 首页楼层开始 -->
    <block v-for="(item,index) in floordata" :key="index">
    <view class="divide"></view>
    <view class="floor">
      <view class="floor-title">
        <image :src="item.floor_title.image_src"></image>
      </view>
      <view class="floor-body">
        <view class="floor-body-left">
          <image
            :src="item.product_list[0].image_src"
            >
          </image>
        </view>
        <view class="floor-body-right">
           <block v-for="(subitem,subindex) in item.product_list" :key="subindex">
           <image v-if="subindex !==0 " :src="item.product_list[subindex].image_src"></image>
           </block>
        </view>
      </view>
    </view>
    </block>
    <!-- 首页楼层结束 -->
  </view>
</template>

<script>
  // 引入组件
import Search from "../../components/search.vue";
export default {
  data() {
    return{
      imgUrls:[],
      cate:[],
      floordata:[]
    }
  },
  components:{
    Search
  },
  // 小程序加载的时候触发
  onLoad(){
    // 请求轮播图数据
    wx.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata', //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.imgUrls = res.data.message;
      },
    }),
    //分类入口数据
     wx.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems', //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.cate = res.data.message;
      },
    })
     //分类图片展示
     wx.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata', //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.floordata = res.data.message;
      },
    })
  }
};
</script>

<style>

/* 轮播图 */
swiper{
  height: 340rpx;
}
.slide-image{
  width: 750rpx;
  height: 340rpx;
}
/* 分类 */
.cate{
  height: 180rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.cate-img{
  height: 140rpx;
  width: 128rpx;
}
.divide{
  height: 20rpx;
  background-color: #f4f4f4;
}
.floor-title image{
  width: 750rpx;
  height: 59rpx;
  background-color: #f4f4f4;
}
.floor-body{
  display: flex;
  padding: 20rpx 0rpx 20rpx 20rpx;
}
.floor-body-left image {
  width: 232rpx;
  height: 386rpx;
  margin-right: 10rpx;
}
.floor-body-right image{
  width: 232rpx;
  height: 188rpx;
  margin-right: 10rpx;
}
</style>
