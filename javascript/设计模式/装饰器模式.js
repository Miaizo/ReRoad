// 打开模态框
function openModal () {
  
}

// 改变按钮文本
function changeButtonText () {
  
}

// 按钮置灰
function disableButton () {

}

// 整合
function changeButtonStatus () {
  changeButtonText()
  disableButton()
}

// 调用
document.getElementById('open').addEventListener('click', function() {
  openModal()
  changeButtonStatus()
})