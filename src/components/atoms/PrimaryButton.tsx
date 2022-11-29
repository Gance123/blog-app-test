import React, { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  bg: string;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, bg } = props;
  return (
    <Button bg={bg} color="white" onClick={onClick} _hover={{ opacity: "0.6" }}>
      {children}
    </Button>
  );
});
