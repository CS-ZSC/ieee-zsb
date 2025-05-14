import React, { Dispatch, SetStateAction, useState } from "react";
import { chakra, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { IconType } from "react-icons";

const MotionBox = chakra(motion.div);

const MotionList = chakra(motion.ul);
const MotionListItem = chakra(motion.li);

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
  closed: {
    scaleY: 0,
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
};
const itemVariants = {
  open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
  closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
};


interface OptionProps {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Option: React.FC<OptionProps> = ({ text, Icon, setOpen }) => {
  return (
    <MotionListItem
      variants={itemVariants}
      onClick={() => setOpen(false)}
      listStyleType="none"
      display="flex"
      alignItems="center"
      gap={2}
      w="full"
      p={2}
      fontSize="xs"
      fontWeight="medium"
      rounded="md"
      cursor="pointer"
      //   _hover={{ backgroundColor: hoverBg, color: hoverColor }}
      //   color={textColor}
    >
      <chakra.span>
        <Icon />
      </chakra.span>
      <Box as="span">{text}</Box>
    </MotionListItem>
  );
};

export default function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      //   bg={bg}
    >
      <MotionBox animate={open ? "open" : "closed"} position="relative">
        <Button
          onClick={() => setOpen((prev) => !prev)}
          bg="indigo.500"
          color="indigo.50"
          _hover={{ bg: "indigo.600" }}
          transition="all"
        >
          <Box
            as="span"
            fontWeight="medium"
            fontSize="sm"
            // color={open ? "text-3" : "w"}
          >
            Post actions
          </Box>
          <chakra.span as={motion.span}>
            <FiChevronDown />
          </chakra.span>
        </Button>

        <MotionList
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          display="flex"
          flexDirection="column"
          gap={2}
          p={2}
          rounded="lg"
          //   bg={bg}
          //   boxShadow={shadow}
          position="absolute"
          top="120%"
          left="50%"
          w="48"
          overflow="hidden"
          zIndex={2}
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
        </MotionList>
      </MotionBox>
    </Box>
  );
}
