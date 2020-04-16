// components/my-mslot/my-mslot.js
Component({
  // ------- 让使用者可以传入数据 ---------
  properties: {

  },
  // ------- 定义组件内部的初始化数据 ---------
  data: {
    counter: 0
  },
  // ------- 用于定义组件内部的函数 ---------
  methods: {

  },
  // ------- 定义组件的配置选项 ---------
  // multipleSlots 使用多插槽时设置为true
  // styleIsolation 设置样式的隔离方式
  options: {
    multipleSlots: true
  },
  // ------- 外界给组件传入额外的样式 ---------
  externalClasses: [],
  // ------- 可以监听properties/data的改变 ---------
  observers: {
    counter: function (newVal) {
      console.log(newVal);
    }
  },
  // ------- 组件中监听生命周期函数 ---------
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时');
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    },
    resize() {
      console.log('监听页面尺寸改变');
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建出来时');
    },
    attached() {
      console.log('组件被添加到页面');
    },
    ready() {
      console.log('组件被渲染出来时');
    },
    moved() {
      console.log('组件被移动到另一个节点');
    },
    detached() {
      console.log('组件被移除掉时');
    }
  }
})