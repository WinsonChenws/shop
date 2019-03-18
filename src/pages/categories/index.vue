<template>
  <view>
    <!-- 搜索组件开始 -->
    <Search></Search>
    <!-- 搜索组件结束 -->
    <!-- 分类内容开始 -->
    <view>
      <view class="cata">
        <!-- 分类左边开始 -->
        <scroll-view scroll-y class="cata-left">
          <block v-for="(item,index) in cate" :key="index"
            >
          <view 
          class="item" :class="{ active:index ===tabIndex}" @tap="changTabs(index)" 
          >
          {{item.cat_name}}
          </view>
          </block>
        </scroll-view>

        <!-- 分类左边结束 -->
        <!-- 分类右边开始 -->
         <!-- 4.0 分类右边 -->
      <scroll-view scroll-y class="cata-right">
        <block v-for="(item,index) in rightData" :key="index">
         
        <view class="cata-right-title">
          {{item.cat_name}}
        </view>
        <view class="cate-right-list">
          <block v-for="(subitem,subindex) in item.children" :key="subindex">
            <view class="cate-right-list-item" @tap="gotoGoodsList(subitem.cat_name)">
              <image :src="subitem.cat_icon">
              </image>
              <view>{{ subitem.cat_name }}</view>
            </view>
          </block>
        </view>
</block>
      </scroll-view>
        <!-- 分类右边结束 -->
      </view>
    </view>
    <!-- 分类内容结束 -->
  </view>
</template>

<script>
import Search from "../../components/Search.vue";
import request from "../../utils/request.js"
export default {
  data() {
    return {
      tabIndex :0,
      cate:[],
      rightData:[]
      
    }
  },
  components: {
    Search
  },
  onLoad(){
    // 加载数据优化
    wx.showLoading({
      title: '等一会就可以了', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
    });
    request("https://www.zhengzhicheng.cn/api/public/v1/categories").then((res)=>{
      console.log(res);
      this.cate = res.data.message;
      this.rightData = this.cate[this.tabIndex].children;
      wx.hideLoading();
    })
  },
  methods:{
    changTabs(index){
      this.tabIndex = index;
       this.rightData = [];
       setTimeout(() => {
         this.rightData = this.cate[this.tabIndex].children;
       }, 1);
    },
    gotoGoodsList(name){
      wx.navigateTo({ url: '/pages/goods_list/main' + '?keyword=' + name });
    }
  }
};
</script>

<style>
.cata{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 100rpx;
  bottom: 0;
}
.cata-left{
  width: 200rpx;
  /* background-color: blue; */
  height: 100%;
  flex-shrink: 0;
}
.cata-left .item {
  line-height: 100rpx;
  text-align: center;
  border-bottom: 1rpx solid #999;
  position: relative;
}
.cata-left .item.active{
  background-color: #fff;
  color:red;
}
.cata-left .item.active::before{
  content: "";
  position: absolute;
  
  width: 4rpx;
  background-color: red;
  left: 0;
  top:10rpx;
  bottom:10rpx;
}
.cata-right{
  flex: 1;
  height: 100%;
}
.cata-right-title{
  text-align: center;
  padding: 40rpx 0;
}
.cata-right-title::after,
.cata-right-title::before{
  content: "/";
  color:#ccc;
  margin: 0 20rpx;
}
.cate-right-list{
  display: flex;
  flex-wrap: wrap;
}
.cate-right-list-item{
  width: 33.33%;
  font-size: 30rpx;
  text-align: center;
  padding: 20rpx 0;
}
.cate-right-list-item image{
  width: 120rpx;
  height: 120rpx;
}
</style>
