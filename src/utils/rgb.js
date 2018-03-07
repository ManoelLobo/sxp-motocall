const decToHex = decimal => decimal.toString(16).length > 1 ?
  decimal.toString(16) :
  "0" + decimal.toString(16);

export default function rgb(red, green, blue) {
  return `#${decToHex(red)}${decToHex(green)}${decToHex(blue)}`;
}