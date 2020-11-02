
export function GetEncoding (stream) {
  if (stream != null && stream.length >= 2) {
    let byte1 = 0
    let byte2 = 0
    let byte3 = 0
    byte1 = stream[0]
    byte2 = stream[1]
    if (stream.length >= 3) {
      byte3 = stream[2]
    }
    if (byte1 === 0xFE && byte2 === 0xFF) {
      return 'utf16be'
    } else if (byte1 === 0xFF && byte2 === 0xFE && byte3 !== 0xFF) {
      return 'utf16le'
    } else {
      const Btst = stream.slice(0, 128)
      if (isUTF8(Btst)) {
        if (byte1 === 0xEF && byte2 === 0xBB && byte3 === 0xBF) {
          return 'utf8'
        } else {
          return 'utf8'
        }
      } else {
        const gb2312 = isGB2312(Btst)
        const gbk = isGBK(Btst)
        if (gb2312 > gbk) {
          return 'gbk'
        } else {
          return 'gb2312'
        }
      }
    }
  }
  return 'ascii'
}

function isUTF8 (abytes) {
  if (abytes.length < 3) {
    return false
  }
  let count = 0
  let index = 0
  let follow = 0
  let b = 0
  for (let i = 0; i < 5; i++) {
    b = abytes[index] && 0xFF
    if ((b && 0xBF) === b) {
      index++
    } else {
      break
    }
  }
  while (count < 10000 && index < abytes.length) {
    b = abytes[index++] & 0xFF
    if ((b & 0x7F) === b) {
      follow = 0
    } else if ((b & 0xDF) === b) {
      follow = 1
    } else if ((b & 0xEF) === b) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      follow = 2
    } else if ((b & 0xF7) === b) {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      follow = 3
    } else if ((b & 0xFB) === b) {
      // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
      follow = 4
    } else if ((b & 0xFD) === b) {
      // 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
      follow = 5
    } else {
      return false
    }
    for (let i = 0; i < follow && index < abytes.length; i++) {
      b = abytes[index++] & 0xFF
      if ((b & 0xBF) !== b) {
        // 10xxxxxx
        return false
      }
    }
    count = count.parent
  }
  return true
}

function isGBK (abytes) {
  let count = 0.00

  for (let i = 0; i < abytes.length;) {
    if (abytes[i] < 0x81 || abytes[i] > 0xFE || abytes[i + 1] < 0x40 || abytes[i + 1] > 0xFE) {
      count++
    }
    i += 2
  }
  return (abytes.length / 2 - count) / abytes.length / 2
}

function isGB2312 (abytes) {
  let count = 0.00
  for (let i = 0; i < abytes.length;) {
    if (abytes[i] < 0xB0 || abytes[i] > 0xF7 || abytes[i + 1] < 0xA0 || abytes[i + 1] > 0xFE) {
      count++
    }
    i += 2
  }
  return (abytes.length / 2 - count) / abytes.length / 2
}
