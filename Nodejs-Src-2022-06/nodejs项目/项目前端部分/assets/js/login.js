$(function () {
  // 点击“去注册账号”的链接
  $('#link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })

  // 点击“去登录”的链接
  $('#link_login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })

  // 从 layui 中获取 form 对象
  var form = layui.form
  var layer = layui.layer
  // 通过 form.verify() 函数自定义校验规则
  form.verify({
    // 自定义了一个叫做 pwd 校验规则
    pwd: [/^.{3,6}$/, '密码必须3到6位'],
    // 校验两次密码是否一致的规则
    repwd: function (value) {
      // 通过形参拿到的是确认密码框中的内容
      // 再拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) {
        return '两次密码不一致！'
      }
    }
  })

  // 监听注册表单的提交事件
  $('#form_reg').on('submit', function (e) {
    // 1. 阻止默认的提交行为
    e.preventDefault()
    // 2. 发起Ajax的POST请求（请求注册接口）
    $.ajax({
      url: '/api/reg',
      type: 'post',
      data: {
        username: $('#form_reg input[name=username]').val(),
        password: $('#form_reg input[name=password]').val()
      },
      success: res => {
        // console.log(res)
        if (res.status === 0) {
          layer.msg('注册成功，请登录！')
          // 模拟人的点击行为
          $("#link_login").click()
        } else {
          layer.msg(res.message)
        }
      },
      error: err => {
        console.log(err)
      }
    })
  })

  // 监听登录表单的提交事件
  $('#form_login').submit(function (e) {
    // 阻止默认提交行为
    e.preventDefault()
    //  发起Ajax的POST请求（请求登录接口） - 如果成功，将收到的token存入localStorage中，并跳转到主页面
    console.log($('#form_login input[name=username]').val())
    console.log($('#form_login input[name=password]').val())
    // console.log($(this).serialize())
    $.ajax({
      url: '/api/login',
      method: 'post',
      // data: {
      //   username: $('#form_login input[name=username]').val(),
      //   password: $('#form_login input[name=password]').val()
      // },
      data: $(this).serialize(),
      success: res => {
        console.log(res)
        if (res.status === 0) {  // 表示登录成功
          // 将收到的token存入localStorage中，并跳转到主页面
          localStorage.setItem('token', res.token)
          window.location.href = 'index.html'
        }
      },
      error: err => {
        console.log(err)
      }
    })
  })
})
