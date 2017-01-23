### 独立构建和运行时构建

有两种构建方式可用，一种是独立构建，一种是运行时构建，两者的区别是，独立构建包含模板编辑器而独立构建不包含。

模板编辑器负责将vue模板字符串编译成纯js渲染函数。如果你需要使用`template`，那么你需要编译器。

- 独立构建包含编辑器并且支持模板选项，它也依赖于浏览器接口，所以你不能在服务器渲染中使用它。
- 运行时构建不需要包含模板编辑器，并且不支持`template`属性。你只能在运行时构建中使用`render`属性，但是单页面组件是可以使用的，因为单页面组件模板在构建的时候将单页面组件模板预编译成`render`函数。运行时构建大约比独立构建轻30%，压缩之后是18.01kb。

默认情况下使用运行时构建，在webpack位置中添加下面的代码可以设置成独立构建。
``` js
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}
```

使用Browserify,你可以在package.json中添加别名
``` js
"browser": {
  "vue": "vue/dist/vue.common"
},

不要像这样引入vue，`import Vue from 'vue/dist/vue.js'` -因为在vue中还引入了一些第三方库和工具，这样会导致同时加载独立构建和运行时构建并且导致错误。

### Standalone vs. Runtime-only Build

There are two builds available, the standalone build and the runtime-only build. The difference being that the former includes the **template compiler** and the latter does not.

The template compiler is responsible for compiling Vue template strings into pure JavaScript render functions. If you want to use the `template` option, then you need the compiler.

- The standalone build includes the compiler and supports the `template` option. **It also relies on the presence of browser APIs so you cannot use it for server-side rendering.**

- The runtime-only build does not include the template compiler, and does not support the `template` option. You can only use the `render` option when using the runtime-only build, but it works with single-file components, because single-file components' templates are pre-compiled into `render` functions during the build step. The runtime-only build is roughly 30% lighter-weight than the standalone build, weighing only {{ro_gz_size}}kb min+gzip.

By default, the NPM package exports the **runtime-only** build. To use the standalone build, add the following alias to your Webpack config:

``` js
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}
```

For Browserify, you can add an alias to your package.json:

``` js
"browser": {
  "vue": "vue/dist/vue.common"
},
```

<p class="tip">Do NOT do `import Vue from 'vue/dist/vue.js'` - since some tools or 3rd party libraries may import vue as well, this may cause the app to load both the runtime and standalone builds at the same time and lead to errors.</p>

