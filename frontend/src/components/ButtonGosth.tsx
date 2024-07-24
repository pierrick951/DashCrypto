import { Button as Btn} from '@chakra-ui/react'


type Props = {

    content:string
}
function ButtonGosth({content}: Props) {
  return (
    <Btn colorScheme='blue' variant='outline' size='sm'>{content}</Btn>
  )
}
export default ButtonGosth