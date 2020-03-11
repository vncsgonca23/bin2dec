import React,{useRef} from 'react';
import {Form} from '@unform/web'
import Input from './components/Input'
import GlobalStyle from './styles/global'
import {Bin2Dec,Field,Container} from './styles/styles'
function App() {
  const formRef = useRef(null)
  function handleFormatBinToDec(data){
    if (data.bin2dec.match(/^[0-1]+$/g) === null) {
      formRef.current.setErrors({bin2dec:'Enter either 0 or 1'})
      return
    }
    let decimal = 0
    for(let index=data.bin2dec.length-1;index>=0;index--){
      decimal += parseInt(data.bin2dec[index])*Math.pow(2,data.bin2dec.length-1-index)
    }
    formRef.current.setData({dec:`${String(decimal)}`})
    formRef.current.setErrors({})
  }
  return (
    <>
    <GlobalStyle/>
    <Container>
    <Bin2Dec>
      <h1>Binary to Decimal Converter</h1>
     <Form onSubmit={handleFormatBinToDec} ref={formRef}>
       <Field>
       <label htmlFor="">Binary Input</label>
       <Input name="bin2dec"/>
       <button type="submit">Formatar</button>
       </Field>
       <Field>
         <label htmlFor="">Decimal Output</label>
       <Input name="dec" disabled/>
       </Field>
     </Form>
    </Bin2Dec>
    </Container>
    </>
  );
}

export default App;
