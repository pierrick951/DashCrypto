import { Button as Btn } from "@chakra-ui/react";

type Props = {
  content: string;
  event: () => void;
  ico: JSX.Element;
};


function Button({ content, event ,ico}: Props) {
  return (
    <Btn onClick={event} colorScheme="blue" size="sm"className="flex flex-row gap-2">
      <span>{content}</span>
      <span className="text-xl hidden md:block">{ico}</span>
    </Btn>
  );
}
export default Button;
