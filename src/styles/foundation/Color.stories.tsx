import type { Meta, StoryObj } from "@storybook/react";
import tailwindTokens from "../../../tailwind.config";

const colors = tailwindTokens.theme?.extend?.colors || {};
const meta = {
  render: () => (
    <>
      <div className="flex flex-wrap gap-4">
        {Object.entries(colors).map(([colorName, colorValue]) => (
          <div
            className="flex relative flex-col w-60 h-31 overflow-hidden rounded-xl border border-b-neutral-900 dark:border-neutral-100"
            style={{ backgroundColor: colorValue }}
            key={colorName}
          >
            <div className="absolute right-0 bottom-0 p-2">
              <span className="text-onPrimary px-2 py-1 bg-onSurface rounded-md">
                {colorName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  ),
} satisfies Meta;
export default meta;

export const ColorPalette: StoryObj = {
  name: "Color Palette",
};
