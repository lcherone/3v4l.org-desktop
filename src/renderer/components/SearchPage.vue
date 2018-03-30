<template>
  <div class="layout">
    <Layout>
      <main-header :active="$route.name"/>
      
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card dis-hover>
          <div style="min-height: calc(100vh - 230px);">
            Links
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center"></Footer>
    </Layout>
  </div>
</template>

<script>
  import MainHeader from './Layout/MainHeader'

  export default {
    name: 'links-page',
    components: { MainHeader },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      onSelect (name) {
        this.$router.push(name)
      },
      show () {
        this.visible = true
      }
    }
  }
</script>

<style scoped>
  
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .layout-footer-center {
    text-align: center;
  }
</style>