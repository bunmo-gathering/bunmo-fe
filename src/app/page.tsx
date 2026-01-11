"use client";

import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroupProvider";
import Radio from "@/components/Radio";
import Title from "@/components/Title";
import Switch from "@/components/Switch";
import { useState } from "react";
import { Pick, Picker } from "@/components/Picker";

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
          onChange={(e) => setSelectedValue(e.target.value)}
          label="백종원"
          description="백종원의 요리비책"
        />
        <Radio
          name={"이름"}
          value={"박종원"}
          selectedValue={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          indent={true}
          label="박종원"
        />
      </div>

      <Switch
        defalutValue={false}
        onChange={(e) => console.log(e.target.checked)}
        label="박종원"
        description="박종원의 코딩비책"
      />

      <Picker
        isMulti
        onSelectedChange={(selected) => console.log(selected)}
        defaultValue={"세윤"}
        gap={"lg"}
      >
        <Pick label={"세윤"} />
        <Pick label={"종원"} />
        <Pick label={"승일"} />
        <Pick label={"성훈"} />
      </Picker>
    </>
  );
}
