$(function () {
  var form = layui.form
  var layer = layui.layer

  form.verify({
    nickname: function (value) {
      if (value.length < 2 || value.length > 10) {
        return '昵称长度必须在 2 ~ 10 个字符之间！'
      }
    }
  })

  initUserInfo()

  // 初始化用户的基本信息
  function initUserInfo() {
    $.ajax({
      method: 'GET',
      url: '/my/userinfo',
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg('获取用户信息失败！')
        }
        // 调用 form.val() 快速为表单赋值
        form.val('formUserInfo', res.data)
      }
    })
  }

  // 重置表单的数据
  $('#btnReset').on('click', function (e) {
    // 阻止表单的默认重置行为
    e.preventDefault()
    initUserInfo()
  })

  // 监听表单的提交事件
  $('.layui-form').on('submit', function (e) {
    // 阻止表单的默认提交行为
    e.preventDefault()
    // 发起 ajax 数据请求（请求更新用户信息接口）
    // ???????????????????
  })
})
