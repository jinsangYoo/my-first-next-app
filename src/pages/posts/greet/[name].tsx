import {GetServerSideProps} from 'next'
import {GreetParams} from '@/pages/types/greet-params'
import {FC} from 'react'

export const getServerSideProps: GetServerSideProps<GreetParams> = async ({params}) => {
  const {name} = params as GreetParams
  return {
    props: {
      name,
    },
  }
}

interface GreetProps {
  name?: string
}

const Greet: FC<GreetProps> = props => {
  return <h1>Hello, {props.name}!</h1>
}

export default Greet
