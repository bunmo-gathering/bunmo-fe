import { ChangeEvent } from "react";

interface RadioProps {
  /**
   * name: 라디오 그룹 이름
   */
  name: string;
  /**
   * value: 해당 라디오 값
   */
  value: string;
  /**
   * selectedValue: 라디오 그룹 내 선택된 값
   */
  selectedValue?: string;
  /**
   * handleChange: selectedValue를 클릭한 라디오 값으로 변경하는 함수
   */
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { RadioProps };
