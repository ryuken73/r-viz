const maxLenNum = (aNum, bNum) => (aNum > bNum ? aNum : bNum).toString().length

const num2PadNumArr = (num, len) => {
  const padLeftStr = (rawStr, lenNum) =>
    rawStr.length < lenNum ? padLeftStr("0" + rawStr, lenNum) : rawStr
  const str2NumArr = rawStr => rawStr.split("").map(Number)
  return str2NumArr(padLeftStr(num.toString(), len)).reverse()
}

const isstr = any => Object.prototype.toString.call(any) === "[object String]"

export default class Flip {
  constructor({
    node,
    from = 0,
    to,
    duration = 0.5,
    delay,
    easeFn = pos =>
      (pos /= 0.5) < 1
        ? 0.5 * Math.pow(pos, 3)
        : 0.5 * (Math.pow(pos - 2, 3) + 2),
    systemArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    direct = true,
    separator,
    separateOnly = 0,
    separateEvery = 3
  }) {
    this.beforeArr = []
    this.afterArr = []
    this.ctnrArr = []
    this.duration = duration * 1000
    this.systemArr = systemArr
    this.easeFn = easeFn
    this.from = from
    this.to = to || 0
    this.node = node
    this.direct = direct
    this.separator = separator
    this.separateOnly = separateOnly
    this.separateEvery = separateOnly ? 0 : separateEvery
    this._initHTML(maxLenNum(this.from, this.to))
    this.setSelect(this.from)
    if (to === undefined) return
    if (delay) setTimeout(() => this.flipTo({ to: this.to }), delay * 1000)
    else this.flipTo({ to: this.to })
  }

  _initHTML(digits) {
    this.node.classList.add("number-flip")
    this.node.style.position = "relative"
    this.node.style.overflow = "hidden"
    for (let i = 0; i < digits; i += 1) {
      const ctnr = document.createElement("div")
      ctnr.className = `.ctnr.ctnr${i}`
      ctnr.style.position = "relative"
      ctnr.style.display = "inline-block"
      ctnr.style.verticalAlign = "top" ;
      [...this.systemArr, this.systemArr[0]].forEach(i => {
        const child = document.createElement("div")
        child.className = "digit"
        child.innerHTML = `${i}`
        ctnr.appendChild(child)
      })
      this.ctnrArr.unshift(ctnr)
      this.node.appendChild(ctnr)
      this.beforeArr.push(0)
      if (
        !this.separator ||
        (!this.separateEvery && !this.separateOnly) ||
        i === digits - 1 ||
        ((digits - i) % this.separateEvery != 1 &&
          digits - i - this.separateOnly != 1)
      )
        continue
      const sprtrStr = isstr(this.separator)
        ? this.separator
        : this.separator.shift()
      const separator = document.createElement("div")
      separator.className = "sprtr"
      separator.style.display = "inline-block"
      separator.innerHTML = sprtrStr
      this.node.appendChild(separator)
    }
    const resize = () => {
      this.height = this.ctnrArr[0].clientHeight / (this.systemArr.length + 1)
      this.node.style.height = this.height + "px"
      if (this.afterArr.length) this.frame(1)
      else
        for (let d = 0, len = this.ctnrArr.length; d < len; d += 1)
          this._draw({
            digit: d,
            per: 1,
            alter: ~~(this.from / Math.pow(10, d))
          })
    }
    resize()
    window.addEventListener("resize", resize, {passive: true})
  }

  _draw({ per, alter, digit }) {
    const newHeight = this.ctnrArr[0].clientHeight / (this.systemArr.length + 1)
    if (newHeight && this.height !== newHeight) this.height = newHeight
    const from = this.beforeArr[digit]
    const modNum = (((per * alter + from) % 10) + 10) % 10
    const translateY = `translateY(${-modNum * (this.height || 0)}px)`
    this.ctnrArr[digit].style.webkitTransform = translateY
    this.ctnrArr[digit].style.transform = translateY
  }

  frame(per) {
    let temp = 0
    for (let d = this.ctnrArr.length - 1; d >= 0; d -= 1) {
      const alter = this.afterArr[d] - this.beforeArr[d]
      temp += alter
      this._draw({
        digit: d,
        per: this.easeFn(per),
        alter: this.direct ? alter : temp
      })
      temp *= 10
    }
  }

  flipTo({ to, duration = 0, easeFn, direct }) {
    if (easeFn) this.easeFn = easeFn
    if (direct !== undefined) this.direct = direct
    this.setSelect(to)
    const len = this.ctnrArr.length
    this.beforeArr = num2PadNumArr(this.from, len)
    this.afterArr = num2PadNumArr(to, len)
    const start = Date.now()
    const dur = duration * 1000 || this.duration
    const tick = () => {
      const elapsed = Date.now() - start
      this.frame(elapsed / dur)
      if (elapsed < dur) requestAnimationFrame(tick)
      else {
        this.from = to
        this.frame(1)
      }
    }
    requestAnimationFrame(tick)
  }

  setSelect(num) {
    const len = this.ctnrArr.length
    const numLen = num.toString().length;
    for (let i=0; i < numLen; i++ ){
      this.ctnrArr[i].style.display = 'inline-block';
    }
    if(len > numLen){
      let indexToHide = numLen;
      while(indexToHide !== len ){
        this.ctnrArr[indexToHide].style.display = 'none';
        indexToHide++
      }
    } 
    num2PadNumArr(num, len).forEach((n, digit) => {
      for (let i = 0; i < this.ctnrArr[digit].childNodes.length; i += 1) {
        const el = this.ctnrArr[digit].childNodes[i]
        el.style.userSelect = i === n ? "auto" : "none"
      }
    })
  }
}
