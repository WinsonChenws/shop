<template>
 <!-- 搜索框 -->
   <navigator url="../search/main" hover-class="none" class="search">
      <view class="search-input">
        <icon type="search" size="32rpx" class="search-icon"></icon>搜索
      </view>
    </navigator>
</template>

<script>
export default {
  data(){
    
  }
  
}
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
</style>
