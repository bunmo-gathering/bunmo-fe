import type { Meta, StoryObj } from "@storybook/react";
import DateButtonList from ".";

const meta = {
  title: "Components/DateButtonList",
  component: DateButtonList,
  tags: ["autodocs"],
  argTypes: {
    initialDate: {
      control: "date",
      description: "리스트의 시작 날짜 또는 초기 선택 날짜입니다.",
    },
    range: {
      control: { type: "number", min: 1, max: 31 },
      description: "표시할 날짜의 범위(일수)입니다.",
    },
    onSelect: {
      action: "selected",
      description: "날짜가 선택되었을 때 실행되는 콜백 함수입니다.",
    },
    showMonth: {
      control: "boolean",
      description: "월 표시 라벨을 리스트에 포함할 지 여부를 결정합니다.",
    },
  },
} satisfies Meta<typeof DateButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 가장 기본적인 상태입니다. 오늘부터 2주(14일)의 날짜를 보여줍니다.
 */
export const Default: Story = {
  args: {
    initialDate: new Date(),
  },
};

/**
 * 월 표시를 비활성화하고 날짜 버튼만 나열할 때 사용합니다.
 */
export const WithoutMonthLabel: Story = {
  args: {
    initialDate: new Date(),
    range: 14,
    showMonth: false,
  },
};

/**
 * 달의 시작인 1일부터 리스트가 시작되는 경우입니다.
 */
export const StartsOnFirst: Story = {
  args: {
    initialDate: new Date("2026-02-01"), // 2026년 2월 1일 시작
    range: 7,
  },
};

/**
 * 월말에 시작하여 중간에 다음 달 1일이 포함된 경우입니다.
 */
export const MonthTransition: Story = {
  args: {
    initialDate: new Date("2026-01-28"),
    range: 10,
  },
};

/**
 * 단 하루만 표시되는 경우입니다.
 */
export const SingleDay: Story = {
  args: {
    initialDate: new Date(),
    range: 1,
    showMonth: false,
  },
};
