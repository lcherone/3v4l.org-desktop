<template>
  <div class="layout">
    <Layout>
      <main-header :active="$route.name"/>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem to="{ path: '/' }"><Icon type="ios-home-outline"></Icon> Home</BreadcrumbItem>
          <BreadcrumbItem><Icon type="ios-help-outline"></Icon> About</BreadcrumbItem>
        </Breadcrumb>
        <Card dis-hover>
          <div style="min-height: calc(100vh - 230px);">
            <Row :gutter="16">
              <Col span="12">
                <h2>Introduction</h2>
                <p>I have been programming in PHP since 2002, and as <a href="https://duckduckgo.com/?q=site%3Abugs.php.net+sjon" target="_blank" rel="noopener">me</a> and <a href="https://duckduckgo.com/?q=site%3Abugs.php.net+%22react+dot%22" target="_blank" rel="noopener">my collegues</a> used more advanced features we noticed PHP's behaviour would sometimes change without any reference in the changelog. An example of this was <a href="https://bugs.php.net/bug.php?id=63512" target="_blank" rel="noopener">this parse_ini bug</a>, which was an example where we needed to demonstrate the variation of results over time and <i>3v4l.org</i> showed a clear advantage.</p>
                <p>Since 2012 I have provided vanilla PHP binaries that make it simpler to demonstrate issues that would otherwise be harder to reproduce, and cumbersome to compare to previous version. Traffic has steadily been growing as more developers found this site to be a helpful daily tool, as the following sessions-graph shows:<br><br><img src="https://3v4l.org/s/ga-sessions.png" width="150" height="18"> - we've served 850k sessions to 500k users.</p>
                <h2>Statistics</h2>
                <p>I started in april 2012 and have been adding features ever since. If you like numbers, here are a some from the database:</p>
                <ul class="ul">
                  <li><a href="versions">Versions</a> (including helpers): <b>266</b></li>
                  <li>Scripts in database: <b>1,839,920</b></li>
                  <li>Submissions (new + existing): <b>1,998,990</b></li>
                  <li>Opcodes performed by scripts: <b>21,164,100</b></li>
                  <li>Results: <b>256,262,000</b></li>
                  <li>Registered users: <b>1</b></li>
                </ul>
                <h2>Historic events</h2>
                <p>I have been adding features ever since I started. Here is a list with some major changes I made over the years:</p>
                <ul class="ul">
                  <li><b>May 2016</b> - Existing scripts now maintain they original date/time (eg. <i>date('Y');</i> always outputs <b>2014</b>). This results in better <a href="/bughunt">/bughunt</a> output</li>
                  <li><b>Mar 2016</b> - All binaries were recompiled so I could add the <i>intl</i>, <i>bcmath</i>, <i>gmp</i>, <i>iconv</i>, <i>mcrypt</i> and <i>opcache</i> extensions</li>
                  <li><b>Sep 2015</b> - Scripts no longer run in all versions by default, plus we also had a minor redesign for our first-ever logo.</li>
                  <li><b>Apr 2015</b> - New layout, added top-menu which allowed me to introduce links to /last and /search.</li>
                  <li><b>Nov 2014</b> - Unfortunately LRTEditor had a nasty bug I couldn't easily fix, so I switched to Cloud9's ACE.</li>
                  <li><b>May 2014</b> - added HHVM. This was actually a huge change, the chroot went from ~ 250 MiB to ~ 1.5 GiB due to the number of dependencies. It fortunately turned out to be a popular feature.</li>
                  <li><b>Aug 2013</b> - replaced CodeMirror with my own <a href="http://sjonhortensius.github.io/LRTEditor/" target="_blank" rel="noopener">LRTEditor</a>.</li>
                  <li><b>Jul 2013</b> - moved backend from c+sqlite to go+postgresql</li>
                  <li><b>May 2013</b> - added links to manual and php-source-code</li>
                  <li><b>Nov 2012</b> - added vld support and better layout, plus I also added the performance overview</li>
                  <li><b>Oct 2012</b> - the site got some great exposure, including <a href="https://twitter.com/i0n1c/status/258688195158487040" target="_blank" rel="noopener">one of my favorite replies</a>.</li>
                  <li><b>Apr 2012</b> - launch</li>
                </ul>
                <h2>Pro-tricks</h2>
                <p>There are a few tricks you might appreciate; did you know you can submit a script using the keyboard shortcut <i>ctrl + enter</i>? Did you ever want to copy a script to run it yourself? You can simply download it, use:</p>
                <pre>$ curl -H Accept:text/plain https://3v4l.org/uNUDC</pre>
                <p>Did you ever complain there is no API? Well, REST is an API too, and I offer json output for most pages:</p>
                <pre>$ curl -H Accept:application/json https://3v4l.org/uNUDC</pre>
                <h2>Links</h2>
                <ul class="ul">
                  <li>Donate <a href="bitcoin://1Hk7gntGcQQp6FUoqLdCqKDwoMmi62o7NQ?amount=0.1&amp;label=3v4l.org%20support">bitcoins</a> or use <a href="https://www.paypal.me/3v4l" target="_blank" rel="noopener">Paypal</a> for financial support.</li>
                  <li><a href="https://twitter.com/3v4l_org" target="_blank" rel="noopener">Twitter</a> for announcements.</li>
                  <li><a href="http://3v4l.uservoice.com/forums/219058-general" target="_blank" rel="noopener">Uservoice</a> for bugs &amp; features.</li>
                  <li><a href="mailto:root@3v4l.org">E-mail</a> if the above channels don't suffice.</li>
                </ul>

              </Col>
              <Col span="12">
                <h2>Technology</h2>
                <h3>Backend</h3>
                <p>This site started out on a server with 256 MiB memory, which was enough to run one script at the time, as well as the site itself. However, when I added HHVM, it needed a lot more memory, so I upgraded to a 1 GiB machine. Because of dropping prices, the site current runs on a 4 GiB machine.</p>
                <p>I use a setup where scripts are executed in a small virtual machine. For security reasons this machine has no network and only a minimal filesystem. Scripts are executed by a daemon (written in <a href="http://golang.org/" target="_blank" rel="noopener">Golang</a>) and results (with statistics) are reported to a <a href="http://www.postgresql.org/" target="_blank" rel="noopener">PostgreSQL</a> database. All results are stored and used to provide averages for the performance overview.</p>
                <p>All binaries are compiled using the same settings; they are stripped and then compiled with <a href="http://upx.sourceforge.net/" target="_blank" rel="noopener">upx</a> to keep their filesize down.</p>
                <p>I use the following php.ini settings for the scripts:</p>
                <pre>[PHP]<br>; ini_set should be in here too if you're concerned about security<br>disable_functions = pcntl_fork,phpinfo<br>max_execution_time = 3<br>memory_limit = 64M<br>enable_dl = Off<br><br>; for consistency of older versions<br>allow_call_time_pass_reference = Off<br>html_errors = Off<br><br>; show all errors by default, if we'd lower this in the script we'll miss some parser notices<br>error_reporting = -1<br>display_errors = On<br>display_startup_errors = On<br>log_errors = Off<br>report_memleaks = On<br><br>[Date]<br>date.timezone = Europe/Amsterdam<br></pre>
                <p>When I started in 2012, this site was nothing more than a small bash script that looped through all installed PHP binaries and stored the output in <i>/out/</i>. For fun; here is the source-code of the script that I started with:</p>
                <pre>#!/bin/bash<br>ulimit -f 64 -m 64 -t 2 -u 128<br><br>[[ ! -d /out/$1/ ]] &amp;&amp; mkdir /out/$1/ || chmod u+w /out/$1/<br><br>for bin in /bin/php-*<br>do<br>       echo $bin - $1<br>       nice -n 15 sudo -u nobody $bin -c /etc/ -q "/in/$1" &amp;&gt;/out/$1/${bin##*-} &amp; PID=$!<br>       ( sleep 3.1; kill -9 $PID 2&gt;/dev/null ) &amp;<br>       wait $PID<br>       ex=$?<br><br>       sf=/out/$1/${bin##*-}-exit<br>       [[ $ex -eq 0 &amp;&amp; -f $sf ]] &amp;&amp; rm $sf<br>       [[ $ex -ne 0 ]] &amp;&amp; echo -n $ex &gt; $sf<br>done<br><br>chmod u-w /out/$1/</pre>
                <p>Because of the amount of files this generated (which did not play well with the average filesystem block-size) I replaced this with a SQLite based database with an inotify-based script that picked up changes in /out/ and imported them into the database.</p>
                <p>For simplified connectivity to the database I replaced this with a C-based binary in 2013; and that was replaced by a Go-based program that's still in use today.</p>
                <h3>Frontend</h3>
                <p>As for the website you are currently looking at, this was originally based on the <a href="https://github.com/SjonHortensius/TooBasic" target="_blank" rel="noopener">TooBasic framework</a> I build specifically for <i>3v4l.org</i>. As the number of features increased I eventually migrated to another framework (which is not open-source, but it's called the <i>Basic Framework</i>) with an actual Model and Template-parser.</p>
                <p>For performance reasons I strip the HTML, CSS and javascripts; but there have been a few invisible upgrades here as well. Originally I used <a href="http://mootools.net/" target="_blank" rel="noopener">MooTools</a> but that has been replaced by <a href="http://vanilla-js.com/" target="_blank" rel="noopener">Vanilla JS</a>. If you'd like, you can find a <a href="/s/my.js">human-readable version here</a>. My work pays off, as can be seen when <a href="https://tools.pingdom.com/#!/bisd6I/https://3v4l.org" target="_blank" rel="noopener">analyzing</a> the <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2F3v4l.org%2F" target="_blank" rel="noopener">performance of this site</a>.</p>
                <p>The layout has taken a few cues from Bootstrap but given the verboseness of both its HTML and CSS I don't actually use that. The initial layout allowed for only the input and output to be visible, which was why I did an update where I added the tabs allowing for various helpers to be included. You're currently looking at the third layout iteration, which was done specifically to allow for some global contextual links to be visible and allow for various other features.</p>
              </Col>
            </Row>
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
    name: 'about-page',
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
  
</style>