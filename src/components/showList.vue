<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    offset="300"
    error-text="请求失败，点击重新加载"
    class="showList"
  >
    // 循环列表数据
    <div v-for="(item, index) in list" :key="index">
      <div>{{ item }}循环出来的数据</div>
    </div>
  </van-list>
</template>

<style>
.showList {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
</style>

<script>
export default {
  data() {
    return {
      loading: false, // 是否处在加载状态
      finished: false, // 是否已加载完成
      error: false, // 是否加载失败
      list: [], // 列表
      page: 1, // 分页
      page_size: 10, // 每页条数
      total: 0, // 数据总条数
    };
  },
  methods: {
	// 获取列表数据方法
    async getList() {
      // 注意: 这个 informList 方法是请求后端接口获取数据的方法
      // 因为不同项目里请求方法封装的各有差异,所以在此不再展开细写
      let { data: res } = await informList({
          page: this.page,
          page_size: this.page_size,
      })
      if (res.length === 0) {  		// 判断获取数据条数若等于0
        this.list = [];				// 清空数组
        this.finished = true;		// 停止加载
      }
      // 若数据条数不等于0
      this.total = res.total;		// 给数据条数赋值
      this.list.push(...res.list)	// 将数据放入list中
      this.loading = false;			// 加载状态结束 
      // 如果list长度大于等于总数据条数,数据全部加载完成
      if (this.list.length >= res.total) {
          this.finished = true;		// 结束加载状态
      }
    },
	// 被 @load调用的方法
    onLoad() { // 若加载条到了底部
      let timer = setTimeout(() => {	// 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
        this.getList();					// 调用上面方法,请求数据
        this.page++;					// 分页数加一
        this.finished && clearTimeout(timer);//清除计时器
      }, 100);
    },
	// 加载失败调用方法
    onRefresh() {
      this.finished = false; 		// 清空列表数据
      this.loading = true; 			// 将 loading 设置为 true，表示处于加载状态
      this.page = 1;				// 分页数赋值为1
      this.list = [];				// 清空数组
      this.onLoad(); 				// 重新加载数据
    }
  }

};
</script>
