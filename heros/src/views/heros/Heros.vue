<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" :to="{'name': 'herosAdd'}">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>gender</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="javascript:void(0);" @click="edit(item.id)">edit</a>
              <a href="javascript:;" @click="del(item.id)">del</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// // 引入axIos
// import Axios from 'axios';

export default {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    edit(id) {
      // 跳转一个修改路由中
      this.$router.push('/heros/Edit/' + id);
      // this.$router.push({name: 'HerosEdit', params: {id: id}});
    },
    del(id) {
      if (confirm('您确定删除吗？')) {
        // 直接删除数据
        this.$http.delete('/heroes/' + id)
          .then(res => {
            var { status } = res;
            if (status === 200) {
              // 直接将数据源更新
              this.getDataList();
            }
          });
      }
    },
    // 得到所有的数据
    getDataList() {
      // 通过axios发送请求到服务器拿到数据
      this.$http.get('/heroes')
        .then(res => {
          var { status, data } = res;
          if (status === 200) {
            // 将数据赋值给 dataList
            this.dataList = data;
          }
        });
    }
  },
  // 请求数据：
  created() {
    this.getDataList();
    this.$http2.get('http://localhost:4000/users')
      .then(res => {
        console.log(res.data);
      });
  }
};
</script>

<style>

</style>
