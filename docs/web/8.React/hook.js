import React from 'react'

//存储上一个状态
export const usePrevious = (value) => {
    const ref = React.useRef()
    React.useEffect(()=>{
        ref.current = value
    })
    return ref.current
}


//持久状态存储
export const usePersistedState = (name,defalutValue) => {
    const [value,setValue] = React.useState(defalutValue)
    const nameRef = React.useRef(name)

    React.useEffect(()=>{
        try {
            const storedValue = localStorage.getItem(name)
            if (storedValue !== null) {
                setValue(storedValue)
            }else{
                localStorage.setItem(nameRef.current,value)
            }
        } catch {
            setValue(defalutValue)
        }
    },[])

    React.useEffect(()=>{
        try {
            localStorage.setItem(nameRef.current,value)
        } catch {}
    },[value])

    React.useEffect(()=>{
        const lastName = nameRef.current
        if (name !== lastName) {
            try{
                localStorage.setItem(name,value)
                nameRef.current = name
                localStorage.removeItem(lastName)
            }catch{}
        }
    },[name])

    return [value,setValue]
}

//执行一次
export const useEffectOnce = (callback,when) => {
    const hasRunOnce = React.useRef(false)
    React.useEffect(()=>{
        if(when && !hasRunOnce.current){
            callback()
            hasRunOnce.current = true
        }
    },[when])
}

//提供一直相反的两个转态
export const useToggler = initialValue => {
    const [value,setValue] = React.useState(initialValue)
    const toggleValue = React.useCallback(()=>setValue(pre=>!pre),[])
    return [value,toggleValue]
}

//时间间隔执行事件
export const useInterval = (callback,delay) => {
    const savedCallback = React.useRef()
    React.useEffect(()=>{
        savedCallback.current = callback
    },[callback])
    React.useEffect(()=>{
        const tick = ()=> {
            savedCallback.current()
        }
        if(delay !== null){
            let id = setInterval(tick,delay)
            return ()=>clearInterval(id)
        }
    },[delay])
}

//监听键盘是否按下的变化
export const useKeyPress = (targetKey) => {
    const [keyPressed,setKeyPressed] = React.useState(false)
    const downHandler = ({key}) => {
        if(key === targetKey) setKeyPressed(true)
    }
    const upHandler = ({key}) => {
        if(key === targetKey) setKeyPressed(false)
    }
    React.useEffect(()=>{
        window.addEventListener('keydown',downHandler)
        window.addEventListener('keyup',upHandler)
        return ()=>{
            window.removeEventListener('keydown',downHandler)
            window.removeEventListener('keyup',upHandler)
        }
    },[])
    return keyPressed
}

//鼠标悬停事件
export const useHover = () => {
    const [isHovering,setIsHovering] = React.useState(false)
    const handleMouseOver = React.useCallback(()=>setIsHovering(true),[])
    const handleMouseOut = React.useCallback(()=>setIsHovering(false),[])
    const nodeRef = React.useRef()
    const callbackRef = React.useCallback((node)=>{
        if(nodeRef.current){
            nodeRef.current.removeEventListener('mouseover',handleMouseOver)
            nodeRef.current.removeEventListener('mouseout',handleMouseOut)
        }
        nodeRef.current = node
        if(nodeRef.current){
            nodeRef.current.addEventListener('mouseover',handleMouseOver)
            nodeRef.current.addEventListener('mouseout',handleMouseOut)
        }
    },[handleMouseOver,handleMouseOut])
    return [callbackRef,isHovering]
}
//跟踪浏览器尺寸
export const useWindowSize = ()=>{
    const [windowSize,setWindowSize] = React.useState({
        width:undefined,
        height:undefined
    })
    React.useEffect(()=>{
        const handleResize = ()=>{
            setWindowSize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',handleResize)
        handleResize()
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return windowSize
}
//滚动窗口执行回调
export const useOnWindowScroll = callback =>{
    const listener = React.useRef(null)
    React.useEffect(()=>{
        if(listener.current){
            window.removeEventListener('scroll',listener.current)
        }
        listener.current = window.addEventListener('scroll',callback)
        return ()=>{
            window.removeEventListener('scroll',listener.current)
        }
    },[callback])
}

//防抖函数
export const useDebounce = (value,delay=1000) => {
    const [debounceValue,setDebouncedValue] = React.useState(value)
    React.useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return ()=>{
            clearTimeout(handler)
        }
    },[value])
    return debounceValue
}

//保存表单中的值
export const useForm = initialValues => {
    const [values,setValues] = React.useState(initialValues)
    return [
        values,
        e=>{
          setValues({
            ...values,
            [e.target.name]:e.target.value
        })}
    ]
}