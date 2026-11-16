var posts=["Docker安装【Ubuntu】/","VMWare安装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };