import $utils from "../utils/index";
import Message from "../modules/element";
import Tab from "../modules/tab";
import Modal from "../modules/modal";

const $message = new Message()
// 关键词匹配功能
class KeywordMatch {
  constructor(oRules) {
    // 将对象格式转化成数组并合并去重
    const arr = Object.values(oRules)
    const rules = arr.reduce((total, item) => {
      total = [...total, ...item]
      return total
    }, [])
    const _rules = Array.from(new Set(rules))
    this.oRules = oRules
    this.rules = _rules
    this.init()
  }
  // 初始化
  init() {
    const keywordMatch = document.createElement("div")
    const tpl = `<div id="keywordMatchBtn" class="keyword-btn">敏感词检测</div><div id="keywordListBtn" class="keyword-btn keyword-btn-yellow">敏感词列表</div>`
    keywordMatch.id = 'keywordMatch'
    keywordMatch.innerHTML = tpl
    document.body.appendChild(keywordMatch)
    // 敏感词弹窗
    this.$modal = new Modal({
      id: 'keywordRes',
      title: '敏感词提示'
    })
    // 敏感词列表弹窗
    this.$list = new Modal({
      id: 'keywordList',
      title: '敏感词列表',
      width: 720,
      height: 680,
      align: 'center'
    })
    this.setEvents()
  }
  // 设置事件
  setEvents() {
    const $keywordMatchBtn = document.querySelector('#keywordMatchBtn')
    const $keywordListBtn = document.querySelector('#keywordListBtn')
    $keywordMatchBtn.addEventListener('click', () => {
      this.startMatch()
    })
    $keywordListBtn.addEventListener('click', () => {
      const content = `<div id="uTabs" class="u-tabs"></div>`
      const $content = $utils.parseDom(content)[0]
      // 选项卡
      const $Tab = new Tab({
        $el: $content,
        oData: this.oRules
      })
      this.$list.render($content)
    })
  }
  // 检查页面是否合规
  checkPage() {
    const iframeMain = document.querySelector('#mainFrame')
    const iframeArea = iframeMain.contentDocument.querySelector('.QMEditorIfrmEditArea')
    if (!iframeMain || !iframeArea) {
      $message.setOption({
        message: '请在编辑邮件页面操作',
        type: "error",
        duration: 5000,
      });
      return false
    }
    this.$iframeArea = iframeArea
    return true
  }
  // 开始匹配
  startMatch() {
    if (this.checkPage()) {
      const word = this.$iframeArea.contentDocument.body.innerText
      console.log('当前匹配的文本：', word);
      if (word) {
        this.popMatch(word)
      } else {
        $message.setOption({
          message: '注意：待检测文本为空，请填写正文后再检测，若依然出现问题，请联系开发！',
          type: "error",
          duration: 5000,
        });
      }
    }
  }
  // 高亮匹配，目前对有设置过样式的文本会有BUG，先不用
  lightMatch(word) {
    let isMatch = false
    const regExp = this.rules.map(item => this.getLightRegExp(item))
    regExp.forEach(re => {
      if (re.test(word)) {
        isMatch = true
        word = word.replace(re, '<font class="light" color="#ff0000">$&</font>');
      }
    })
    if (isMatch) {
      this.$iframeArea.contentDocument.body.innerHTML = word
      $message.setOption({
        message: '检测到敏感词，文本已显示成红色',
        type: "warning",
        duration: 3000,
      });
    } else {
      $message.setOption({
        message: '没有检测到敏感词',
        type: "success",
        duration: 3000,
      });
    }
  }
  // 移除高亮匹配
  unLightMatch(word) {
    if (this.checkPage()) {
      const re = new RegExp('(<font class="light" color="#ff0000">|<\/font>)', 'g');
      this.$iframeArea.contentDocument.body.innerHTML = word.replace(re, '')
    }
  }
  // 弹窗提示匹配
  popMatch(word) {
    const regExp = this.getPopRegExp(this.rules)
    console.log('当前使用的正则：', regExp);
    const matches = word.match(regExp)
    let content = ''
    if (matches && matches.length) {
      matches.forEach(item => {
        content += `<li><span title="${item}">${item}</span><i class="u-btn u-copy">复制</i></li>`
      });
      content = `<ul>${content}</ul>`
      const $content = $utils.parseDom(content)[0]
      $content.addEventListener('click', (e) => {
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
      this.$modal.render($content)
      $message.setOption({
        message: '检测到敏感词，已弹窗显示',
        type: "warning",
        duration: 3000,
        showClose: true
      });
    } else {
      $message.setOption({
        message: '没有检测到敏感词',
        type: "success",
        duration: 3000,
      });
      this.$modal.remove()
    }
  }
  // 获取高亮正则
  getLightRegExp(str) {
    const regstr = `/${str}/g`
    return eval(regstr)
  }
  // 获取弹窗正则
  getPopRegExp(arr) {
    const _arr = arr.map(item => {
      return item.replace(/\s+/g, '\\s+').replace(/\./g, '\\.')
    })
    const str = _arr.join('|')
    const regstr = `/\\\['${str}'\\\]/ig`
    return eval(regstr)
  }
}

export default KeywordMatch