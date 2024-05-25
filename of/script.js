async function tomfoolery() {
  document.documentElement.requestFullscreen()
  document.getElementById("video").style.opacity = "1"
  document.getElementById("main_container").style.cursor = "none"
  document.getElementById("video").style.cursor = "none"

  document.getElementById("video").play()
}