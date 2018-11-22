/**
 * isInside - determines whether mouse coords
 *            are inside a rectangle
 *
 * @param  {number} mouseX
 * @param  {number} mouseY
 * @param  {dom element} domElement
 * @return {boolean}
 */

 const isInside = (mouseX, mouseY, domElement) => {

  const boundRectCoords = domElement.getBoundingClientRect()
  const x1 = Math.min(boundRectCoords.x, boundRectCoords.x + boundRectCoords.width)
  const x2 = Math.max(boundRectCoords.x, boundRectCoords.x + boundRectCoords.width)
  const y1 = Math.min(boundRectCoords.y, boundRectCoords.y + boundRectCoords.height)
  const y2 = Math.max(boundRectCoords.y, boundRectCoords.y + boundRectCoords.height)

  if (
   (x1 <= mouseX) &&
   (mouseX <= x2) &&
   (y1 <= mouseY) &&
   (mouseY <= y2)
  ) {
   return true
  } else return false
}

export default isInside

