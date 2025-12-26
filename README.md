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

13. Teleport
    类似于 ReactDOM.createPortal, 用于移动组件的 DOM 位置

14. Vue 状态管理

- 基础： Composition API, ref, reactive, computed, watch.
  自定义封装，对外暴露： 1. 状态；2. 改变状态的函数。（状态单独的文件，和视图分离）
- 深层状态传递： 基于 provider/ inject
- 集中状态管理方案： 基于 Pinia, Vuex(了解，已经过时了)
- Vue-demiux，用在轻量化场景（UI 库和 Hooks 库）

15. ref 和 reactive 的区别
    ref
    用于创建基本类型（如数字、字符串、布尔值）或单个对象/数组的响应式数据。
    返回一个带有 .value 属性的对象，实际数据存储在 .value 上。
    适合简单数据或需要响应式包装的对象。

```js
import { ref } from "vue";
const count = ref(0);
count.value++;
```

    reactive
    用于创建对象或数组的深层响应式数据。
    返回的是原始对象的代理，可以直接访问和修改属性，无需 .value。
    适合复杂结构的数据。

```js
import { reactive } from "vue";
const state = reactive({ count: 0 });
state.count++; // 直接访问和修改属性
```

ref 适合基本类型和简单对象，访问时用 .value
reactive 适合复杂对象和数组，直接访问属性
reactive 会递归地使所有属性响应式，ref 只包装一层

### 状态管理面试题目

1. Vuex 和 Pinia 的区别
   Vuex 是 Vue 2 的官方状态管理库，Pinia 是 Vue 3 推荐的状态管理库。Pinia 更加轻量化，API 更加简洁，支持 Composition API，并且更容易与 TypeScript 集成。

   - 设计理念
   - Vuex：设计来自 Flux, 包含四个核心概念： Stage，Getter，Mutation， Action
   - Pinia: 支持模块化，每个状态模块可作为独立的 Store 存在。设计上借鉴了 Vue Composition API.

   - API 和使用方式
   - Vuex：使用 mapState、mapGetters、mapActions 等辅助函数，支持插件机制。
     需要定义 mutation 来更新状态，必须同步执行

   - Pinia: 使用 defineStore 函数定义 store，支持 Composition API，使用起来更加简洁。
     状态，Getter，action 都在一个 store 文件中。 允许在 Action 里修改状态，无需通过 Mutation。

   - Typescript 支持
     Pinia 对 TypeScript 有更好的支持，类型推断更加完善。

   - 性能
     Vuex 性能稳定，但是 mutation 可能会有开销
     Pinia 轻量

2. 复杂状态管理

- Composition API
  reactive， ref, computed, watch 管理局部和全局状态
  自定义 composition API，做逻辑分离和状态复用。返回：状态，和更该状态的函数

- Provider/ Inject
  用于在组件树中共享状态。

- Pinia 最佳实践： composition API 风格的 store 定义
  拆分子逻辑，在 store 里面组合

- 中间件
  pinia-plugins-persist

- 外部库
  RxJs

### 路由相关的面试题目

1. 说下 Vue-Router 的路由历史的几种模式

   - Hash 模式：通过 URL 的 hash 部分来模拟不同的页面，适用于不支持 history API 的浏览器。
   - History 模式：利用 HTML5 的 history API 实现的路由，适用于现代浏览器。
   - Abstract 模式：用于非浏览器环境，如 Node.js 服务端渲染。

2. Vue-Router 动态路由的使用和实现原理
   动态路由允许在路由路径中使用参数，例如 /user/:id。实现原理是通过正则表达式匹配 URL，并将匹配的参数传递给组件。

   - 匹配路由
     Vue-Router 在初始化的时候会创建一颗路由树，树的每个节点对应一个路由记录。路由记录包含路径、组件、参数等信息。在匹配路由时，Vue-Router 会遍历这颗路由树，找到与当前 URL 匹配的路由记录，并将其传递给组件。
     遇到动态路由，会将实际的 URL 片段解析并存储在 this.$store.params 中。

   - 解析参数
     当一个路径包含动态参数时，Vue-Router 会使用正则表达式来提取参数值，并将其存储在路由记录的 params 对象中。组件可以通过 this.$route.params 访问这些参数。

   - 更新组件
     当路由参数变化时，Vue-Router 会重新渲染组件。如果组件时复用的，如从/user/1 切换到 /user/2, 组件不会被销毁和重新创建，而是会调用 beforeRouteUpdate 钩子函数，触发 watch 监听 $route 的变化，以便在参数变化时更新组件数据。

3. 完整的导航解析流程

- 导航被触发
- 调用失活组件的 beforeRouteLeave 守卫
- 调用全局的 beforeEach 守卫
- 调用重用组件的 beforeRouteUpdate 守卫
- 调用路由独享的 beforeEnter 守卫
- 解析异步路由组件
- 调用被激活组件的 beforeRouteEnter 守卫
- 调用全局的 beforeResolve 守卫
- 导航被确认
- 调用全局的 afterEach 钩子
- 触发 DOM 更新
- 调用 beforeRouteEnter 守卫传递的 next 回调函数，访问组件实例

4. 异步和同步组件加载区别例子

```js
// 同步组件加载
import MyComponent from "./MyComponent.vue";

// 异步组件加载
const AsyncComponent = defineAsyncComponent(() => import("./MyComponent.vue"));
const AsyncComponent = () => import("./MyComponent.vue");
```

5. 路由历史记录栈

createWebHistory
路由记录依赖于浏览器原生记录

- 跳转时，history.pushState() 方法会被调用
  go, forward, back 方法会调用 history API 对应的方法
  pushState 只会改变地址栏和历史记录，不会自动刷新页面，也不会触发 popstate 事件。
- 浏览器的前进后退操作，会触发 popstate 事件
  window.addEventListener('popstate', (event) => {
  // 处理前进后退操作
  });

createMemoryHistory
路由记录保存在内存中， 浏览器的 url 不会变。
场景：预览的时候，无法将状态信息写入 URL。

- 跳转时，history.pushState() 方法不会被调用
- go, forward, back 方法不会调用 history 对应的方法

createWebHashHistory
路由记录依赖于 URL 的 hash 部分。

- 跳转时，location.hash 会被更新
- go, forward, back 方法会调用 history 对应的方法
