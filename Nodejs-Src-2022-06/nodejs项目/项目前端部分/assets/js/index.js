$(function () {
  // 调用 getUserInfo 获取用户基本信息
  getUserInfo()

  var layer = layui.layer

  // 点击按钮，实现退出功能
  $('#btnLogout').on('click', function () {
    // 提示用户是否确认退出
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
      // 1. 清空本地存储中的 token
      // ????????????????????????
      // 2. 重新跳转到登录页面
      // ????????????????????????

      // 关闭 confirm 询问框
      // layer.close(index)
    })
  })
})

// 获取用户的基本信息
function getUserInfo() {
  // 发起Ajax的get请求（请求获取用户信息接口）  layui.layer.msg('获取用户信息失败！')
  $.ajax({
    url: '/my/userinfo',
    type: 'get',
    success: res => {
      renderAvatar(res.data)
    },
    error: err => {
      console.log(err)
    }
  })
  // 调用 renderAvatar(res.data) 渲染用户的头像
}


// 渲染用户的头像
function renderAvatar(user) {
  // 1. 获取用户的名称
  var name = user.nickname || user.username
  // 2. 设置欢迎的文本
  $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
  // 3. 按需渲染用户的头像
  if (user.headpic !== null) {
    // 3.1 渲染图片头像
    $('.layui-nav-img')
      .attr('src', user.headpic)
      .show()
    $('.text-avatar').hide()
  } else {
    // 3.2 渲染文本头像
    $('.layui-nav-img').hide()
    var first = name[0].toUpperCase()
    $('.text-avatar')
      .html(first)
      .show()
  }
}
