const tampermonkey = require('./tampermonkey.config')
import './styles/main.scss'
console.log(tampermonkey)

!(function () {
  'use strict';
  // 仿 element ui 消息提示
  class Message {
    constructor() {
      // 消息队列
      this.messageQueue = [];
      // 设置默认值
      this.position = 'top';
      this.message = '';
      this.type = '';
      this.duration = 3000;
      this.body = document.getElementsByTagName('body')[0];
      this.id = 0;
      this.init();
    }
    init() {
      const style = document.createElement("style")
      style.innerHTML = `
        .ui-message {
          min-width: 380px;
          border-width: 1px;
          border-style: solid;
          border-color: #EBEEf5;
          background-color: #edf2fc;
          transform: translateX(-50%);
          position: fixed;
          left: 50%;
          top:20px;
          transition: opacity .3s,transform .4s,top .4s;
          padding: 15px 15px 15px 20px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .ui-message-center{
          justify-content: center;
        }
        
        .ui-message .message-content{
          margin-left: 16px;
          margin: 0;
          padding: 0;
          font-size: 14px;
        }
        
        .ui-message .close-button{
          font-style: normal;
          font-size: 24px;
          color: #999999;
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          opacity: .8;
        }
        
        .ui-message-leave{
          opacity: 0;
          transform: translate(-50%,-100%);
        }
        
        .ui-message-enter{
          opacity: 1;
          transform: translate(-50%,-100%);
        }
        
        .ui-message-info .message-content{
          color: #909399;
        } 
        
        .ui-message-success {
          background-color: #f0f9eb;
          border-color: #e1f3d8;
        }
        
        .ui-message-success .message-content{
          color: #67c23c;
        }
        
        .ui-message-warning {
          background-color: #fdf6ec;
          border-color: #faecd8;
        }
        
        .ui-message-warning .message-content{
          color: #e6a23c;
        } 
        
        .ui-message-error {
          background-color: #fef0f0;
          border-color: #fde2e2;
        }
        
        .ui-message-error .message-content{
          color: #f56c6c;
        }
      `
      document.head.appendChild(style)
    }

    setType(messageDom, type) {
      if (type === '') {
        messageDom.classList.add('ui-message-info');
      } else if (type === 'success') {
        messageDom.classList.add('ui-message-success');
      } else if (type === 'warning') {
        messageDom.classList.add('ui-message-warning');
      } else if (type === 'error') {
        messageDom.classList.add('ui-message-error');
      } else {
        messageDom.classList.add('ui-message-info');// 默认值
      }
    }

    createTextDom(messageDom, message) {
      const p = document.createElement('p');
      p.classList.add('message-content');
      p.textContent = message || this.message;
      messageDom.appendChild(p);
    }

    removeMessageDom(messageDom, targetId) {
      const startIndex = this.messageQueue.findIndex(message => message.id === targetId);
      this.messageQueue.splice(startIndex, 1);
      this.updateMessageDom(startIndex);
      //增加移除动画
      messageDom.classList.add('ui-message-leave');
      setTimeout(() => {
        this.body.removeChild(messageDom);
      }, 400);
    }

    setOption(options) {
      if (typeof options !== "object") {
        options = {};
      }
      const messageDom = document.createElement('div');
      messageDom.classList.add('ui-message');
      messageDom.classList.add('ui-message-leave');
      if (options.center === true) {
        messageDom.classList.add('ui-message-center');
      }
      const targetId = this.id;
      this.messageQueue.push({
        id: targetId,
        messageDom,
      });
      this.setType(messageDom, options.type);
      this.createTextDom(messageDom, options.message);
      this.setCurrentMessageDom();
      this.body.appendChild(messageDom);
      //增加新增动画
      setTimeout(() => {
        messageDom.classList.remove('ui-message-leave');
      }, 100);
      let i = null;
      if (options.showClose === true) {
        i = document.createElement('i');
        i.innerText = '×';
        i.classList.add('close-button');
        messageDom.appendChild(i);
      }
      const time = isNaN(Number(options.duration)) ? this.duration : Number(options.duration);
      // 如果duration为0则不需要setTimeout
      let timeId = -1;
      if (time !== 0) {
        timeId = setTimeout(() => {
          this.removeMessageDom(messageDom, targetId);
        }, time);
      }
      if (options.showClose === true) {
        i.addEventListener('click', () => {
          this.removeMessageDom(messageDom, targetId);
          if (targetId !== -1) {
            clearTimeout(timeId);
          }
        });
      }
      this.id++;
    }

    setCurrentMessageDom() {
      const index = this.messageQueue.length - 1;
      const targetDom = this.messageQueue[index].messageDom;
      targetDom.style.zIndex = `${3000 + index}`;
      targetDom.style.top = `${64 * index + 20}px`;
    }

    updateMessageDom(startIndex) {
      for (let i = startIndex; i < this.messageQueue.length; i++) {
        const messageDom = this.messageQueue[i].messageDom;
        messageDom.style.zIndex = `${3000 + i}`;
        // 暂不支持换行功能，换行后获取上一个元素的height和top来更新下一个元素的top
        messageDom.style.top = `${64 * i + 20}px`;
      }
    }
  }

  const $message = new Message()
  // 工具类
  const utils = {
    // 转成虚拟dom
    parseDom(arg) {
      const $el = document.createElement("div")
      $el.innerHTML = arg
      return $el.childNodes
    },
    // 需要https
    copy(text) {
      navigator.clipboard.writeText(text).then(() => {
        $message.setOption({
          message: '复制成功',
          type: "success",
          duration: 3000,
        });
      }, function (err) {
        $message.setOption({
          message: '复制出错，请手动复制',
          type: "warning",
          duration: 3000,
        });
        console.error(err);
      });
    }
    // 该功能暂未使用
    // copy(text) {
    //   const input = document.createElement('input');
    //   input.setAttribute('readonly', 'readonly'); // 兼容在iOS环境下瞬间拉起键盘又缩回的闪烁；
    //   input.setAttribute('value', text);
    //   document.body.appendChild(input);
    //   input.setSelectionRange(0, text.length); // 还是因为在iOS环境下，input.select()没有选中全部内容。
    //   if (document.execCommand('copy')) {
    //     document.execCommand('copy');
    //     console.log('复制成功');
    //   }
    //   document.body.removeChild(input);
    // }
  }

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
    static initStyle() {
      const style = document.createElement("style")
      style.innerHTML = `
        .u-pop {
          border-radius: 5px;
          background: #ffffff;
          box-shadow: 0px 0px 15px rgb(0 0 0 / 50%);
          position: fixed;
          top: 30px;
          right: 30px;
          z-index: 999;
          display: none;
          overflow: hidden;
        }
        .u-pop.center {
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
        .u-pop.u-pop-show {
          display: block;
        }
        .u-pop.u-pop-hide {
        }
        .u-pop .u-pop-header {
          height: 20px;
          padding: 15px;
          background: #f5f5f5;
          overflow: hidden;
          position: relative;
        }
        .u-pop .u-pop-header h1 {
          font-size: 16px;
          margin: 0;
        }
        .u-pop .u-pop-header i {
          width: 24px;
          height: 24px;
          line-height: 20px;
          text-align: center;
          font-style: normal;
          font-size: 36px;
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
        }
        .u-pop .u-pop-content {
          overflow-y: auto;
          height: calc(100% - 50px);
          box-sizing: border-box;
        }
        .u-pop .u-pop-content ul {
          margin: 0;
          padding: 0;
        }
        .u-pop .u-pop-content ul li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          list-style: none;
          padding: 8px 15px;
        }
        .u-pop .u-pop-content ul li+li {
          border-top: 1px dashed #cccccc;
        }
        .u-pop .u-pop-content ul li span {
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .u-btn {
          font-size: 12px;
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
          padding: 4px 8px;
          font-style: normal;
          border-radius: 4px;
          text-align: center;
          border: 1px solid #dcdfe6;
          cursor: pointer;
          flex-shrink: 0;
          margin-left: 10px;
          text-decoration: none;
        }
      `
      document.head.appendChild(style)
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
    static initStyle () {
      const style = document.createElement("style")
      style.innerHTML = `
        .u-tabs {
          height: 100%;
          box-sizing: border-box;
          border: 1px solid #dcdfe6;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
          padding-left: 120px;
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .u-tabs-header {
          width: 120px;
          background-color: #f5f7fa;
          overflow-x: hidden;
          overflow-y: auto;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          height: 100%;
          border-right: 1px solid #dcdfe6;
        }
        .u-tabs-header-item {
          width: 100%;
          padding: 0 20px;
          height: 50px;
          line-height: 50px;
          box-sizing: border-box;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          position: relative;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
          border-bottom: 1px solid #dcdfe6;
          color: #909399;
          cursor: pointer;
        }
        .u-tabs-header-item.active{
          color: #409eff;
          background-color: #fff;
        }
        .u-tabs-header-item:first-child{
          border-top-color: transparent;
        }
        .u-tabs-content {
          height: 100%;
        }
        .u-tabs-content-item {
          display: none;
          overflow: auto;
          height: 100%;
        }
        .u-tabs-content-item.active{
          display: block;
        }
      `
      document.head.appendChild(style)
    }
    render() {
      const {$el, oData} = this.options
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
            utils.copy(text)
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
        arr.forEach(({title, data}) => {
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
      const style = document.createElement("style")
      style.innerHTML = `
        #keywordMatch {
          position: fixed;
          bottom: 30%;
          right: 65px;
          z-index: 999999;
        }
        .keyword-btn {
          font-size: 16px;
          text-align: center;
          letter-spacing: 2px;
          text-decoration: none;
          color :#fff;
          position: relative;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        .keyword-btn:active {
          top:3px;
        }
        .keyword-btn {
          background-color: #3bb3e0;
          background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(44,160,202)), color-stop(1, rgb(62,184,229)) );
          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
        }
        .keyword-btn:active {
          background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(62,184,229)), color-stop(1, rgb(44,160,202)) );
          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
        }
        .keyword-btn-yellow {
          margin-top: 20px;
          background-color: #e0963b;
          background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(202 139 44)), color-stop(1, rgb(229 185 62)) );
          box-shadow: inset 0px 1px 0px #eccb2a, 0px 5px 0px 0px #855815, 0px 10px 5px #999;
        }
        .keyword-btn-yellow:active {
          background-image: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(229 185 62)), color-stop(1, rgb(202 139 44)) );
          box-shadow: inset 0px 1px 0px #eccb2a, 0px 2px 0px 0px #855815, 0px 5px 3px #999;
        }
      `
      const keywordMatch = document.createElement("div")
      const tpl = `<div id="keywordMatchBtn" class="keyword-btn">敏感词检测</div><div id="keywordListBtn" class="keyword-btn keyword-btn-yellow">敏感词列表</div>`
      keywordMatch.id = 'keywordMatch'
      keywordMatch.innerHTML = tpl
      document.head.appendChild(style)
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
        const $content = utils.parseDom(content)[0]
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
        const $content = utils.parseDom(content)[0]
        $content.addEventListener('click', (e) => {
          if (e.target.classList.contains('u-copy')) {
            const text = e.target.previousSibling.innerText
            utils.copy(text)
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

  // 初始化插件
  const ar = ['مراجعة', 'نجمة', 'معدل', 'سلبي', 'إيجابي', 'إزالة', 'حذف', 'تغيير', 'تتغير', 'تحديث', 'تعديل', 'تخلص من', 'خبرة التسوق', 'ردود الفعل', 'موقع الكتروني', 'حلقة الوصل', 'شكرا', 'شكرا لكم', 'إذا كنت بحاجة إلى أي مساعدة أخرى، فلا تتردد في الاتصال بنا', 'رقم التعريف الخاص بالطلب', 'عنوان', 'موقعك', 'خصم', 'ترقية وظيفية', 'السعر']
  const de = ['Bewertung', 'Sternen', 'Rezension', 'Comment', 'Kommentar', 'Negativ', 'Positiv', 'Schlecht', 'Gut', 'Entfernen', 'Löschen', 'Veränderung', 'Aktualisieren', 'Bearbeiten', 'Beseitigen, abschütteln', 'Kauffserfahrungen', 'Feedback', 'www.', 'Webseite', 'Verknüpfung', 'Danke, vielen dank, dankschön, ', 'Wenn Sie andere Hilfe brauchen, kontaktieren Sie bitte uns, werden wir Ihnen helfen. ', 'Bestellnummer', 'sku', 'Asin', 'Adresse', 'Ort', 'Rabatt', 'Coupon', 'Gutschein', 'Beförderung', 'Preis', 'herunterladen']
  const fr = ['Commentaire', 'Évaluation', 'Avis', 'Étoile', 'Taux', 'Négatif', 'Positif', 'Mauvais', 'Bon', 'Retirer', 'Changer', 'Renouveller', 'Mettre à jour', 'Éditer', 'Expérience d\'achat', 'Feedback', 'www.', 'Site', 'Lien', 'Merci', 'Je vous remercie', 'si vous avez besoin d\'une autre aide, n\'hésitez pas à nous contacter', 'numéro de commande', 'sku', 'Asin', 'Adresse', 'Emplacement', 'Remise', 'Promotion', 'Code', 'Prix', 'Télécharger']
  const nl = ['Recensie', 'Ster', 'Klantenrecensies', 'Beoordeling', 'Negatief', 'Positief', 'Slecht', 'Verwijderen', 'Verandering', 'Bijwerken', 'Bewerk', 'Van afkomen', 'Koopervaring', 'terugkoppeling', 'www.', 'Website', 'Koppeling', 'bedankt', 'dank je', 'Als u nog andere hulp nodig heeft, neem dan gerust contact met ons op', 'Order ID', 'sku', 'Asin', 'Adres', 'Plaats', 'Korting', 'Promotie', 'Prijs', 'downloaden']
  const ja = ['レビュー', '評価', '星', '評定', '評点付け', 'ネガティブ', 'ポジティブ', '悪い', '低い', '削除', 'デリート', '交換', 'チェンジ', '更新', '修正', 'アップデート', '編集', 'エディット', '取り除く', 'ショッピング体験', 'フィードバック', 'www.', '注文ID', '注文番号', 'Sku ', 'Asin', '住所', 'アドレス', '割引', '値引き', 'ディスカウント', '販促', '販売促進', 'プロモーション', '値段', '価格', '保証']
  const sv = ['Recension', 'Stjärna', 'Betygsätta', 'Betyg', 'Negativ', 'Positiv', 'Dålig', 'Avlägsna', 'Radera', 'Förändra', 'Uppdatering', 'Redigera', 'Göra sig av med', 'Shoppingupplevelse', 'feed-back', 'www.', 'Hemsida', 'Länk', 'tack', 'tack', 'om du behöver någon annan hjälp är du välkommen att kontakta oss', 'Beställnings-ID', 'sku', 'Asin', 'Adress', 'Plats', 'Rabatt', 'Befordran', 'Pris', 'ladda ner']
  const es = ['review', 'reseña', 'Estrella', 'Ratio', 'Puntuación', 'Negativo', 'Positivo', 'Malo', 'Quitar', 'Eliminar', 'Cambiar', 'Actualizar', 'Editar', 'Quitar', 'Experiencia de compra', 'feedback', 'Valoración', 'www.', 'Sitio web', 'Enlace', 'Gracias', 'gracias', 'Si necesita alguna ayuda, no dude en ponerse en contacto con nosotros.', 'ID del pedido', 'sku', 'Asin', 'Dirección', 'Ubicación', 'Descuento', 'Promoción', 'Precio', 'descargar']
  const it = ['Recensione', 'Stella', 'Vota', 'Valutazione', 'Negativo', 'Positivo', 'Male', 'Rimuovere', 'Elimina', 'Modificare', 'Aggiornare', 'correggere', 'Liberarsi di', 'Esperienza di acquisto', 'feedback', 'www.', 'Sito web', 'Link', 'Grazie', 'grazie', 'se hai bisogno di altro aiuto, non esitare a contattarci', 'ID ordine', 'sku', 'Asin', 'Indirizzo', 'Posizione', 'Sconto', 'Promozione', 'Prezzo', 'Scarica']
  const en = ['Review', 'Star', 'Rate', 'Rating', 'Negative', 'Positive', 'Bad', 'Remove', 'Delete', 'Change', 'Update', 'Edit', 'Get rid of', 'Shopping experience', 'feedback', 'www.', 'Website', 'Link', 'thanks', 'thank you', 'if you need any other help', 'please feel free to contact us', 'Order ID', 'sku', 'Asin', 'Address', 'Location', 'Discount', 'Promotion', 'Price', 'download']

  // 增加样式
  Tab.initStyle()
  Modal.initStyle()
  // 
  const oRules = {
    ar, de, fr, nl, ja, sv, es, it, en
  }
  const keywordMatch = new KeywordMatch(oRules)
})();