"use client";

import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Title from "@/components/Title";
import ButtonGroupProvider from "@/components/ButtonGroupProvider";

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

      <ButtonGroupProvider type="action">
        <Button>asdf</Button>
        <Button>asdf</Button>
      </ButtonGroupProvider>
      <Avatar size="xl" imageUrl="" status="indicator" />
    </>
  );
}
