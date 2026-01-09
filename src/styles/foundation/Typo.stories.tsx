import type { Meta } from "@storybook/react";
import tailwindTokens from "../../../tailwind.config";

type TypoName =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "body1"
  | "body2"
  | "caption";
type FontWeight = "bold" | "semibold" | "medium" | "regular";

type TypoegraphyToken = {
  [key in TypoName]: {
    [weight in FontWeight]?: [string, object];
  };
};

const typos =
  (tailwindTokens.theme?.extend?.fontSize as TypoegraphyToken) || {};

const typo = '작은 모임, 큰 절약 "분모"';

console.log(typos);

const meta = {
  render: () => (
    <div className="flex flex-col gap-10 text-primary dark:text-primary">
      {Object.entries(typos).map(([typoName, typoTokens]) => (
        <>
          {Object.entries(typoTokens).map(([weight, [size, style]]) => (
            <div className="flex flex-col gap-1">
              <p
                className={`font-${weight}`}
                style={{ fontSize: size, ...style }}
              >
                {typo}
              </p>
              <div className="flex gap-2 items-center">
                <p className="w-fit bg-onSurface text-onPrimary px-2 py-1 rounded-md">
                  text-{typoName}-{weight}
                </p>

                <div className="flex gap-2">
                  {typoName && (
                    <span className="font-semibold">{typoName}</span>
                  )}
                  {size && <span>{size}</span>}
                  {weight && <span>{weight}</span>}
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </div>
  ),
} satisfies Meta;
export default meta;

export const Typography = {
  name: "Typography",
};
