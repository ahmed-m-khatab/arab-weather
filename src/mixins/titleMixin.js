function getTitle (vm) {
    const { title } = vm.$options
    if (title) return typeof title === 'function' ? 'طقس عربي | ' + title.call(vm) : 'طقس عربي | ' + title
  }
  export default {
    created () {
      const title = getTitle(this)
      if (title) document.title = 'طقس عربي | ' + title
    }
  }