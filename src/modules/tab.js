

// 选项卡
class Tab {
  constructor(options) {
    const _options = {
      $el: null,
      oData: {}
    }
    this.options = Object.assign(_options, options)
    this.render()
  }
  render() {
    const { $el, oData } = this.options
    if ($el) {
      $el.innerHTML = this.getTabs(oData)
      const $headers = $el.querySelectorAll('.u-tabs-header-item')
      const $contents = $el.querySelectorAll('.u-tabs-content-item')
      $headers[0].classList.add('active')
      $contents[0].classList.add('active')
      $el.addEventListener('click', (e) => {
        if (e.target.classList.contains('u-tabs-header-item')) {
          const index = Array.from($el.querySelectorAll('.u-tabs-header-item')).indexOf(e.target);
          this.changeTab(index)
        }
        if (e.target.classList.contains('u-copy')) {
          const text = e.target.previousSibling.innerText
          $utils.copy(text).then(() => {
            $message.setOption({
              message: '复制成功',
              type: "success",
              duration: 3000,
            });
          }).catch((err) => {
            $message.setOption({
              message: '复制出错，请手动复制',
              type: "warning",
              duration: 3000,
            });
            console.log(err);
          })
        }
      })
      this.$headers = $headers
      this.$contents = $contents
      this.$el = $el
    }
  }
  changeTab(index) {
    this.$headers.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
    this.$contents.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }
  getTabs(oData) {
    const arr = this.objToArr(oData)
    let header = ''
    let content = ''
    if (arr && arr.length) {
      arr.forEach(({ title, data }) => {
        let lis = ''
        data.forEach(val => {
          lis += `<li><span title="${val}">${val}</span><i class="u-btn u-copy">复制</i></li>`
        });
        header += `<div class="u-tabs-header-item">${title}</div>`
        content += `<div class="u-tabs-content-item"><ul>${lis}</ul></div>`
      });
      return `<div class="u-tabs-header">${header}</div><div class="u-tabs-content">${content}</div>`
    } else {
      return '<div>暂无敏感词数据，请联系技术添加</div>'
    }
  }
  objToArr(oData) {
    return Object.entries(oData).map(item => {
      return {
        title: this.getName(item[0]),
        data: item[1]
      }
    })
  }
  getName(code) {
    let res
    switch (code) {
      case 'ar':
        res = '阿拉伯'
        break;
      case 'de':
        res = '德语'
        break;
      case 'fr':
        res = '法语'
        break;
      case 'nl':
        res = '荷兰语'
        break;
      case 'ja':
        res = '日语'
        break;
      case 'sv':
        res = '瑞典语'
        break;
      case 'es':
        res = '西语'
        break;
      case 'it':
        res = '意语'
        break;
      case 'en':
        res = '英语'
        break;
      default:
        res = '-'
        break;
    }
    return res
  }
}

export default Tab