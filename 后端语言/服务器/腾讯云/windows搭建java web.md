#### windows搭建java web

* 开启Telnet服务

  * 添加角色和功能
  * 功能
  * 找到Telnet安装
  * 命令行services.msc找到Telnet改成自动
  * 命令行net start telnet

* 安装sdk

  * ```
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    ```

  * 下载安装

* 安装Tomcat

  * ```
    http://tomcat.apache.org/download-90.cgi
    ```

  * 点击 **32-bit/64-bit Windows Service Installer** 进行下载：

  * 测试http://localhost:8080

  * 你也可以访问 [http://111.230.16.136:8080](http://111.230.16.136:8080/) 在外网查看。

    ​

* 安装环境

  * 环境下载

  * https://www.microsoft.com/zh-CN/download/details.aspx?id=40784

  * 64位安装

    ​

* 下载MYSql(64)

  ```
  https://dev.mysql.com/downloads/mysql/
  ```

  * 解压、移动
    * 在 `C:\Program Files (x86)` 下建立 `MySQL` 文件夹，然后将解压后的文件夹移动至该处，并重命名为 `mysql`

  ​

* 添加环境变量

  在 **开始菜单** 中右击 **这台电脑**，选择 **属性（Properties）**：![Properties](https://share-10039692.file.myqcloud.com/lab/ac197229e6/image/wi295oxrzs/%E5%9B%BE%E7%89%87.png)在弹出的窗口中点击 **高级系统设置**：![高级系统设置](https://share-10039692.file.myqcloud.com/lab/ac197229e6/image/yn4vqgv5uy/%E5%9B%BE%E7%89%87.png)然后点击 **环境变量**：![环境变量](https://share-10039692.file.myqcloud.com/lab/ac197229e6/image/x118fv0ghr/%E5%9B%BE%E7%89%87.png)在其中找到 **Path**，双击编辑：![Path](https://share-10039692.file.myqcloud.com/lab/ac197229e6/image/afso3dxkxu/image.png)

  在**变量值**最后补充一下路径（注意**分号**），然后确定保存：

  `;C:\Program Files (x86)\MySQL\mysql\bin`![变量值](https://share-10039692.file.myqcloud.com/lab/9800988793/image/4f7givrm3l/image.png)

* 配置文件

  切换至『编辑视图』，展开 [Program Files (x86)\MySQL\mysql]()，右击新建文件，命名为 `my.ini`：

  ![编辑视图](https://share-10039692.file.myqcloud.com/lab/9800988793/image/g2dgg0heks/image.png)

  然后将以下内容复制至文件中：

  ```
  [mysql]
  default-character-set=utf8 

  [mysqld]
  port=3306
  basedir=C:\Program Files (x86)\MySQL\mysql
  datadir=C:\Program Files (x86)\MySQL\mysql\data
  max_connections=200
  character-set-server=utf8
  default-storage-engine=INNODB
  ```

  最后 **Ctrl + S** 保存。

  创建 data 目录接着，我们需要在 **mysql** 目录下新建一个 `data` 目录。![data](https://share-10039692.file.myqcloud.com/lab/9800988793/image/fh97kzq64v/image.png)

* 启动服务

  打开 **Powershell** 或 **命令提示符（CMD）**：![Powershell](https://share-10039692.file.myqcloud.com/lab/ac197229e6/image/uvwosrs9vn/image.png)

  提示： Powershell 中点击鼠标右键即为粘贴。

  ​

  开始安装

  在 **Powershell** 或 **CMD** 中输入：

  ```
  mysqld --initialize --user=mysql --console
  ```

  `注意此时会生成一个**临时密码**：

  ![临时密码](https://share-10039692.file.myqcloud.com/lab/9800988793/image/mpeuuh3cwb/image.png)接着输入：

  `mysqld -install`

  ``net start mysql`

  ​

  ![启动服务](https://share-10039692.file.myqcloud.com/lab/9800988793/image/ikuoim6p86/image.png)

* 更改密码

  登入在 **Powershell** 或 **CMD** 中输入：

  `mysql -u root -p`

  然后输入刚刚生成的**临时密码**，即可登入 MySQL：![登入](https://share-10039692.file.myqcloud.com/lab/9800988793/image/ju759czd9w/image.png)

  ​

  修改密码

  在刚登入的 *mysql* 中，输入（可将 `myPassword` 替换 为自己的密码）：

  ​

  `set password = password('myPassword');`

  ​

  ![修改密码](https://share-10039692.file.myqcloud.com/lab/9800988793/image/lrbnxm2nac/image.png)

  接着输入：

  `exit;`

  登出数据库。

  之后你就可以使用 `mysql -u root -p` + `自己密码` 登录数据库了。