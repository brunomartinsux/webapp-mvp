import styled from 'styled-components'
import firebase from '../firebase/initFirebase'

firebase()

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {


  return <Title>My page</Title>
}
