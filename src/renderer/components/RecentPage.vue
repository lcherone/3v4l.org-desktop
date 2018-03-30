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
        <div style="min-height: calc(100vh - 230px);">
          <Tabs type="card" :animated="false">

            <TabPane label="Recent submissions">
              <Card class="tabbed-card" dis-hover>
                <table>
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>created</th>
                      <th># runs</th>
                      <th># operations</th>
                      <th>% variance</th>
                      <th>operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i class="icon-"></i> <a href="/r5BEu">r5BEu</a></td>
                      <td><time datetime="2018-03-30T01:00:32Z" title="Fri Mar 30 2018 02:00:32 GMT+0100 (BST)">02:00:32</time></td>
                      <td>1</td>
                      <td>97</td>
                      <td>0</td>
                      <td>count, array_push, var_dump</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/el6io">el6io</a></td>
                      <td><time datetime="2018-03-30T01:00:00Z" title="Fri Mar 30 2018 02:00:00 GMT+0100 (BST)">02:00:00</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_column, print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for el6io"></i> <a href="/scvQJ">scvQJ</a></td>
                      <td><time datetime="2018-03-30T00:59:39Z" title="Fri Mar 30 2018 01:59:39 GMT+0100 (BST)">01:59:39</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_column, print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/0NKPD">0NKPD</a></td>
                      <td><time datetime="2018-03-30T00:51:40Z" title="Fri Mar 30 2018 01:51:40 GMT+0100 (BST)">01:51:40</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/rAc99">rAc99</a></td>
                      <td><time datetime="2018-03-30T00:48:54Z" title="Fri Mar 30 2018 01:48:54 GMT+0100 (BST)">01:48:54</time></td>
                      <td>1</td>
                      <td>54</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/u8a76">u8a76</a></td>
                      <td><time datetime="2018-03-30T00:48:00Z" title="Fri Mar 30 2018 01:48:00 GMT+0100 (BST)">01:48:00</time></td>
                      <td>1</td>
                      <td>58</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/YK8gv">YK8gv</a></td>
                      <td><time datetime="2018-03-30T00:46:19Z" title="Fri Mar 30 2018 01:46:19 GMT+0100 (BST)">01:46:19</time></td>
                      <td>1</td>
                      <td>14</td>
                      <td>0</td>
                      <td>json_encode</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/e4eh9">e4eh9</a></td>
                      <td><time datetime="2018-03-30T00:46:07Z" title="Fri Mar 30 2018 01:46:07 GMT+0100 (BST)">01:46:07</time></td>
                      <td>1</td>
                      <td>58</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/bhaeF">bhaeF</a></td>
                      <td><time datetime="2018-03-30T00:41:47Z" title="Fri Mar 30 2018 01:41:47 GMT+0100 (BST)">01:41:47</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/v81Ku">v81Ku</a></td>
                      <td><time datetime="2018-03-30T00:41:16Z" title="Fri Mar 30 2018 01:41:16 GMT+0100 (BST)">01:41:16</time></td>
                      <td>1</td>
                      <td>12</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for v81Ku"></i> <a href="/H43oj">H43oj</a></td>
                      <td><time datetime="2018-03-30T00:41:04Z" title="Fri Mar 30 2018 01:41:04 GMT+0100 (BST)">01:41:04</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/Bi2Z0">Bi2Z0</a></td>
                      <td><time datetime="2018-03-30T00:39:30Z" title="Fri Mar 30 2018 01:39:30 GMT+0100 (BST)">01:39:30</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/cp0eQ">cp0eQ</a></td>
                      <td><time datetime="2018-03-30T00:38:21Z" title="Fri Mar 30 2018 01:38:21 GMT+0100 (BST)">01:38:21</time></td>
                      <td>1</td>
                      <td>22</td>
                      <td>3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for cp0eQ"></i> <a href="/AE7Mq">AE7Mq</a></td>
                      <td><time datetime="2018-03-30T00:38:05Z" title="Fri Mar 30 2018 01:38:05 GMT+0100 (BST)">01:38:05</time></td>
                      <td>1</td>
                      <td>23</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for AE7Mq"></i> <a href="/0VrGR">0VrGR</a></td>
                      <td><time datetime="2018-03-30T00:37:36Z" title="Fri Mar 30 2018 01:37:36 GMT+0100 (BST)">01:37:36</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for 0VrGR"></i> <a href="/7WVM9">7WVM9</a></td>
                      <td><time datetime="2018-03-30T00:37:05Z" title="Fri Mar 30 2018 01:37:05 GMT+0100 (BST)">01:37:05</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for 7WVM9"></i> <a href="/36fuT">36fuT</a></td>
                      <td><time datetime="2018-03-30T00:34:54Z" title="Fri Mar 30 2018 01:34:54 GMT+0100 (BST)">01:34:54</time></td>
                      <td>1</td>
                      <td>15</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/KVSf8">KVSf8</a></td>
                      <td><time datetime="2018-03-30T00:31:25Z" title="Fri Mar 30 2018 01:31:25 GMT+0100 (BST)">01:31:25</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, usort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/5doKI">5doKI</a></td>
                      <td><time datetime="2018-03-30T00:29:34Z" title="Fri Mar 30 2018 01:29:34 GMT+0100 (BST)">01:29:34</time></td>
                      <td>1</td>
                      <td>12</td>
                      <td>3</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/UH51f">UH51f</a></td>
                      <td><time datetime="2018-03-30T00:20:34Z" title="Fri Mar 30 2018 01:20:34 GMT+0100 (BST)">01:20:34</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/eSScU">eSScU</a></td>
                      <td><time datetime="2018-03-30T00:17:46Z" title="Fri Mar 30 2018 01:17:46 GMT+0100 (BST)">01:17:46</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/1lcJJ">1lcJJ</a></td>
                      <td><time datetime="2018-03-30T00:17:24Z" title="Fri Mar 30 2018 01:17:24 GMT+0100 (BST)">01:17:24</time></td>
                      <td>1</td>
                      <td>13</td>
                      <td>0</td>
                      <td>print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/13rib">13rib</a></td>
                      <td><time datetime="2018-03-30T00:16:32Z" title="Fri Mar 30 2018 01:16:32 GMT+0100 (BST)">01:16:32</time></td>
                      <td>1</td>
                      <td>45</td>
                      <td>0</td>
                      <td>array_column, array_multisort, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/3Krqq">3Krqq</a></td>
                      <td><time datetime="2018-03-30T00:15:42Z" title="Fri Mar 30 2018 01:15:42 GMT+0100 (BST)">01:15:42</time></td>
                      <td>1</td>
                      <td>47</td>
                      <td>2</td>
                      <td>array_column, array_multisort, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/6YjSN">6YjSN</a></td>
                      <td><time datetime="2018-03-30T00:14:57Z" title="Fri Mar 30 2018 01:14:57 GMT+0100 (BST)">01:14:57</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_merge, print_r</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </TabPane>

            <TabPane label="My recent submissions">
              <Card class="tabbed-card" dis-hover>
                <table>
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>created</th>
                      <th># runs</th>
                      <th># operations</th>
                      <th>% variance</th>
                      <th>operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i class="icon-"></i> <a href="/r5BEu">r5BEu</a></td>
                      <td><time datetime="2018-03-30T01:00:32Z" title="Fri Mar 30 2018 02:00:32 GMT+0100 (BST)">02:00:32</time></td>
                      <td>1</td>
                      <td>97</td>
                      <td>0</td>
                      <td>count, array_push, var_dump</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/el6io">el6io</a></td>
                      <td><time datetime="2018-03-30T01:00:00Z" title="Fri Mar 30 2018 02:00:00 GMT+0100 (BST)">02:00:00</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_column, print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for el6io"></i> <a href="/scvQJ">scvQJ</a></td>
                      <td><time datetime="2018-03-30T00:59:39Z" title="Fri Mar 30 2018 01:59:39 GMT+0100 (BST)">01:59:39</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_column, print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/0NKPD">0NKPD</a></td>
                      <td><time datetime="2018-03-30T00:51:40Z" title="Fri Mar 30 2018 01:51:40 GMT+0100 (BST)">01:51:40</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/rAc99">rAc99</a></td>
                      <td><time datetime="2018-03-30T00:48:54Z" title="Fri Mar 30 2018 01:48:54 GMT+0100 (BST)">01:48:54</time></td>
                      <td>1</td>
                      <td>54</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/u8a76">u8a76</a></td>
                      <td><time datetime="2018-03-30T00:48:00Z" title="Fri Mar 30 2018 01:48:00 GMT+0100 (BST)">01:48:00</time></td>
                      <td>1</td>
                      <td>58</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/YK8gv">YK8gv</a></td>
                      <td><time datetime="2018-03-30T00:46:19Z" title="Fri Mar 30 2018 01:46:19 GMT+0100 (BST)">01:46:19</time></td>
                      <td>1</td>
                      <td>14</td>
                      <td>0</td>
                      <td>json_encode</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/e4eh9">e4eh9</a></td>
                      <td><time datetime="2018-03-30T00:46:07Z" title="Fri Mar 30 2018 01:46:07 GMT+0100 (BST)">01:46:07</time></td>
                      <td>1</td>
                      <td>58</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/bhaeF">bhaeF</a></td>
                      <td><time datetime="2018-03-30T00:41:47Z" title="Fri Mar 30 2018 01:41:47 GMT+0100 (BST)">01:41:47</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/v81Ku">v81Ku</a></td>
                      <td><time datetime="2018-03-30T00:41:16Z" title="Fri Mar 30 2018 01:41:16 GMT+0100 (BST)">01:41:16</time></td>
                      <td>1</td>
                      <td>12</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for v81Ku"></i> <a href="/H43oj">H43oj</a></td>
                      <td><time datetime="2018-03-30T00:41:04Z" title="Fri Mar 30 2018 01:41:04 GMT+0100 (BST)">01:41:04</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/Bi2Z0">Bi2Z0</a></td>
                      <td><time datetime="2018-03-30T00:39:30Z" title="Fri Mar 30 2018 01:39:30 GMT+0100 (BST)">01:39:30</time></td>
                      <td>1</td>
                      <td>46</td>
                      <td>1</td>
                      <td>array_column, arsort, printf, print_r, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/cp0eQ">cp0eQ</a></td>
                      <td><time datetime="2018-03-30T00:38:21Z" title="Fri Mar 30 2018 01:38:21 GMT+0100 (BST)">01:38:21</time></td>
                      <td>1</td>
                      <td>22</td>
                      <td>3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for cp0eQ"></i> <a href="/AE7Mq">AE7Mq</a></td>
                      <td><time datetime="2018-03-30T00:38:05Z" title="Fri Mar 30 2018 01:38:05 GMT+0100 (BST)">01:38:05</time></td>
                      <td>1</td>
                      <td>23</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for AE7Mq"></i> <a href="/0VrGR">0VrGR</a></td>
                      <td><time datetime="2018-03-30T00:37:36Z" title="Fri Mar 30 2018 01:37:36 GMT+0100 (BST)">01:37:36</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for 0VrGR"></i> <a href="/7WVM9">7WVM9</a></td>
                      <td><time datetime="2018-03-30T00:37:05Z" title="Fri Mar 30 2018 01:37:05 GMT+0100 (BST)">01:37:05</time></td>
                      <td>1</td>
                      <td><i>?</i></td>
                      <td>2</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon icon-edit" title="draft for 7WVM9"></i> <a href="/36fuT">36fuT</a></td>
                      <td><time datetime="2018-03-30T00:34:54Z" title="Fri Mar 30 2018 01:34:54 GMT+0100 (BST)">01:34:54</time></td>
                      <td>1</td>
                      <td>15</td>
                      <td>0</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/KVSf8">KVSf8</a></td>
                      <td><time datetime="2018-03-30T00:31:25Z" title="Fri Mar 30 2018 01:31:25 GMT+0100 (BST)">01:31:25</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, usort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/5doKI">5doKI</a></td>
                      <td><time datetime="2018-03-30T00:29:34Z" title="Fri Mar 30 2018 01:29:34 GMT+0100 (BST)">01:29:34</time></td>
                      <td>1</td>
                      <td>12</td>
                      <td>3</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/UH51f">UH51f</a></td>
                      <td><time datetime="2018-03-30T00:20:34Z" title="Fri Mar 30 2018 01:20:34 GMT+0100 (BST)">01:20:34</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/eSScU">eSScU</a></td>
                      <td><time datetime="2018-03-30T00:17:46Z" title="Fri Mar 30 2018 01:17:46 GMT+0100 (BST)">01:17:46</time></td>
                      <td>1</td>
                      <td>42</td>
                      <td>0</td>
                      <td>array_column, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/1lcJJ">1lcJJ</a></td>
                      <td><time datetime="2018-03-30T00:17:24Z" title="Fri Mar 30 2018 01:17:24 GMT+0100 (BST)">01:17:24</time></td>
                      <td>1</td>
                      <td>13</td>
                      <td>0</td>
                      <td>print_r</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/13rib">13rib</a></td>
                      <td><time datetime="2018-03-30T00:16:32Z" title="Fri Mar 30 2018 01:16:32 GMT+0100 (BST)">01:16:32</time></td>
                      <td>1</td>
                      <td>45</td>
                      <td>0</td>
                      <td>array_column, array_multisort, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/3Krqq">3Krqq</a></td>
                      <td><time datetime="2018-03-30T00:15:42Z" title="Fri Mar 30 2018 01:15:42 GMT+0100 (BST)">01:15:42</time></td>
                      <td>1</td>
                      <td>47</td>
                      <td>2</td>
                      <td>array_column, array_multisort, arsort, printf, uasort</td>
                    </tr>
                    <tr>
                      <td><i class="icon-"></i> <a href="/6YjSN">6YjSN</a></td>
                      <td><time datetime="2018-03-30T00:14:57Z" title="Fri Mar 30 2018 01:14:57 GMT+0100 (BST)">01:14:57</time></td>
                      <td>1</td>
                      <td>11</td>
                      <td>0</td>
                      <td>array_merge, print_r</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </TabPane>
          </Tabs>
        </div>
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
  .tabbed-card {
    margin-top:-16px;
    border-top:0;
    border-radius: 0px 0px 4px 4px
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
  }

  table thead tr th {
    text-align: left;
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