<template>
  <div>
    <div class="login-logo">
      <a>NAMA APLIKASI</a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Masukan Nama Pengguna dan Kata Sandi</p>
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" v-model="username">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember">
                <label for="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <a class="btn btn-primary btn-block" @click="onSubmit()">Log In</a>
            </div>
            <!-- /.col -->
          </div>
        </form>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Vue from 'vue';

export default {
  auth: false,
  layout: 'login/main',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      let url = "http://192.168.1.8/laravel-7/public/api/site/login";

      await axios.post(url,{
        username: this.username,
        password: this.password,
      }).then(response => {
          if(response.data.status == true) {
            this.$auth.loginWith('local').then((data) => {
              this.$router.push('/')
            })
          }
      }).catch(error => {
          console.log(error.response);
      });
    }
  }
}
</script>
