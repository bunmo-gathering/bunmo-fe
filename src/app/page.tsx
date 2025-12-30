"use client";

import Button from "@/components/button";
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
    </>
  );
}
