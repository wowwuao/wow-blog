import React,{ useCallback, useEffect, useRef, useState } from 'react'
import './index.less'

interface IlistData {
  userName: string,
  text: string,
  likes: number
}
const SlideListItemModel = ({ data,onClose}: { data: IlistData ,onClose:()=>void}) => {
  let { userName, text, likes } = data
  return (
    <div className='list-item-model'>
      <div onClick={onClose} className="list-item-model-close">关闭</div>
      <div>{userName}</div>
      <div>{text}</div>
      <div>{likes}</div>
    </div>
  )
}

const SlideListItem = ({ data,autoScroll }: { data: IlistData,autoScroll:()=>void }) => {
  let { userName, text, likes } = data
  let [isShow, setIsShow] = useState(false)
  const showModel = () => {
    setIsShow(true)
  }
  const closeModel = () => {
    setIsShow(false)
    autoScroll()
  }
  return (
    <>
      <div className='slide-list-item' onClick={showModel}>
        <div className='slide-list-item-avatar'>
          <img
            className='slide-list-item-avatar-img'
            src={"https://p26-passport.byteacctimg.com/img/user-avatar/1e1b1258b43b135af6a1c7b591ab95b5~300x300.image"}
            alt="" />
        </div>
        <div className='slide-list-item-info'>
          <div className='slide-list-item-info-head'>
            <div className='slide-list-item-info-username'>{userName}</div>
            <div className='slide-list-item-info-likes'>{likes}</div>
          </div>
          <div className='slide-list-item-info-content'>
            {text}
          </div>
        </div>
      </div>
      {
        isShow && <SlideListItemModel data={data} onClose={closeModel}/>
      }
    </>

  )
}

const SlideList = ({ data }: {
  data: IlistData[]
}) => {
  let adata = [...data.slice(0, 10), ...data.slice(0, 10)]
  let [isScrolling, setIsScrolling] = useState(true)
  let wrapper = useRef<HTMLDivElement>(null)
  let timer = useRef<number>()

  useEffect(() => {
    let step = 1
    const render = () => {
      if (wrapper.current) {
        wrapper.current.scrollLeft += step;
        if (wrapper.current.offsetWidth + wrapper.current.scrollLeft >= wrapper.current.scrollWidth / 2) {
          wrapper.current.scrollLeft %= wrapper.current.scrollWidth / 2;
        }
        timer.current = window.requestAnimationFrame(render)
      }
    }
    isScrolling && render()
    return () => {
      timer.current && window.cancelAnimationFrame(timer.current)
    }
  }, [isScrolling]);

  const MouseDown = useCallback(() => {
    setIsScrolling(false)
  }, [])
  const autoScroll = useCallback(()=>{
    let timer = setTimeout(() => setIsScrolling(true), 1500)
    return () => {
      clearTimeout(timer)
    }
  },[])
  return (
    <>
      <div className="slide-list" ref={wrapper}
        onMouseDown={MouseDown}
      >
        {
          adata.map((i, index) => <SlideListItem key={index} data={i} autoScroll={autoScroll}/>)
        }
      </div>
    </>

  )
}

export default SlideList