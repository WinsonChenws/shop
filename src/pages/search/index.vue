<template>
 
  <view>
      <!-- 1.0 搜索分区 -->
    <view class="search-wrapper">
      <view class="search-input">
        <icon type="search" size="32rpx"></icon>
        <input type="text" 
          placeholder="请输入你想要的商品"
          :value="keyword" 
          v-model="inputVal" 
          @confirm="inputSumbit"
          @input="inputHandle"
          />
      </view>
      <button class="cancel" size="mini" v-show="inputVal" @tap="clearInput">取消</button>
    </view>

    <!-- 搜索历史 -->
    <view class="history-title">
      <text>历史搜索</text>
      <icon type="clear" size="30rpx"></icon>
    </view>

    <!-- 历史列表 -->
    <view class="history-list">
        历史
    </view>

    <!-- 搜索提示 -->
    <view class="search-tips">
      <view class="search-tips-item">
        提示
      </view>
    </view>

  </view>
</template>

<script>
export default {
  data(){
    return{
      keyword:"",
    }
  },
  onLoad(query){
    this.keyword = query.keyword;
  }
  
}
</script>
<style lang="scss">
// 1.0 搜索分区
.search-wrapper{
    background: #eee;
    padding:20rpx;
    display: flex;
    .search-input{
        background: #fff;
        display: flex;
        align-items: center;
        height: 60rpx;
        flex:1;

        icon{
            margin:0 10px;
        }

        input{
            flex:1;
            font-size: 14px;
            padding-right:20rpx;
        }
    }

    .cancel{
        width:160rpx;
        height:60rpx;
        padding:0;
        line-height: 58rpx;
        margin-left:20rpx;
    }
}
// 2.0.1 搜索历史标题
.history-title{
    padding:20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
// 2.0.2 历史列表
.history-list{
    padding:10rpx;
    &-item{
        display: inline-block;
        padding:0 20rpx;
        line-height: 2;
        background:#eee;
        margin:10rpx;
    }
}
// 3.0 搜索提示
.search-tips{
  position: fixed;
  left:0;
  right:0;
  top:98rpx;
  bottom:0;
  background-color: #eee;
    &-item{
      border-bottom:1rpx solid #ccc;
      padding: 20rpx;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
</style>

