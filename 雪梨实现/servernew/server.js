"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
exports.Course = Course;
var Lesson = /** @class */ (function () {
    function Lesson(id, courseName, images, time, person, introduction, srcs) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.time = time;
        this.person = person;
        this.introduction = introduction;
        this.srcs = srcs;
    }
    return Lesson;
}());
exports.Lesson = Lesson;
var Join = /** @class */ (function () {
    function Join(id, coursename, image, task, person) {
        this.id = id;
        this.coursename = coursename;
        this.image = image;
        this.task = task;
        this.person = person;
    }
    return Join;
}());
exports.Join = Join;
var Essay = /** @class */ (function () {
    function Essay(id, headPortrait, picture, tname, introduce, name, time, reading, comment) {
        this.id = id;
        this.headPortrait = headPortrait;
        this.picture = picture;
        this.tname = tname;
        this.introduce = introduce;
        this.name = name;
        this.time = time;
        this.reading = reading;
        this.comment = comment;
    }
    return Essay;
}());
exports.Essay = Essay;
var courses = [
    new Course(1, '混合应用', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(2, 'HTML5与css3前端开发', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(3, 'web开发（二）', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(4, '测试方向--web系统测试', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(5, '信息素养实践', "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(6, '计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(7, '数据结构', "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(8, 'JS进阶', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 10, 90),
];
var lessons = [
    new Lesson(1, 'Github 开源之旅视频课程第一季：启程', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190', 14, 3735, '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(2, 'css3基础', 'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190', 12, 2315, 'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(3, "html5基础", "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190", 12, 1310, 'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。', 'http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4'),
    new Lesson(4, 'Selenium IDE WEB自动化测试入门视频课程（中）', 'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190', 13, 3794, '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。', 'http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4'),
    new Lesson(5, '扩展的ICONIX软件过程实践', 'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190', 12, 2269, '    ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。', 'http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4'),
    new Lesson(6, 'Selenium IDE WEB自动化测试入门视频课程上', 'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190', 11, 3131, '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。', 'http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4'),
    new Lesson(7, '网页制作与开发', 'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190', 42, 1572, '     本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。', 'http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4'),
    new Lesson(8, '产品&交互设计那些事儿', 'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190', 5, 1083, '      本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。', 'http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4'),
    new Lesson(9, 'VR AR产品设计的思考视频课程', 'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190', 3, 4335, '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。', 'http://usercontent.edu2act.cn/media/cs/16-09-08/zRSCXZtd3YeN8fFRD5SHfS.mp4'),
    new Lesson(10, 'ProcessOn界面原型绘制', 'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190', 2, 4234, '      ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍其界面原型图的绘制功能。课程主要包括以下几项：ProcessOn界面原型绘制功能的主要操作。ProcessOn界面原型绘制功能的使用技巧。以微信为主要参考，完成微信App的高保真界面原型设计。ProcessOn仅仅是界面原型绘制工具中较为简单的一种，想要完成高质量的原型软件还是使用Axure比较好，', 'http://usercontent.edu2act.cn/media/cs/16-09-02/zGzaDrPpMMbCjH6RwRYWUL.mp4'),
    new Lesson(11, 'ProcessOn绘制流程图', 'http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190', 4, 3053, '     绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。流程图可以让流程图可以提供一种简单扼要的“缩略俯瞰图”，帮助观众快速了解业务如何运转。而在最关键的PRD文档中插入流程图可以让开发人员更顺畅的了解功能的流程。', 'http://usercontent.edu2act.cn/media/cs/16-09-02/3i8EkPgeNMGwJXNfkRvMhd.mp4'),
    new Lesson(12, '项目管理平台Redmine', 'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190', 8, 4423, '      本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进行了简单的对比。让学员能够熟练的使用redmine进行项目进度的把握。', 'http://usercontent.edu2act.cn/media/cs/16-09-02/amGih73ADRR6rF4QJuh8xG.mp4')
];
var essays = [
    new Essay(1, '../../../assets/img/m.png', "../../../assets/img/11.jpg", ' WEB开发（二）—— 函数', '（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一', '刘秀梅 ·', '2018-10-11 15:10', 1265, 4),
    new Essay(2, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', "../../../assets/img/22.jpg", ' 一个java文件中可包含多个main方法', 'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就', '3-张馨元 ·', '2018-10-09 19:21', 56, 0),
    new Essay(3, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', "../../../assets/img/33.jpg", ' 一个java文件中可包含多个main方法', '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只', '3-张馨元 ·', '2018-10-09 19:17', 40, 2),
    new Essay(4, 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', "../../../assets/img/44.jpg", ' 数据结构——线性表的经典应用', '1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，', "杨伟彬 ·", '2018-10-08 14:28', 51, 0),
    new Essay(5, 'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256', "../../../assets/img/55.jpg", ' 栈和队列之间的相互转化', '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到hel', '7-李建涛 ·', '2018-10-01 12:51', 58, 2),
    new Essay(6, '../../../assets/img/m.png', "../../../assets/img/11.jpg", ' WEB开发（二）——字符串类型', ' 在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存在的，但是字符串仍然可以遍历，通过下标的方式获取。为什么？ 为甚么字符串还有lengt', '刘秀梅 ·', '2018-09-29 14:22', 223, 2),
    new Essay(7, 'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256', "../../../assets/img/11.jpg", ' JavaScript event（事件对象）', '      在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致', '刘孟祎 ·', '2018-09-28 09:40', 53, 0),
    new Essay(8, 'http://usercontent.edu2act.cn/media/userheader/18-06-27/qaxwRNWziva8oHjepZHiga.jpg?imageView2/1/w/256/h/256', "../../../assets/img/44.jpg", ' 数据结构——快速排序', '       快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。       分治法的基本思想是：将原问题分解为若干个规模更小但', '张玉茹 · ', '2018-09-27 16:57', 34, 0),
    new Essay(9, 'http://usercontent.edu2act.cn/media/userheader/18-06-27/qaxwRNWziva8oHjepZHiga.jpg?imageView2/1/w/256/h/256', "../../../assets/img/44.jpg", ' 数据结构——栈和队列的逻辑特性', '       线性表是最常用且最简单的一种线性结构。       线性结构的特点：       (1) 存在唯一的一个被称作“第一个”的数据元素。       (2) 存在唯一的一个被称作“最后一个&rd', '张玉茹 ·', '2018-09-27 08:58', 44, 0)
];
var joins = [
    new Join(1, '2016级混合应用开发', 'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130', 3, 91),
    new Join(2, '2016级HTML5与CSS3前端开发', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 5, 91),
    new Join(3, 'JavaScript进阶（2016级H5方向基础课）', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 23, 95),
    new Join(4, '2016级操作系统', "http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130", 7, 398),
    new Join(5, '2016级数据库原理', "http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130", 6, 400)
];
app.get('/api', function (req, res) {
    res.json(courses);
});
app.get('/api/joins', function (req, res) {
    res.json(joins);
});
app.get('/api/courses', function (req, res) {
    res.json(courses);
});
app.get('/api/lessons', function (req, res) {
    res.json(lessons);
});
app.get('/api/essays', function (req, res) {
    res.json(essays);
});
app.get('/api/courses/:id', function (req, res) {
    console.log(req.params);
    res.json(courses.find(function (ele) { return ele.id == req.params.id; })); //直接返回
});
app.get('/api/lessons/:id', function (req, res) {
    console.log(req.params);
    res.json(lessons.find(function (ele) { return ele.id == req.params.id; })); //直接返回
});
app.get('/api/essays/:id', function (req, res) {
    console.log(req.params);
    res.json(essays.find(function (ele) { return ele.id == req.params.id; })); //直接返回
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});
app.listen(8000);
