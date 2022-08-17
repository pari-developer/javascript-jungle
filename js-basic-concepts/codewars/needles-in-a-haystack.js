var obj = {
    site: "Codewars",
    description: "Lorem ipsum dolor sit...",
    obj2: {
      str: "Yeah, Codewars!",
      num: 123,
      obj3: {
        something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
      }
    }
  };
  var results = search(obj, "Codewars"); //results = ["obj2.obj3.something", "obj2.str", "site"]
  

function search(haystack, needle,path='',res=[]) {
    // firstway
     for(let ob in haystack){
       if(typeof haystack[ob] === 'object'){
         search(haystack[ob],needle,path?`${path}.${ob}`:ob,res)
       }
       
       if(typeof haystack[ob] === 'string' && haystack[ob].includes(needle) ){
         res.push(path?`${path}.${ob}`: ob)
     }
       console.log(res)
       }
       return res.sort();
}


function search(haystack, needle,path='') {
    let res = [];
    for(const [key,value] of Object.entries(haystack)){
        if (value instanceof Object) {
          res.push(...search(value,needle,path ?`${path}.${key}`: key ))
        }else if (typeof value === "string" && value.includes(needle)) {
          res.push(path?`${path}.${key}`:key)
    }
    }
    return res.sort()
    }
    