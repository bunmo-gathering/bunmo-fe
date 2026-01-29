import type { Meta, StoryObj } from "@storybook/react";
import PageControl from ".";

const meta: Meta<typeof PageControl> = {
  title: "Components/PageControl",
  component: PageControl,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description:
        "각 페이지에 표시할 ReactNode 배열입니다. 배열의 순서가 페이지의 순서로 적용됩니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageControl>;

// 공통으로 사용할 페이지 스타일
const PageBox = ({ title }: { title: string }) => (
  <div
    className={`w-full h-full flex flex-col items-center justify-center p-6 text-center`}
  >
    <div className="w-16 h-16 rounded-full mb-4 animate-pulse" />
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    <p className="text-gray-500 mt-2 text-sm">
      이 컴포넌트는 스와이프로 이동이 가능하며,
      <br />
      하단 인디케이터와 연동됩니다.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    children: [
      <PageBox key="1" title="첫 번째 페이지" />,
      <PageBox key="2" title="두 번째 페이지" />,
      <PageBox key="3" title="세 번째 페이지" />,
    ],
  },
};

export const SinglePage: Story = {
  args: {
    children: [<PageBox key="1" title="단일 페이지 모드" />],
  },
};

export const ManyPages: Story = {
  args: {
    children: [
      <PageBox key="1" title="Page 1" />,
      <PageBox key="2" title="Page 2" />,
      <PageBox key="3" title="Page 3" />,
      <PageBox key="4" title="Page 4" />,
      <PageBox key="5" title="Page 5" />,
    ],
  },
};
