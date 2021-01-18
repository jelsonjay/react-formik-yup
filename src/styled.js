import styled from 'styled-components'

export const Styles = styled.div`
h1{
  text-align: center;
  color: red;
}
form{
  display: flex;
  flex-direction: column;
  width:25%;
  margin: 100px auto;
  
  label{
  margin-top: 20px;
}
input, select{
  font-size: 1.2rem;
}
.error{
  color: red;
  font-size: 1rem;
}

}
button{
  background: hsl(184, 91%, 17%);
  padding: 10px;
  color: #fafafa;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 1.5rem;
}
`