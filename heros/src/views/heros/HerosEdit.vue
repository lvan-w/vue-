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
        <input type="radio" v-model='gender' name="gender" value="男">男 <input type="radio" v-model='gender' name="gender" value="女">女
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// 引入axios
// import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      name: '',
      gender: ''
    };
  },
  methods: {
    submit() {
      // 将新的数据提交到服务器
      this.$http.patch('/heroes/' + this.id, {
        name: this.name,
        gender: this.gender
      }).then(res => {
        var {status} = res;
        if (status === 200) {
          alert('修改成功');
          this.$router.push({name: 'root'});
        }
      });
    }
  },
  // 当打开修改页面时需要先将要修改数据的id得到，根据id去服务器中找到对应的数据，并且将数据渲染到面巾上
  created() {
    // 1.0 得到id
    this.id = this.$route.params.id;
    // 2.0 根据id得到数据
    this.$http.get('/heroes/' + this.id)
      .then(res => {
        var {status, data} = res;
        if (status === 200) {
          // data: {name: '', gender: ''}
          this.name = data.name;
          this.gender = data.gender;
        }
      });
  }
};
</script>

<style>

</style>
