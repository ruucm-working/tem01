export function grabColor(colorString) {
  const matchColors = /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/
  return matchColors.exec(colorString)
}

export function grabColorName(colorString) {
  const match = /\{(.*?)\}/
  var res = match.exec(colorString)
  return res ? res[0] : null
}
