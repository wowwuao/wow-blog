import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wow-blog',
  favicon:'https://p26-passport.byteacctimg.com/img/user-avatar/1e1b1258b43b135af6a1c7b591ab95b5~300x300.image',
  logo: 'https://p26-passport.byteacctimg.com/img/user-avatar/1e1b1258b43b135af6a1c7b591ab95b5~300x300.image',
  outputPath: 'dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  history:{
    type:"hash"
  },
  //路由前缀
  // base:"/wow-blog/",    
  // scripts:["https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",'mermaid.initialize({startOnLoad:true})'],
  //打包后的静态资源位置
  //publicPath:"/wow-blog/",
  publicPath:"./",

  //meta标签的设置
  metas: [
    {
      name: 'keywords',
      content: 'wowwuao ,wow, blog , wow-blog,wow blog, 博客',
    },
    {
      name: 'description',
      content: 'wow的博客，为了实习与秋招冲刺！！！',
    }
  ],
  // styles:[`button {color:#000000 !}`]
});
