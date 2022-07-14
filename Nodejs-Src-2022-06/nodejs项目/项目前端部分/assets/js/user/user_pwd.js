$(function () {
  var form = layui.form

  form.verify({
    pwd: [/^.{3,6}$/, '密码必须3到6位'],
    samePwd: function (value) {
      if (value === $('[name=oldPwd]').val()) {
        return '新旧密码不能相同！'
      }
    },
    rePwd: function (value) {
      if (value !== $('[name=newPwd]').val()) {
        return '两次密码不一致！'
      }
    }
  })

  $('.layui-form').on('submit', function (e) {
    e.preventDefault()
    // 发起 ajax 数据请求（请求重置密码接口）
    // ???????????????????
  })
})
