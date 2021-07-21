
// 匹配列表弹窗
class Modal {
  constructor(options) {
    const _options = {
      id: '',
      title: '提示',
      content: '',
      width: 360,
      height: 480,
      align: 'default'
    }
    this.options = Object.assign(_options, options)
  }
  render($dom) {
    this.remove() // 先清空之前的弹窗
    const $modal = document.createElement('div')
    const { id, title, width, height, align } = this.options
    $modal.id = id
    $modal.classList.add('u-pop')
    if (align === 'center') {
      $modal.classList.add('center')
    }
    $modal.style.width = `${width}px`
    $modal.style.height = `${height}px`
    $modal.innerHTML = `<div class="u-pop-header"><h1>${title}</h1><i class="u-pop-close">×</i></div><div class="u-pop-content"></div>`
    const $header = $modal.children[0]
    const $content = $modal.children[1]
    $header.children[1].addEventListener('click', () => {
      this.remove()
    })
    $content.innerHTML = ''
    document.body.appendChild($modal)
    $content.appendChild($dom)
    $dom = null
    this.$el = $modal
    this.open()
  }
  open() {
    if (this.$el) {
      this.$el.classList.add('u-pop-show')
      this.$el.classList.remove('u-pop-hide')
    }
  }
  remove() {
    if (this.$el) {
      document.body.removeChild(this.$el)
      this.$el = null
    }
  }
}

export default Modal
