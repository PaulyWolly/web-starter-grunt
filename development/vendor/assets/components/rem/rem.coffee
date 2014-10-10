define [
], ->
  # rem
  screenWidth = document.documentElement.clientWidth
  newRootFontSize = (10 / 2560) * screenWidth
#  if screenWidth < 992 and screenWidth > 767
  if screenWidth < 1025 and screenWidth > 767
    newRootFontSize *= 1.5
  else newRootFontSize *= 3  if screenWidth < 768
  document.documentElement.style.fontSize = newRootFontSize + "px"

  $html = $('html')
  $(document).ready =>
    $(window).resize ->
      screenWidth = window.innerWidth
      newRootFontSize = (10 / 2560) * screenWidth
#      if screenWidth < 992 and screenWidth > 767
      if screenWidth < 1025 and screenWidth > 767
        newRootFontSize *= 1.5
      else if screenWidth < 768
        newRootFontSize *= 3
      $html.css 'font-size': newRootFontSize + "px"