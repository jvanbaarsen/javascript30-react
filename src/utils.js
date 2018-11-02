export function setComponentClass(className) {
  const htmlEl = document.querySelector("html")
  htmlEl.classList.remove(...htmlEl.classList)
  htmlEl.classList.add(className)
}
