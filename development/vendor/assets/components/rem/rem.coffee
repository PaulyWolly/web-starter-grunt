define [
], ->
  rem = ->
    screenWidth = document.documentElement.clientWidth
    newRootFontSize = (10 / 2560) * screenWidth
    if screenWidth < 1025 and screenWidth > 767
      newRootFontSize *= 1.5
    else
      newRootFontSize *= 3  if screenWidth < 768
    document.documentElement.style.fontSize = newRootFontSize + "px"
    return
  rem()
  window.addEventListener "resize", rem