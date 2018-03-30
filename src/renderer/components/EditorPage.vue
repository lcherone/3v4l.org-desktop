<template>
  <div class="layout">
    <Layout>
      <main-header :active="$route.name"/>

      <Content :style="{padding: '0 20px', minHeight: 'calc(100vh - 135px)'}">
        <div style="float:right; margin-top:20px">
          <Button size="small" @click="setAction('delete')"><Icon type="arrow-return-left"></Icon> Cancel</Button>
          <Button size="small" @click="setAction('delete')"><Icon type="ios-copy-outline"></Icon> Clone</Button>
          <Button type="error" size="small" @click="setAction('delete')"><Icon type="close"></Icon> Delete</Button>
          <Button type="success" size="small" @click="setAction('save')"><Icon type="checkmark"></Icon> Save</Button>
          <Button type="success" size="small" @click="setAction('new')"><Icon type="plus"></Icon> New</Button>
          <Button type="primary" size="small" @click="setClipboard"><Icon type="clipboard"></Icon> Copy to clipboard</Button>
          <Button type="info" size="small" @click="setAction('markdown')" v-if="action != 'markdown'"><Icon type="ios-compose-outline"></Icon> Markdown</Button>
          <Button type="info" size="small" @click="setAction('editor')" v-if="action == 'markdown'"><Icon type="ios-compose"></Icon> Editor</Button>
        </div>
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/editor">Editor</BreadcrumbItem>
          <BreadcrumbItem v-if="action == 'edit'">Edit</BreadcrumbItem>
          <BreadcrumbItem v-if="action == 'new'">New</BreadcrumbItem>
        </Breadcrumb>
        <Card dis-hover>
          <Row :gutter="16">
            <Col span="24" v-if="action != 'markdown'">
              <vue-editor v-model="content" v-if="action != 'markdown'" :editorToolbar="customToolbar"></vue-editor>
            </Col>
            <Col span="24" v-if="action == 'markdown'">
              <Input v-model="content" type="textarea" placeholder="Enter your text as markdown or HTML it will be converted." v-if="action == 'markdown'"></Input>
            </Col>
          </Row>
        </Card>
      </Content>

      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import MainHeader from './Layout/MainHeader'

  // TurndownService (converts html to markdown)
  const TurndownService = require('turndown')
  const turndownService = new TurndownService()
  turndownService.addRule('pre', {
    filter: ['pre'],
    replacement: function (content) {
      var lines = content.split('\n')
      for (var i = 0; i < lines.length; i++) {
        lines[i] = '    ' + lines[i] + '\n'
      }
      return lines.join('')
    }
  })

  // marked (converts markdown to html)
  const markedUp = require('marked')
  markedUp.setOptions({
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  // tidyMarkdown
  const tidyMarkdown = require('tidy-markdown')

  // clipboard
  const {clipboard} = require('electron')

  // tool bar settings
  const toolbar = [
    [{ 'header': [ false, 1, 2, 3, 4, 5, 6 ] }],
    ['bold', 'italic'],
    ['blockquote', 'code-block'],
    [{'list': 'ordered'}, { 'list': 'bullet' }],
    ['link'],
    ['clean']
  ]

  export default {
    name: 'editor-page',
    components: { MainHeader, VueEditor },
    data () {
      return {
        action: '',
        content: '',
        customToolbar: toolbar
      }
    },
    computed: {},
    methods: {
      setClipboard () {
        this.$Message.info('Copied to clipboard')
        clipboard.writeText(turndownService.turndown(this.content))
      },
      setAction (type) {
        // switching to editor, convert to html
        if (type === 'editor') {
          this.content = markedUp(this.content)
        } else {
          // switching to markdown, convert to markdown
          this.content = tidyMarkdown(turndownService.turndown(this.content))
        }

        // prevent empty/new line content
        if (this.content === '\n') {
          this.content = ''
        }

        this.action = type
      },
      show () {
        this.visible = true
      }
    }
  }
</script>

<style>
  textarea.ivu-input {
    height: calc(100vh - 230px) !important;
    border-radius: 0px !important;
    border: 1px solid #ccc !important;
  }

  .ql-editor {
    height: calc(100vh - 279px)!important
  }

  pre {
    overflow: auto;
    word-wrap: normal;
    white-space: pre;
  }

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