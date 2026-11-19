var posts=["VMWare安装/","Docker安装【Ubuntu】/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };