<template>
	<div class="wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <section class="content">
        <nuxt/>
      </section>
    </div>
    <app-footer></app-footer>
	</div>
</template>

<script>

  import Sidebar from '@/components/layouts/sidebar.vue';
  import Header from '@/components/layouts/header.vue';
  import Footer from '@/components/layouts/footer.vue';

  export default{
    components: {
      'app-sidebar': Sidebar,
      'app-header': Header,
      'app-footer': Footer,
    },

    head: {
      bodyAttrs: {
        class: 'hold-transition sidebar-mini layout-fixed'
      }
    }
  }
</script>
