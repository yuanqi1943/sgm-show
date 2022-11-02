export const getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object"
    };
    if (obj instanceof Element) {
      return "element";
    }
    return map[toString.call(obj)];
  };
  /**
   * 对象深拷贝
   */
  export const deepClone = data => {
    var type = getObjType(data);
    var obj;
    if (type === "array") {
      obj = [];
    } else if (type === "object") {
      obj = {};
    } else {
      // 不再具有下一层次
      return data;
    }
    if (type === "array") {
      for (var i = 0, len = data.length; i < len; i++) {
        obj.push(deepClone(data[i]));
      }
    } else if (type === "object") {
      for (var key in data) {
        obj[key] = deepClone(data[key]);
      }
    }
    return obj;
  };

  //下载
  export function downloadFile(file,type='text/csv;charset=utf-8;',filename='download.csv'){
    const blob = new Blob([file],{type:type})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden','')
    a.setAttribute('href',url)
    a.setAttribute('download',filename)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  
//获取当月最后一天的日期
export function getLastDay(y,m){
  var d = new Date(y, m, 0).getDate(); //获取当月最后一日
  d = d < 10 ? '0' + d : d; //日数补 0
  return [y,m,d].join("-")
}