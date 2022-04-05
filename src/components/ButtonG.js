import { useRef } from 'react'
import text from '../function/textProcessing'
let count = 0
function ButtonG({ input, inputAppCB, datas, appCallBack }) {
    const ip = useRef()
    const inputRef = ip.current
    
    const handleInput = (e) => {
        inputAppCB(e.target.value)
        
    }
    const handleDelete = () => {
        const newDatas =datas.filter((song) => text(song.nameMusic) !== text(input))
        appCallBack(newDatas)
        inputAppCB('')
        inputRef.focus()
    }

    const handleSort = () => {
        count++
        if(count%2==0) {
            var newDatas = datas.sort((a,b)=>a.duration-b.duration)
        }
        else
        {
             var newDatas = datas.sort((a,b)=>b.duration-a.duration)
        }
        appCallBack(newDatas)

    }
    
    return (
        <div className='flex middle'>
        <input 
            className='input-style'
            placeholder='Nhập tên bài hát ... '
            onChange={handleInput}
            value={input}
            ref={ip}
        />
        <div className='container-Btn'>
            <button className="btn-Edit">Edit</button>
            <button className="btn-Del" onClick={handleDelete}>Delete</button>
            <button className='btn-Sort' onClick={handleSort}>Sort</button>
        </div>
        </div>
    )
}

export default ButtonG