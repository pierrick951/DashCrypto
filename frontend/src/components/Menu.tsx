import {
  Menu as Mn,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { FaUser } from "../index.icon";
import { FaChevronDown } from "../index.icon";
type Props = {
  option1: string;
  option2: string;
};

function Menu({option2,option1}: Props) {
  return (
    <Mn>
      <MenuButton colorScheme="blue"  px={3} py={1} as={Button} rightIcon={<FaChevronDown />}>
        <FaUser />
      </MenuButton>
      <MenuList zIndex={30}  minWidth="50px" >
        <MenuItem>{option1}</MenuItem>
        <MenuItem >{option2}</MenuItem>
      </MenuList>
    </Mn>
  );
}
export default Menu;
