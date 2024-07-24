
import { Button as Btn} from '@chakra-ui/react'

type Props = {
    content:string
}
function Button({content}: Props) {
  return (
    <Btn colorScheme='blue'  size='sm'>{content}</Btn>
  )
}
export default Button