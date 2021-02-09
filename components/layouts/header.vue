<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <NuxtLink
          class="nav-link"
          to="/"
        >
          Home
        </NuxtLink>
      </li>

      <li class="nav-item d-none d-sm-inline-block">
        <NuxtLink
          class="nav-link"
          to="/login"
        >
          Login
        </NuxtLink>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)" @click="onLogout()">
          <i class="fas fa-power-off"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
  export default{
    methods: {
      async onLogout() {
        await this.$auth.logout()
        this.$router.push('/login')
      },
    }
  }
</script>
