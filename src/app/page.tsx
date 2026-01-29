"use client";

import Button from "@/components/Button";
import Radio from "@/components/Radio";
import Title from "@/components/Title";
import Switch from "@/components/Switch";
import { useEffect, useMemo, useState } from "react";
import ButtonGroupProvider from "@/components/ButtonGroupProvider";
import { Pick, Picker } from "@/components/Picker";
import SegmentControl from "@/components/SegmentControl";
import { SearchField } from "@/components/InputField";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");

  const SegmentControlChildren = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return <>Content for Tab 1</>;
      case 1:
        return <>Content for Tab 2</>;
      case 2:
        return <>Content for Tab 3</>;
      default:
        return <>Default Content</>;
    }
  }, [selectedIndex]);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

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
        isMultiSelect
        onSelectedChange={(selected) => console.log(selected)}
        defaultValue={["세윤"]}
        gap={"lg"}
      >
        <Pick label={"세윤"} />
        <Pick label={"종원"} />
        <Pick label={"승일"} />
        <Pick label={"성훈"} />
      </Picker>

      <SegmentControl
        data={[{ label: "탭 1" }, { label: "탭 2" }, { label: "탭 3" }]}
        defaultIndex={selectedIndex}
        onTabChange={(index) => {
          setSelectedIndex(index);
        }}
      >
        {SegmentControlChildren}
      </SegmentControl>

      <SearchField
        placeholder="원하는 상품 및 마트 이름을 입력"
        disabled={false}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearchButtonTap={() => {
          console.log("asdf");
        }}
      />
    </>
  );
}
