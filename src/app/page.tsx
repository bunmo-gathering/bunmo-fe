"use client";

import Button from "@/components/button";
import ButtonGroup from "@/components/ButtonGroupProvider";
import Title from "@/components/Title";

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
    </>
  );
}
