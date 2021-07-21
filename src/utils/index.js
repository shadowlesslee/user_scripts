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
    return new Promise((resolve, reject) => {
      navigator.clipboard.writeText(text).then(() => {
        resolve()
      }, function (err) {
        reject(err)
      });
    })
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

export default utils