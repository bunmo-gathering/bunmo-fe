import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from ".";
import { LeadingControl, TrailingControl } from "../Control";
import {
  ChevronLeftIcon,
  MoreVerticalIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: `NavigationBar에 표시될 ReactNode 요소들 입니다. 
-  LeadingControl, TrailingControl이 없으면 빈 Control이 삽입됩니다. 
- 나머지 Node 요소들의 경우 마지막 하나만 반영됩니다`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;
/**
 * 1. 표준 케이스 (모든 요소 포함)
 */
export const Default: Story = {
  args: {
    children: [
      <LeadingControl key="l" icon={ChevronLeftIcon} onTap={() => {}} />,
      <p key="c" className="text-body2-medium">
        페이지 제목
      </p>,
      <TrailingControl
        key="t"
        actions={[{ icon: MoreVerticalIcon, onTap: () => {} }]}
      />,
    ],
  },
};

/**
 * 2. 중앙 요소만 전달 (Leading/Trailing 자동 생성)
 * 코드가 !leading, !trailing 조건을 체크하여 빈 컨트롤을 자동으로 채워줍니다.
 */
export const OnlyTitle: Story = {
  args: {
    children: <p className="text-body2-medium">중앙 제목만 있음</p>,
  },
};

/**
 * 3. 순서 뒤바뀜 테스트 (Auto-Ordering)
 * 배열 순서를 [Trailing, Center, Leading]으로 섞어도
 * 내부 로직이 타입을 찾아 제자리에 배치하는지 확인합니다.
 */
export const UnorderedChildren: Story = {
  args: {
    children: [
      <TrailingControl
        key="t"
        actions={[{ icon: SearchIcon, onTap: () => {} }]}
      />,
      <p key="c" className="text-body2-medium">
        순서가 섞인 자식들
      </p>,
      <LeadingControl key="l" icon={XIcon} onTap={() => {}} />,
    ],
  },
};

/**
 * 4. Leading과 Title만 있음 (Trailing 자동 채움)
 */
export const NoTrailing: Story = {
  args: {
    children: [
      <LeadingControl key="l" icon={ChevronLeftIcon} onTap={() => {}} />,
      <p key="c" className="text-body2-medium">
        오른쪽은 빈 공간
      </p>,
    ],
  },
};

/**
 * 5. Title과 Trailing만 있음 (Leading 자동 채움)
 */
export const NoLeading: Story = {
  args: {
    children: [
      <p key="c" className="text-body2-medium">
        왼쪽은 빈 공간
      </p>,
      <TrailingControl
        key="t"
        actions={[{ icon: MoreVerticalIcon, onTap: () => {} }]}
      />,
    ],
  },
};

/**
 * 6. 복잡한 중앙 요소
 * 단순 텍스트가 아닌 복잡한 ReactNode가 중앙에 올 때의 대응입니다.
 */
export const CustomCenter: Story = {
  args: {
    children: [
      <LeadingControl key="l" icon={ChevronLeftIcon} />,
      <div key="c" className="flex flex-col items-center">
        <span className="text-caption-medium text-gray-500">상단 캡션</span>
        <span className="text-body2-bold">메인 타이틀</span>
      </div>,
      <TrailingControl key="t" />,
    ],
  },
};

/**
 * 7. 중앙 요소 없이 컨트롤만 있는 경우
 * 양쪽 끝에 아이콘만 배치되어야 할 때 사용합니다.
 */
export const OnlyControls: Story = {
  args: {
    children: [
      <LeadingControl key="l" icon={ChevronLeftIcon} />,
      <TrailingControl
        key="t"
        actions={[
          { icon: SearchIcon, onTap: () => {} },
          { icon: MoreVerticalIcon, onTap: () => {} },
        ]}
      />,
    ],
  },
};

/**
 * 8. 왼쪽 컨트롤만 있는 경우 (중앙 요소 없음)
 * 보통 '뒤로가기' 버튼만 덜렁 있는 심플한 페이지에서 사용됩니다.
 */
export const OnlyLeading: Story = {
  args: {
    children: <LeadingControl icon={ChevronLeftIcon} />,
  },
};

/**
 * 9. 오른쪽 컨트롤만 있는 경우 (중앙 요소 없음)
 * 닫기 버튼(X)이나 완료 버튼만 우측 상단에 배치할 때 사용됩니다.
 */
export const OnlyTrailing: Story = {
  args: {
    children: (
      <TrailingControl
        actions={[{ icon: XIcon, onTap: () => console.log("닫기") }]}
      />
    ),
  },
};

/**
 * 10. 아무 자식도 없는 경우 (Empty State)
 * 기본적으로 빈 Leading과 Trailing이 생성되어 높이와 여백만 차지합니다.
 */
export const Nothing: Story = {
  args: {
    children: [],
  },
};
