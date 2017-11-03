// 使用 Mock
const Mock = require('mockjs')
// 使用fs模块
const fs = require("fs");
var data = Mock.mock({
  'background|10-20': [{
    'img': "@image('375x667',@color,@word)",
    'id|+1': 1
  }],
  'artic|20': [{
    'id|+1': 1,
    'img': "@image('375x333',@color,@word)",
    'samllimg': "@image('20x20',@color,@word)",
    'topic': '@cword(3,7)',
    'title': '@cword(8,15)',
    'describe': '@word(15,30)',
    'day|+1': 10
  }],
  'gift|6': [{
    'id|+1': 1,
    'img': "@image('375x150',@color,@word)",
    'title': '@cword(8,15)'
  }],
  'songlist|20': [{
    'id|+1': 1,
    'img': "@image('375x200',@color,@word)",
    'title': '@cword(8,15)',
    'day|+1': 1
  }]
})
// console.log(JSON.stringify(data, null, 2));
// 写入到db.json
fs.writeFile('db.json',JSON.stringify(data,null,2), function(err){
  if(err)
    return console.error(err)
  else
    console.log('数据写入成功')
})