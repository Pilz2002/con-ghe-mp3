import Title from './components/Title';
import './App.scss';
import  ItemComponent  from './components/ItemComponent'
import DB from './db'
import { useState, useEffect } from 'react'
import ButtonG from "./components/ButtonG"
function App() {
  const [input, setInput] = useState('')
  const [datas, setDatas] = useState(() => DB())
  const inputAppCB = (data) => {
    setInput(data)
  }
  const appCallBack = (data) => {
    const newDatas = [...data]
    setDatas(newDatas)
  }
  useEffect(() => {
    const newDatas = datas.sort((a,b)=>b.duration-a.duration)
    appCallBack(newDatas)
  }, [])
  return (
    <div className="App">
      <div className='flex flex-every'>
        <h1 className="f-54">Mới phát hành</h1>
        <ButtonG 
          input={input}
          inputAppCB={inputAppCB}
          datas={datas}
          appCallBack = {appCallBack}
        />
      </div>
      <Title />
      {datas.map((data, index) => 
        <div key = {index}>
          <ItemComponent 
            props = {data}
            datas = {datas}
            
          />
        </div>

      )}
    </div>
  );
}

export default App;
