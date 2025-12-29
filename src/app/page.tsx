"use client";

import Button from "@/components/Button";

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
    </>
  );
}
