### Linux常用指令

linux分区:

/dev/sda3
第一块scsi硬盘的第三个主分区
/dev/sdb7
第二块scsi硬盘的第三个逻辑分区
df
查看已经挂载的分区
13.系统结构树

linux基本指令:

1.cd 切换目录
2.pwd 查看当前路径
3.ls 查看当前目录下的所有文件,-l查看属性，-a查看隐藏文件
4.cat file1|wc -l 查看文件行数，-l行数
5.cat file1 |wc -c 查看文件字符数,-c字符数
6.du -sh file1 查看文件大小,-sh帮你换算单位k,m,g

文件管理:

1.新建文件
touch file1
touch file{1..10}
2.删除文件
rm -rf file1
3.编辑文件
vi file1
4.复制
cp file1 /mnt/file2
5.移动
mv file1 /mnt/file1
6.查看文件内容
cat file1
查看文件内容
more file2
从第一页往下查看
tree dir
递归查看目录下的所有子目录和文件
ls -lR
递归查看目录下的所有子目录和文件

文件或目录权限:

1.查看文件权限
ls -l dir1
2.修改权限
chmod 755 dir
7 = rwx =421
chmod o+w dir
u,g,o=a

系统结构树:

1.home
普通用户的家目录
2.mnt
空目录
3.media
挂载光盘用的
4.bin
所有用户都可以执行的命令
5.sbin
只有root才可以执行的命令
6.usr
自定义安装的软件的执行程序，帮助手册
7.var
日志,缓存
8.proc
内存镜像文件
9.dev
硬盘设备文件
10.etc
软件的配置文件
11.boot
启动文件,包括linux内核，init进程镜像文件
12.tmp
临时目录
13.root
超级用户的家目录

目录管理:

1.创建目录
mkdir dir
2.删除目录
rm -rf dir
3.mkdir -p a/b/c/d/e/g
mkdir -p aa/bb/cc/dd/ee/gg
cd - #记忆近两次使用的目录

用户管理:

1.新建用户
useradd user1
2.删除用户
userdel -r user1
3.设置密码
passwd user1
4.查看用户
id user1

文件搜索:

1.find
find /root -name file1
在/root下查找file1
find /root -name file1 -exec rm -rf {} \;
在/root下查找file1并删除
2.which
which ls
3.locate
1)形成数据库
updatedb
2)用locate查找
locate httpd.conf

内容搜索:

1.grep
cat file|grep linux
搜索file中包含linux的行
cat file1 |grep -E "php|linux"
搜索file1中包含php或linux的行

系统管理:

1.关机
init 0
2.重启
init 6

shell常用技巧:

1.tab补全
2.| 管道

网络设置:

ip的配置方法
1.临时
ifconfig eth0 192.168.200.1

2.永久
vi /etc/sysconfig/network-scripts/ifcfg-eth0
IPADDR=192.168.100.1
NETMASK=255.255.255.0
ONBOOT=yes

service network restart
以面ip网卡配置马上生效
3.查看ip
ifconfig eth0

压缩包

1.gz压缩包
1)制作
tar czf file1.tar.gz file1
2)解压
tar xzf file1.tar.gz
2.bz2压缩包
1)制作
tar cjf file1.tar.bz2 file1
2)解压
tar xjf file1.tar.bz2
3.gzip压缩包
1)制作
zip file.zip file1 file2 file3
zip -r file.zip /dir
2)解压
unzip file.zip

帮助:

1.-h
2.--help
3.man

