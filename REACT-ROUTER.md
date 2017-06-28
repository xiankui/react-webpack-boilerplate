# from react-router to react-router-dom@4.1.1

```
react-router升级到v4时变化较大，被称为动态路由 (Dynamic Routing)
```

## API
- BrowserRouter
  * should be used when you have a server to handle dynamic requests
  * base on HTML5 history API [ie9 polyfill 兼容](https://github.com/devote/HTML5-History-API)
  * 需要服务端解决路由的直接访问问题

- HashRouter
  * should be used for static websites
  * 使用hash (#/)来调度路由，不存在兼容问题

- MemoryRouter
  * 适用于非浏览器环境，如测试

- StaticRouter
 * 适用于服务端渲染

- Route
  * path: String (URL path)
  * exact: Boolean (确定性匹配？)
  * 怎么样渲染对应的路由（三选一）
    - component: Object (渲染的组件)
    - render: Function (常用于再次包装或条件渲染)
    - children: Function (?)
  * props (渲染的组件默认接收的三个属性)
    - match ({params, path, url})
    - location ({pathname})
    - history ({go, goBack, goForward, replace, push, ...})

- Link
  * to: String (pathname)
  * to: Object ({pathname: '', search: '', hash: '', state: ''})
  * replace: Boolean

- NavLink
  * 特殊的Link
  * 可以添加activeClassName: String 或 activeStyle: Object
 
- Switch
  * only render the first one that matches the current pathname.
  * 渲染第一个匹配的路由；可用于匹配默认404

- withRouter
  * 常见于组件connect redux


## resource
* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)