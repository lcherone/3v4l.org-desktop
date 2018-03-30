<template>
  <Header :style="{background: '#222', boxShadow: '0 0px 2px 2px rgba(0,0,0,.1)'}">
    <Menu mode="horizontal" theme="light" :active-name="activeName" @on-select="onSelect">
      <router-link :to="{ path: '/' }">
        <h1 class="layout-logo"></h1>
      </router-link>
      <div class="layout-nav">
        <MenuItem name="search">
          <Icon type="ios-search-strong"></Icon> Search
        </MenuItem>
        <MenuItem name="recent">
          <Icon type="code"></Icon> Recent
        </MenuItem>        
        <MenuItem name="about">
          <Icon type="ios-help-outline"></Icon> About
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
  export default {
    props: ['active'],
    data () {
      return {
        activeName: (this.active ? this.active : 'notes')
      }
    },
    methods: {
      onSelect (name) {
        this.activeName = name
        this.$router.push(name)
      }
    }
  }
</script>

<style scoped>
  .ivu-layout-header {
    padding: 0;
  }
  
  h1.layout-logo {
    float: left;
    width: 60px;
    height: 32px;
    overflow: hidden;
    color: transparent;
    margin: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAVBAMAAAAA8SWUAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFZXQtAP8AV1dX/wAA////aMUUHQAAAAF0Uk5TAEDm2GYAAABMSURBVCjPY2CgD2BxAQEHBiASFGCAMICCIERFFWAAlWBAV6GkQCUVSO6AqgAD7C4lWwXMHSg+ZKG2Cpg7oOoYGIwNoCpg4tRQQQ8AAJu+M69cndnbAAAAAElFTkSuQmCC) no-repeat center;
    transition: background-color 250ms ease-in;
  }

  .ivu-menu-light {
    background: #222;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    color: #fff;
  }

  .layout-nav a {
    display: block;
    height: 62px;
    width: inherit;
    color: #495060
  }

  .ivu-menu-horizontal {
    height: 65px;
    line-height: 62px
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px
  }

  .layout-nav{
    display:inline-block;
    margin: 0 auto;
    margin-right: 0px;
    float:right;
  }

</style>
