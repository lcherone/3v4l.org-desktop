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
            Codepad
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import MainHeader from './Layout/MainHeader'
  var request = require('request')

  export default {
    name: 'users-page',
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
    },
    mounted () {
      var formData = {
        // Pass a simple key-value pair
        version: '7.2.3',
        code: '<?php echo \'test\';'
      }
      request.post({
        url: 'https://3v4l.org/new',
        formData: formData,
        headers: {
          'accept': 'application/json',
          'accept-encoding': 'gzip, deflate, br',
          'origin': 'https://3v4l.org',
          'referer': 'https://3v4l.org/',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
        }
      }, function (err, httpResponse, body) {
        if (err) {
          return console.error('upload failed:', err)
        }
        console.log('Upload successful!  Server responded with:', body)
      })
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