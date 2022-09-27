import React, { useEffect, useRef, useState } from "react";
import styles from './index.module.less'
const ProductCard = ({text}:{text:string}) => {
  return (
    <div className={styles.card}>
      {text}
    </div>
  )
}

let Data = Array.from(new Array(10),(_,index)=>Array.from(new Array(20),(_,i)=>String(20*index+i+1)))
let index = 0

const LoadOnDemandList = () => {
  let listRef = useRef<HTMLDivElement>(null)
  let [data,setData] = useState(Data[index])

  let getNewData = (i:number) =>{
    return Data[i]
  }

  const onListScroll = () => {
    if(listRef.current){
      let scrollTop = listRef.current.scrollTop
      let scrollHeight = listRef.current.scrollHeight
      let clientHeight = listRef.current.clientHeight

      if(scrollHeight - scrollTop -300 <= clientHeight){
        let newData = getNewData(++index)
        newData && setData(data=>data.concat(newData))
      }
    }
  }

  useEffect(()=>{
    return ()=>{
      index = 0
    }
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.list} ref={listRef} onScroll={onListScroll}>
        {data.map(v=><ProductCard text={v} />)}
      </div>
    </div>
  )
}

export default LoadOnDemandList