<template>
  <view>
    <!-- 搜索框开始 -->
    <navigator url="../search/main" hover-class="none" class="search">
      <view class="search-input">
        <icon type="search" size="32rpx" class="search-icon"></icon>搜索
      </view>
    </navigator>
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
          <image class="cate-img" src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/icon_index_nav_4@2x.png"> </image>
      </block>
    </view>
    <!-- 首页分类结束 -->

    <!-- 首页楼层开始 -->
    <view class="divide"></view>
    <view class="floor">
      <view class="floor-title">
        <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_title.png"></image>
      </view>
      <view class="floor-body">
        <view class="floor-body-left">
          <image
            src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_1@2x.png"
            >
          </image>
        </view>
        <view class="floor-body-right">
           <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_2@2x.png"></image>
          <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_3@2x.png"></image>
          <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_4@2x.png"></image>
          <image src="https://lg-igjc8p1o-1256763078.cos.ap-shanghai.myqcloud.com/upload/pic_floor01_5@2x.png"></image>
        </view>
      </view>
    </view>
    <!-- 首页楼层结束 -->
  </view>
</template>

<script>
export default {
  data() {
    return{
      imgUrls:[],
      cate:[1,2,3,4]
    }
  },
  // 小程序加载的时候触发
  onLoad(){
    // 请求数据
    wx.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata', //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.imgUrls = res.data.message;
      },
    });
  }
};
</script>

<style>
/* 头部搜索 */
.search {
  padding: 20rpx;
  background-color: #eb4450;
}
.search-input {
  height: 60rpx;
  background: #fff;
  border-radius: 12rpx;
  color: #333;
  font-size: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon {
  margin-right: 16rpx;
}
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
