# 获取身份证信息

[![Build Status via Travis CI](https://travis-ci.org/xsupermeteorx/chinese-idcard-generator.svg?branch=master)](https://travis-ci.org/xsupermeteorx/chinese-idcard-generator) [![Coverage Status](https://coveralls.io/repos/github/XSuperMeteorX/Chinese-idcard/badge.svg?branch=master)](https://coveralls.io/github/XSuperMeteorX/Chinese-idcard?branch=master) [![NPM version](https://badge.fury.io/js/chinese-idcard-generator.png)](http://badge.fury.io/js/chinese-idcard-generator)

### 安装:

`npm install chinese-idcard-generator`

## [API](#API)

[`verify`](#verify)

[`info`](#info)

[`generateIdcard`](#generateIdcard)

[`constellation`](#constellation)

[`getAge`](#getAge)

[`upgrade15To18`](#upgrade15To18)

<a name="verify" />
verify:校验身份证合法性，返回boolean值

```js
var card = require('chinese-idcard-generator');
/**
* param:chinese-idcard-generator(string)
* return boolean
*/
card.verify('511902200910140013');//false
```

<a name="info" />
info:获取身份证信息，返回一个jsonObject，key:valid为boolean值，代表身份证是否合法。

```js
var card = require('chinese-idcard-generator');
/**
* param:chinese-idcard-generator(string)
* return object
*/
card.info('511902200910140010');
```
**返回结果：**

```js
//身份证合法时返回的数据结构
{ 
	valid: true,//身份证是否合法的标志
	gender: 'Male',//Male->男，Female->女
	birthday: 20091014,//
	province: {
		code: '510000',//行政区域编码
		text: '四川省' 
	},
	city: { 
		code: '511900', 
		text: '巴中市' 
	},
	area: { 
		code: '511902', 
		text: '巴州区' 
	},
	cardType: 1,//身份证类型，1->大陆，2->港澳台
	cardText: '大陆',
	address: '四川省巴中市巴州区',
	age: 11,
	constellation: '天秤'//星座 
}
//身份证非法时返回数据
{
	valid: false
}
```

<a name="generateIdcard" />
generateIdcard:随机生成一个合法身份证号码，返回号码(为了避免长字节数字被吞，所以类型为 String)

```js
var card = require('chinese-idcard-generator');
/**
* return string
*/
card.generateIdcard();//返回随机身份证号码
```

<a name="constellation" />
constellation:根据生日返回星座

```js
var card = require('chinese-idcard-generator');
/**
* return string
*/
card.constellation(20091014);//天秤
card.constellation('2009/10/14','/');//天秤
```

<a name="getAge" />
getAge:根据你输入的生日返回年龄

```js
var card = require('chinese-idcard-generator');
/**
* return number
*/
card.getAge(20091014);//11 (调用时的日期：2021/03/27)
```

<a name="upgrade15To18" />
upgrade15To18:身份证15位升级到18位

```js
var card = require('chinese-idcard-generator');
/**
* return Object
*/
var result = card.upgrade15To18(513722820923415);  // 这里找一个身份证号码
result结构:
{
	code: 0,
	msg: '升级成功',
	card: '18位的身份证'
}
```

**附录：行政区域代码**

- [中华人民共和国国家统计局>>行政区划代码](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/)
- [全国行政区划信息查询平台](http://xzqh.mca.gov.cn/map)
- [中华人民共和国民政部](http://www.mca.gov.cn/article/sj/xzqh/2020/)
