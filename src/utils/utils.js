export  default function recursiveActive(target,res,index,isOpen){
  if(index==res.length){
    return
  }
  target=target[res[index]]
  target.active=isOpen
  recursiveActive(target,res,index+1,isOpen)
}