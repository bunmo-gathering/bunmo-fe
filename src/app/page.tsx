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
          id="백종원"
          name={"이름"}
          value={"백종원"}
          selectedValue={selectedValue}
          handleChange={(e) => setSelectedValue(e.target.value)}
          type="first"
          label="백종원"
          description="백종원의 요리비책"
        />
        <Radio
          id="박종원"
          name={"이름"}
          value={"박종원"}
          selectedValue={selectedValue}
          handleChange={(e) => setSelectedValue(e.target.value)}
          type="second"
          label="박종원"
          description="박종원의 코딩비책"
        />
      </div>
    </>
  );
}
