import React from "react";
import clsx from 'clsx';
import './index.less'

const Steps=({state,total}:{
    state:number,
    total:number
})=>{
    return(
        <div className="steps">
            <div className="steps-bar" style={{width:Math.round(state/(total-1)*100)+"%"}}></div>
            {
                Array.from(new Array(total),(_,index)=>{
                    return (
                        <div className={clsx({
                            "steps-filled":index <state,
                            "steps-empty":index>=state
                        })} key={index}>
                            {
                                index==state && (
                                    <div className="steps-success">
                                        <img src="https://commimg.pddpic.com/upload/mobile_tarot_ad/a913c379-e5e0-4571-8e0f-95c9eb88a44f.png.slim.png" alt="" />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Steps