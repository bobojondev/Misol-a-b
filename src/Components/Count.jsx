import React, { useState } from 'react'
import './Countes.css'



const Count = () => {

    let [value, setValue] = useState('')
    let [counts, setCounts] = useState(1)
    let [count1, setCount1] = useState(1)
    function shows(){
        setCounts(Math.floor(Math.random()*9)) 
        setCount1(Math.floor(Math.random()*9)) 


        let c = count1 + counts
        if(c == value){
            alert("siz to'g'ri ishladingiz")
        }else{
            alert("siz noto'g'ri ishladingiz")
        }
        setValue('')
    }

  return (
    <div className='count'>
        <div className="container">
            <div className="count__item">
                <div className="count__left">
                    <div className="count__left-nums1">
                        <p className='plus'>{counts}</p>
                    </div>
                    <div className="count__middle-nums1">
                        <p>+</p>
                    </div>
                    <div className="count__right-nums2">
                        <p className='pluses'>{count1}</p>
                    </div>
                </div>
                <div className="count__right">
                    <div className="count__left-teng">
                        <p>=</p>
                    </div>
                    <div className="count__middle-teng">
                        <input type="number" placeholder='natija' onChange={e => setValue(e.target.value)} />
                    </div>
                    <div className="count__right-teng">
                        <button className='count__right-btn' onClick={s => shows(s)}>check</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count