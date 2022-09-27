---
title: Steps步骤条
---
# 步骤条
当前状态从0开始，0对应着全部状态的起点

全部状态从2开始，1对应着起点，2对应着终点

```tsx
import React, { useState }from 'react'
import Steps from '../../../src/components/Steps'
const ShowModel = () => {
    let [state,setState] = useState(0)
    let [total,setTotal] = useState(5) 
    const addState = ()=>{
        if(state>=total-1){
            return
        }
        setState(state=>state+1)
    }
    const reduceState = ()=>{
        if(state<=0){
            return
        }
        setState(state=>state-1)
    }    
    const addTotalState = ()=>{
        setTotal(total=>total+1)
    }
    const reduceTotalState = ()=>{
        if(total-1<=state || total <=2){
            return
        }
        setTotal(total=>total-1)
    }
    return(
        <div>
            当前状态：
            <input value={state} />
            <br/>
            全部状态：
            <input value={total}/>
            <br/>
            <br/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button onClick={reduceState} style={{width:80}}> 状态-1 </button>
                <button onClick={addState} style={{width:80}}> 状态+1 </button>
            </div>
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button onClick={reduceTotalState} style={{width:80}}> 总状态-1 </button>
                <button onClick={addTotalState} style={{width:80}}> 总状态+1 </button>
            </div>
            <br/>
            <br/>
            <Steps state={state} total={total} />
        </div>
    )
}

export default ()=><ShowModel />
```
