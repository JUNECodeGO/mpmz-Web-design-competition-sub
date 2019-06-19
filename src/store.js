import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    senT:[
        {
         a:'这些各行各业的人人就生活在你的周围，你跟他们有一样的思维和观念，有一样的烦心事儿，也有一样奋斗的激情.',
          b:'/img/h1.e76a2a23.png' },
        {
          a:'蛮感人的，不按现实规则活着追逐梦想的人确实要经受很多的挫折。这里面都是成功例子，凤毛麟角啊。天时地利人和都重要。失败的是大多数吧。',
          b:'/img/h2.35d8503e.png',
        },
        {  a:'朱之文贵在走进扭曲的资本主义社会后仍然坚持自己的原则没有被金钱腐化。 希望阿迪力兄弟能一直坚持下去能同甘也能共苦..和兄弟一起干事业也是我的梦想。',
           b:'/img/h3.6347ef71.png',
        },
        {   a:'每个人的活法都可以写成一本精彩的小说。 不是成功学传销。不轻贫，不贬富，你我皆是一份子。人贫却不失爱，人富却蕴大义。',
            b:'/img/h4.e77a76b9.png',
        },
        {  a:'寻艺志”里的艺术家们的故事都十分的不同寻常且动人，每个人的心里都住着一位艺术家，我们都可以寻找自己向往的生活。',
           b:'/img/h5.5bc97717.png',
        },
    ],
      youSen:[]
  },
  mutations: {
      addDiscuss(state,text){
          var obj = {};
          obj.b = '/img/h1.e76a2a23.png';
          obj.a = text;
          state.youSen.push(obj);
      }
  },
  actions: {

  }
})
