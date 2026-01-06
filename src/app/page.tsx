"use client";

import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroupProvider";
import Radio from "@/components/Radio";
import Title from "@/components/Title";
import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>();
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

      <div>
        <Radio
          name={"이름"}
          value={"백종원"}
          selectedValue={selectedValue}
          handleChange={(e) => setSelectedValue(e.target.value)}
        />
        <Radio
          name={"이름"}
          value={"박종원"}
          selectedValue={selectedValue}
          handleChange={(e) => setSelectedValue(e.target.value)}
        />
      </div>
    </>
  );
}
