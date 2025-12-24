# vue3-foundation

## 面试题目

1. 说下 Vue 的数据双向绑定
   响应式系统
   Vue 通过 Object.defineProperty（Vue2）或 Proxy（Vue3）来实现数据的响应式。当数据变化时，视图会自动更新。Vue 使用观察者模式，数据变化时会通知相关的组件进行更新。
   Vue3 为什么使用 Proxy 代替 Object.defineProperty
   Proxy 可以直接监听对象的变化，包括新增和删除属性，而 Object.defineProperty 只能监听已有属性的变化。此外，Proxy 的性能更好，代码更简洁。

reactive 函数
Vue3 中使用 reactive 函数将一个普通对象转换为响应式对象。reactive 函数返回一个新的代理对象，当访问或修改该对象的属性时，会触发相应的响应式更新。

```javascript
import { reactive } from "vue";

const state = reactive({
  count: 0,
});
state.count++; // 视图会自动更新
```

2. 说下对 Slot 的理解，以及使用场景
   回答：
   Slot 类似于 React 的 renderProps，它允许父组件向子组件传递内容。Slot 可以分为默认插槽和具名插槽。默认插槽用于传递未命名的内容，具名插槽用于传递特定名称的内容。

最基本的用法是未命名插槽，即在组件中定义 slot,父组件在使用该组件时，可以在组件标签内放置内容，这些内容会被插入到子组件的 slot 位置。

````vue
<template>
  <ChildComponent>
    <div>插槽内容</div>
  </ChildComponent>
</template>

子组件代码： ```vue
<template>
  <slot></slot>
</template>
````

或者使用多个插槽的时候，需要命名

````vue
<template>
  <ChildComponent>
    <template v-slot:header>
      <h1>标题</h1>
    </template>
    <template v-slot:footer>
      <footer>底部内容</footer>
    </template>
  </ChildComponent>
</template>
子组件代码： ```vue
<template>
  <slot name="header"></slot>
  <slot name="footer"></slot>
</template>
````

使用场景：

- 创建可复用的组件库，允许用户自定义内容。
- 实现复杂的布局结构，允许父组件控制子组件的内容。
- 自定义渲染逻辑，根据不同的需求传递不同的内容。

3. Vue 的模版语法 或者 React 的 JSX，最终打包运行时，都是 函数

4. v-if 和 v-show 的区别
   v-if 是条件渲染，只有条件为真时，元素才会被渲染到 DOM 中；v-show 是通过 CSS 控制元素的显示和隐藏，元素始终存在于 DOM 中，只是通过 display 属性来控制其可见性。

5. Vue 生命周期
   Vue 组件的生命周期包括创建、挂载、更新和销毁四个阶段。每个阶段都有对应的钩子函数，如 beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy 和 destroyed。

   beforeActivated, Activated == > KeepAlive = onActivated ==> onDeactivated

   onRenderTracked, onRenderTriggered ==> 响应式追踪

   onBeforeMount => onRenderTracked => onMounted => onActivated
   数据更新
   = onRenderTriggered => onBeforeUpdate => onUpdated

   onErrorCaptured ==> 错误捕获 (React 里面 componentDidCatch)

6. 宏定义
   宏定义是一种在编译时进行代码替换的技术，可以用来简化代码、提高性能。Vue 3 中引入了宏定义，如 defineComponent、defineProps 和 defineEmits，用于更简洁地定义组件和其属性。
   https://vue-macros.dev/

7. 请你说下对 Vue Composition API 的理解

回答： Vue Composition API 是 Vue 3 中引入的一种新的组件逻辑组织方式。它通过函数的形式来组织组件的逻辑，使得代码更加灵活和可复用。与 Vue 2 中的选项式 API 不同，Composition API 允许开发者在一个组件中使用多个逻辑块，而不必将它们分散在不同的生命周期钩子中。

主要特性和理解

- 可组合性。通过组合函数 composable functions, 可以将组件逻辑抽离成独立的函数
- 更好的逻辑组织。 在 Options API 中，组件逻辑通常被分散在多个选项中（data, methods,computed),而在 Composition API 中，逻辑可以集中在一个函数中，便于管理和维护。
- 减少命名冲突：通过使用组合函数，每一个组合函数都有自己的独立作用域，避免全局冲突。
- TS 支持
- API
  - setup
  - reactive 和 ref
  - computed
  - watch 和 watchEffect

8. Vue 中的 Teleport 组件的作用
   回答：
   允许将组件的 DOM 节点移动到 DOM 树中的其他位置，而不是组件的默认位置。这样可以实现更灵活的布局和结构。
   这对于需要 DOM 在特定位置渲染内容的情况非常有用，比如模态框，工具提示等。

主要作用：

- 分离逻辑和渲染位置
- 解决层级问题
- 提升用户体验

9. 动态导入

// 静态导入
import xxx from './/xx'

//动态导入
//react
// React.lazy(() => import('./xx'));

// Vue
const asyncComponet = defineAsyncComponent(()=> import('./xx'))
通常与 Suspense 结合

10. Vue 中的 shallowRef 和 ref 的区别
    ref 会递归地将对象的所有属性转换为响应式，而 shallowRef 只会将对象的顶层属性转换为响应式，嵌套的对象属性不会被转换为响应式。

11. Vue 的指令
    Vue 提供了一些内置指令，如 v-if、v-for、v-show、v-bind 和 v-on 等，用于在模板中实现条件渲染、列表渲染、属性绑定和事件监听等功能。开发者还可以创建自定义指令，以实现特定的 DOM 操作或行为。

12. ErrorBoundary

```js
onErrorCaptured((err, instance, info) => {
  // 处理错误，例如记录日志或显示错误信息
  console.error("捕获到错误:", err);
  // 返回 true 以阻止错误继续传播
  return false;
});
```
