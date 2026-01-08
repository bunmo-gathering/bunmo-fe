"use client";

import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroupProvider";
import IconButton from "@/components/IconButton";
import Title from "@/components/Title";
import { Plus, User2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <Button
        variant="destructive"
        onTap={() => {
          alert("test");
        }}
      >
        asdf
      </Button>
      <Title title="Sample Title" />

      <ButtonGroup type="action">
        <Button>asdf</Button>
        <Button>asdf</Button>
      </ButtonGroup>
      <IconButton size="sm">
        <Plus color="white" />
      </IconButton>
    </>
  );
}
