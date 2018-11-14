<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" v-model='name' class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label><br/>
        <input type="radio" v-model='gender' name="gender" value="男" checked>男 <input type="radio" v-model='gender' name="gender" value="女">女
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// // 引入axios
// import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      gender: ''
    };
  },
  methods: {
    // 提交修改参数
    submit() {
      // 通过axios将新增的数据提交到服务器
      this.$http.post('/heroes', {
        name: this.name,
        gender: this.gender
      }).then(res => {
        var { status } = res;
        if (status === 201) {
          alert('新增成功');
          // 跳转回首页
          // this.$router.push('/');
          this.$router.push({ name: 'root' });
        }
      });
    }
  }
};
</script>

<style>

</style>
