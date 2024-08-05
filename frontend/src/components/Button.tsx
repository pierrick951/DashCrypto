
import { Button as Btn} from '@chakra-ui/react'

type Props = {
    content:string
    event:() => void
}
function Button({content,event}: Props) {
  return (
    <Btn 
    onClick={event}
    colorScheme='blue'  size='sm'>{content}</Btn>
  )
}
export default Button