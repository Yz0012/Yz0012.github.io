---
title : 在vscode中使用PlatformIO IDE开发单片机
path : docs\htmlDoc\mcu_learning\
type : 记录,单片机学习
createTime : Wed, 17 Dec 2025 07:35:38 GMT
---

## 在vscode中使用PlatformIO IDE开发单片机

### 零.前言
几个月前买了两个stc89c52rc，想学习入门嵌入式开发，还有的就是进行数据采集和处理，比如对pwm信号进行快速傅里叶变换，不过我预感这个型号的单片机并不能完成这类工作，所以就当作是学习入门单片机的单片机。之所以这几个月没有学习，是因为这几周太忙，而且对网站最基本的功能进行开发需要花费大量时间。好在最近许多课都结课了，时间多了很多，所以有了这次记录。目前手上有一个面包板和配套的杜邦线，还有一个写入程序的stc官方下载器。我看了下网络上的教程大部分都是利用开发板进行教学，因此这无形中给我的入门增加了难度。虽说如此，查阅资料也还是能解决大部分问题的。作为新手的首要任务就是实现单片机点灯这种高端科技，不过在这篇文章中不仅要实现点灯，还要完成灯的定时闪烁这种高精尖科技

### 一.安装单片机
安装单片机的前提是了解我这个单片机针脚的定义，也就是说要去查阅该单片机的datasheet。这里我直接给出该单片机在官方文档的针脚图<br>

<!-- http://ooxx.ooo/i/delete/Mzc5O/kOIdAxQXxMU -->
<img src="https://i.ooxx.ooo/i/Mzc5O.png" alt="" title="引脚图" loading="lazy"/>

明显看出20号引脚接地，40号引脚接5v正极。我这款单片机是没有内置晶振的，所以需要我们在18和19号引脚接上无源晶振。这里我选择14.31818mhz的无源晶振。再来看下我们的stc官方下载器stc auto programmer usb-ttl<br>

<!-- http://ooxx.ooo/i/delete/MWIyN/XgIjwZg4OEs -->
<img src="https://i.ooxx.ooo/i/MWIyN.jpg" alt="" title="stc官方下载器" loading="lazy"/>

现阶段我们只需使用到① ③ ⑤ ⑦脚，接地和5v的针脚按照刚刚分析的接就行。这里面的RXD和TXD是数据串口，分别是接收数据和发送数据。需要注意的是下载器的RXD需要接到单片机的TXD端，下载器的TXD需要接到单片机的RXD端，也就是需要反接

!#&烧录&{烧录过程不需要额外供电}

### 二.开发环境
网上的单片机教程一般都是用Keil uVision进行开发和编译的，不过该软件有免费版本和付费的版本。免费版本有功能上的阉割，处于学习阶段的我还是不太愿意使用有功能阉割的东西。至于付费和破解的也不是特别愿意想用。考虑到我一直使用vscode，所以这里我们使用vscode插件进行开发和编译

首先需要在vscode上安装C/C++和PlatformIO IDE插件

C/C++ : <br>
<!-- http://ooxx.ooo/i/delete/NWQzZ/b2VG8_E5ZDc -->
<img src="https://i.ooxx.ooo/i/NWQzZ.png" alt="" title="C/C++" loading="lazy"/>

PlatformIO IDE : <br>
<!-- http://ooxx.ooo/i/delete/ZTEwY/KLUJyNod5Mc -->
<img src="https://i.ooxx.ooo/i/ZTEwY.png" alt="" title="PlatformIO IDE" loading="lazy"/>

!%&PlatformIO IDE的安装&{该过程建议使用代理，否则可能会卡在一半}

安装完成后，需要我们创建一个stc89c52rc的工程<br>

<!-- http://ooxx.ooo/i/delete/YzM3Y/HPnPW7QG5k8 -->
<img src="https://i.ooxx.ooo/i/YzM3Y.png" alt="" title="创建工程" loading="lazy"/>

在侧边栏选择Projects，然后点Create New Project创建工程<br>

<!-- http://ooxx.ooo/i/delete/NmZiZ/UcIvPXLuptI -->
<img src="https://i.ooxx.ooo/i/NmZiZ.png" alt="" title="选择型号" loading="lazy"/>

基于我们单片机的型号选择对应的选项，点Finish即可完成创建，创建完成后的目录如下图<br>

<!-- http://ooxx.ooo/i/delete/ZmFlO/eyq3Jpe4Sus -->
<img src="https://i.ooxx.ooo/i/ZmFlO.png" alt="" title="目录" loading="lazy"/>

platformio.ini文件可以配置项目，文件内提供配置的参考链接，src文件夹中就是写代码被编译的地方，新建main.c文件

### 三.编写代码和编译
!@
#include <8051.h>

void delay(int times)
{
    if (times > 12)
    {
        return;
    }
    else
    {
        delay(times + 1);
    }

    unsigned int i;
    for (i = 0; i < 10000; i++)
        ;
}

void main()
{
    P2 = 0xFF;
    delay(11);
    P2 = 0x00;
    delay(-15);
}
!@

我们不难发现头文件和代码中均有报错，但不影响编译，可以尝试直接关闭错误提示<br>

代码中0xFF在十六进制表示为二进制的1111 1111，二进制中的每个数字的位置对应着P2引脚的位置，在这串代码中1为导通(P2引脚位置可以参考上方引脚图)，将P2赋值为0xFF就是将P2引脚内的所有二极管全部导通，从而达到点灯效果。这段延时的效果和晶振的频率有关，~~凭感觉来就行~~

<!-- http://ooxx.ooo/i/delete/NTU2M/ghjS4lstI7s -->
<img src="https://i.ooxx.ooo/i/NTU2M.png" alt="" title="编译" loading="lazy"/>

接下来点击Build进行编译，生成的hex文件在.pio\buid下可以找到

!#&编译器&{与Keil uVision的编译器不同，这里用的是SDCC}

<p></p>

<!-- http://ooxx.ooo/i/delete/NWFjM/id8S88bfCq8 -->
<img src="https://i.ooxx.ooo/i/NWFjM.png" alt="" title="hex文件" loading="lazy"/>

### 四.将十六进制文件下载到单片机中

我们使用stc官方的烧录软件STC-ISP-v6.96.exe进行烧录，不过在烧录之前可能会发现它无法检测出单片机，这是因为缺少驱动。所以我们需要多做一步的就是：下载CH340串口驱动。这里读者可自行上网搜索下载

<!-- http://ooxx.ooo/i/delete/ZWY2N/SAUiSxnYlhg -->
<img src="https://i.ooxx.ooo/i/ZWY2N.png" alt="" title="STC-ISP-v6.96.exe" loading="lazy"/>

一般而言它会自动检测单片机类型，接下来只需再文件选项中点打开程序文件，将编译的十六进制文件导入，最后点下载/编程即可完成烧录操作。即可实现灯的定时闪烁这种高端科技！

最后来放一张完成的实物图(╹ڡ╹ )

<!-- http://ooxx.ooo/i/delete/OGYyM/xl9wb6yWBGY -->
<img src="https://i.ooxx.ooo/i/OGYyM.jpg" alt="" title="图！！！" loading="lazy"/>