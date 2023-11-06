// 要素を取得する
const buttons = document.querySelectorAll('.btn')

// 取得したbutton要素分ループ
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    // クリック位置の座標を取得
    const x = e.clientX
    const y = e.clientY

    // buttonのView上の位置を取得
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // エフェクト発生場所計算
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // Ripple Effectを作る
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside /*+ 'px'*/
    circle.style.left = xInside /*+ 'px'*/

    this.appendChild(circle)
  })
})