<template>
  <div class="layout">
    <Layout>
      <main-header :active="$route.name"/>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem><Icon type="ios-home-outline"></Icon> Home</BreadcrumbItem>
        </Breadcrumb>

        <Card dis-hover style="margin-bottom:10px">
          <Input v-model="form.title" :maxlength="64" placeholder="Untitled..." pattern="^[\x20-\x7e\x80-\xff]*$" clearable style="width: 100%"></Input>
        </Card>

        <Card dis-hover :padding="0" style="margin-bottom:10px;">
          <editor v-model="form.code" @init="editorInit" @input="checkCodeInput" lang="php" theme="eclipse" width="100%" height="calc(100vh - 656px)" style="min-height:100px"></editor>

          <transition name="slide-fade">
            <div style="padding:5px" v-show="form.code !== form.default_code">
              <Button @click="api_save()" type="primary">eval();</Button>
              <Button @click="api_preview()">Preview</Button>
              <Select v-model="form.version" style="width:200px">
                <OptionGroup :label="index" v-for="(items, index) in php_versions">
                  <Option v-for="item in items" :value="item" :key="item">{{ item }}</Option>
                </OptionGroup>
              </Select>
            </div>
          </transition>
        </Card>

        <Tabs type="card" :animated="false" v-if="panel_state === 'preview'">
          <TabPane label="Preview" v-show="api_response.script && api_response.script.tabs.output">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-for="item in api_response.output">
                <dl>
                  <dt>Preview for {{ item.versions }}</dt>
                </dl>
                <pre>{{ item.output }}</pre>
              </div>
            </Card>
          </TabPane>
          <Spin size="large" fix v-if="spinShow"></Spin>
        </Tabs>

        <Tabs type="card" :animated="false" v-if="panel_state === 'save'" @on-click="tab_load">
          <TabPane label="Output" name="output" :disabled="Boolean(!api_response.script.tabs.output)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-for="item in api_response.output">
                <dl>
                  <dt>Output for {{ item.versions }}</dt>
                </dl>
                <pre>{{ item.output }}</pre>
              </div>
            </Card>
          </TabPane>
          <TabPane label="Performance" name="performance" :disabled="Boolean(!api_response.script.tabs.perf)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-html="tab_content.performance"></div>
            </Card>
          </TabPane>
          <TabPane label="VLD opcodes" name="vld" :disabled="Boolean(!api_response.script.tabs.vld)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-html="tab_content.vld"></div>
            </Card>
          </TabPane>
          <TabPane label="References" name="references" :disabled="Boolean(!api_response.script.tabs.ref)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-html="tab_content.references"></div>
            </Card>
          </TabPane>
          <TabPane label="Segmentation fault" name="segmentation-fault" :disabled="Boolean(!api_response.script.tabs.segfault)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-html="tab_content.segmentation"></div>
            </Card>
          </TabPane>
          <TabPane label="RFC branches" name="rfc-branches" :disabled="Boolean(!api_response.script.tabs.rfc)">
            <Card class="tabbed-card" style="min-height:50px" dis-hover>
              <div v-html="tab_content.rfc"></div>
            </Card>
          </TabPane>
          <Spin size="large" fix v-if="spinShow"></Spin>
        </Tabs>

        <Card dis-hover v-if="panel_state === 'intro'">
          <Row :gutter="16">
            <Col span="12">
              <h2>Welcome to the best online PHP shell</h2>
              <p>
                3v4l.org (leetspeak for eval) is an online shell that allows you to run your code on my server. 
                I compiled more than 200 different PHP versions (every version released since 4.3.0) plus HHVM 
                for you to use. For every script you submit, this site tells you:
              </p>

              <ul class="ul">
                <li>Output from all released PHP and HHVM versions</li>
                <li>Performance (time and memory) of every version</li>
                <li><a @click="openExternal('http://derickrethans.nl/projects.html#vld')">VLD</a> opcode output</li>
                <li>Contextual links to documentation and php sourcecode</li>
                <li>Output from upcoming alpha, beta &amp; release-candidates</li>
                <li>Output from popular RFC Branches</li>
              </ul>

              <p>To keep this site running I spend ~ $30 monthly; want to help out? 
                <a @click="openExternal('https://3v4l.org/sponsor')">Become a sponsor</a> to get your name added 
                to the list of supporters. For updates, follow me on Twitter 
                <a @click="openExternal('https://twitter.com/3v4l_org')">@3v4l_org</a>.
                <br><br>Have fun!<br>Sjon
              </p>
            </Col>
            <Col span="12">
              <h2>PHP 7.1 gotcha's, found through <a @click="openExternal('https://3v4l.org/bughunt')">/bughunt</a>
              </h2>
              <ul class="ul">
                <li><a @click="openExternal('https://3v4l.org/6lfO5')">DateTime now supports microseconds</a></li>
                <li><a @click="openExternal('https://3v4l.org/amB0d')">Unserialize notices get printed before instead of after __destruct runs</a></li>
                <li><a @click="openExternal('https://3v4l.org/0Jeva')">Casting "NAN", "INF" and "infinity" no longer works</a></li>
                <li><a @click="openExternal('https://3v4l.org/QFDDc#output')">var_dump recursion detection works like it did before php7</a></li>
                <li><a @click="openExternal('https://3v4l.org/13Srm')">JSON_PRETTY_PRINT uses less whitespace for indenting</a></li>
                <li><a @click="openExternal('https://3v4l.org/XQOQD')">DateInterval can no longer be accessed as array</a></li>
              </ul>
              <h2>Popular</h2>
              <ul class="ul">
                <li><a @click="openExternal('https://3v4l.org/5Aimn')">/5Aimn</a></li>
                <li><a @click="openExternal('https://3v4l.org/sponsor')">/sponsor</a></li>
                <li><a @click="openExternal('https://3v4l.org/Hse6E')">/Hse6E</a></li>
                <li><a @click="openExternal('https://3v4l.org/FjUb7')">/FjUb7</a></li>
                <li><a @click="openExternal('https://3v4l.org/dicJv')">/dicJv</a></li>
                <li><a @click="openExternal('https://3v4l.org/9dLi7')">/9dLi7</a></li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Content>
      <Footer class="layout-footer-center"></Footer>
    </Layout>
  </div>
</template>

<script>
  import MainHeader from './Layout/MainHeader'
  import http from '../mixins/http.js'
  const cheerio = require('cheerio')
  const phpVersions = require('../mixins/php_versions.json')
  const defaultCode = '<?php\n'

  // import ElectronStore from 'electron-store'
  /*
  const storage = new ElectronStore({
    cwd: '3v4l-scripts'
  })
  */

  export default {
    name: 'landing-page',
    mixins: [http],
    components: {
      MainHeader,
      editor: require('vue2-ace-editor-electron')
    },
    data () {
      return {
        spinShow: false,
        panel_state: 'intro',
        form: {
          default_code: defaultCode,
          title: '',
          code: defaultCode,
          version: '7.2.3',
          archived: '0'
        },
        php_versions: phpVersions,
        api_response: {
          script: {
            tabs: {}
          }
        },
        tab_content: {
          performance: '',
          references: '',
          segmentation: '',
          vld: '',
          rfc: ''
        },
        endpoint: ''
      }
    },
    methods: {
      tab_load (name) {
        this.spinShow = true
        if (name === 'output') {
          this.spinShow = false
        } else if (name === 'performance') {
          if (this.tab_content.performance === '') {
            this.get(this.endpoint + '/perf', (err, httpResponse, body) => {
              if (err) {
                this.spinShow = false
                this.tab_content.performance = 'Error fetching perfomance data.'
                return console.error('API ERROR (SCRAPE PERFORMANCE):', err)
              }
              var $ = cheerio.load(body)
              this.tab_content.performance = $('#tab').html()
              this.spinShow = false
            })
          } else {
            this.spinShow = false
          }
        } else if (name === 'vld') {
          if (this.tab_content.vld === '') {
            this.get(this.endpoint + '/vld', (err, httpResponse, body) => {
              if (err) {
                this.spinShow = false
                this.tab_content.performance = 'Error fetching VLD data.'
                return console.error('API ERROR (SCRAPE VLD):', err)
              }
              var $ = cheerio.load(body)
              this.tab_content.vld = $('#tab').html()
              this.spinShow = false
            })
          } else {
            this.spinShow = false
          }
        } else if (name === 'references') {
          if (this.tab_content.references === '') {
            this.get(this.endpoint + '/refs', (err, httpResponse, body) => {
              if (err) {
                this.spinShow = false
                this.tab_content.performance = 'Error fetching references data.'
                return console.error('API ERROR (SCRAPE VLD):', err)
              }
              var $ = cheerio.load(body)
              this.tab_content.references = $('#tab').html()
              this.spinShow = false
            })
          } else {
            this.spinShow = false
          }
        } else if (name === 'segmentation-fault') {
          if (this.tab_content.segmentation === '') {
            this.get(this.endpoint + '/segmentation', (err, httpResponse, body) => {
              if (err) {
                this.spinShow = false
                this.tab_content.performance = 'Error fetching segmentation data.'
                return console.error('API ERROR (SCRAPE SEGMENTATION):', err)
              }
              var $ = cheerio.load(body)
              this.tab_content.segmentation = $('#tab').html()
              this.spinShow = false
            })
          } else {
            this.spinShow = false
          }
        } else if (name === 'rfc-branches') {
          if (this.tab_content.rfc === '') {
            this.get(this.endpoint + '/rfc', (err, httpResponse, body) => {
              if (err) {
                this.spinShow = false
                this.tab_content.performance = 'Error fetching rfc data.'
                return console.error('API ERROR (SCRAPE RFC):', err)
              }
              var $ = cheerio.load(body)
              this.tab_content.rfc = $('#tab').html()
              this.spinShow = false
            })
          } else {
            this.spinShow = false
          }
        }
      },
      checkCodeInput () {
        if (this.form.code.trim() === '') {
          this.form.code = this.form.default_code
        }
      },
      openExternal (link) {
        this.$electron.shell.openExternal(link)
      },
      editorInit () {
        require('brace/mode/php')
        require('brace/theme/eclipse')
      },
      api_preview () {
        this.spinShow = true
        this.panel_state = 'preview'
        this.post_json({
          version: this.form.version,
          code: this.form.code.trim()
        }, (err, httpResponse, body) => {
          if (err) {
            return console.error('API ERROR (POST PREVIEW):', err)
          }
          this.api_response = JSON.parse(body)
          this.spinShow = false
        })
      },
      api_save () {
        this.spinShow = true
        this.panel_state = 'save'
        this.post_form({
          title: this.form.title,
          code: this.form.code.trim()
        }, (err, httpResponse, body) => {
          if (err) {
            this.spinShow = false
            return console.error('API ERROR (POST SAVE):', err)
          }
          this.endpoint = httpResponse.headers.location
          // start polling to fetch result
          if (httpResponse.statusCode === 302) {
            var pollCount = 0
            var pollId = setInterval(() => {
              this.get_json(httpResponse.headers.location, (err, httpResponse, body) => {
                this.spinShow = false
                if (err) {
                  window.clearInterval(pollId)
                  return console.error('API ERROR (GET RESULT):', err)
                }
                this.api_response = JSON.parse(body)
                // is done
                if (this.api_response.script.state === 'done') {
                  console.log('POLL EXIT:', 'Polling stopped, done state.')
                  window.clearInterval(pollId)
                }
              })
              // prevent over polling
              if (++pollCount === 50) {
                console.error('POLL EXIT:', 'Polling stopped, max 50 iterations.')
                window.clearInterval(pollId)
              }
            }, 1500)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>