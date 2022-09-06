import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as S from './StyleList';
import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
`

export default function ToDo(){

  const [input, setInput] = useState()
  const [list, setList] = useState([])

  const Add = () => {
    let info = {
    value: input,
    id: Date.now(),
    status: false
  }
   if(input !== ''){
    setList([...list, info])
    setInput('')
   }else{
     alert('Add a task!') 
   }
  }

  const Del = (id) => {
    const delList = list.filter( info => info.id !== id)
    setList(delList)
  }

  const Clean = () => {
    setList([])
  }

  return(
    <S.Container>
      <GlobalStyle/>
      <S.ToDo>
        <S.Box>
          <S.Title>What are the plans for today?</S.Title>
          <form onSubmit={ (e) => e.preventDefault()}>
            <TextField
              id="outlined-basic"
              label="Task"
              variant="outlined"
              value={input}
              onChange={( e => {setInput(e.target.value)} )}
            />
            <Button variant="text" onClick={() => {Add()}}>ADD</Button>
            <Button variant="text"  onClick={() => {Clean()}}>CLEAN</Button>
          </form>
        </S.Box>
        <S.List>
          <ol>
            {list.map( info => (
              <S.Li>
                <S.IptBox type='checkbox'></S.IptBox>
              {info.value}
              <S.BtnDel onClick={() => {Del(info.id)}}>
                <DeleteIcon/>
              </S.BtnDel>
              </S.Li>
            ) )} 
          </ol>
        </S.List>
      </S.ToDo>
    </S.Container>
  )
}

