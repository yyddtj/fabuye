var qrcode_st = "close";


Swal.fire({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 6000,
  timerProgressBar: true,
  icon: 'info',
  title: '发布页地址，请务必收藏<br>www.menglingji.top</br> ',
})

function qr_code(){  
  Swal.fire({
    title: '快来加入吧',
    icon: 'info',
    html: "<center><img src='/img/pindao-qrcode.jpg' id='img1' width='300px' height='300px'/></center><br><center><h3>手机长按可以保存哦</h3></center></br>", // HTML
    focusConfirm: true, //聚焦到确定按钮
    showCloseButton: true,//右上角关闭
    didOpen: function(){
      qrcode_st = "open"
    },
    didClose: function(){
      qrcode_st = "close"
    }
  })
}

function qrcode_gzh(){
  Swal.fire({
    title: '她的公众号',
    icon: 'info',
    html: "<center><img src='/img/qrcode_for_gh.jpg' id='img1' width='300px' height='300px'/></center><br><center><h3>微信扫一扫</h3></center></br>", // HTML
    focusConfirm: true, //聚焦到确定按钮
    showCloseButton: true,//右上角关闭
    didOpen: function(){
      qrcode_st = "open"
    },
    didClose: function(){
      qrcode_st = "close"
    }
  })
}