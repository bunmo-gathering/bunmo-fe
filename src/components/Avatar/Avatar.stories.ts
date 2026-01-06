import Avatar from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;
export default meta;

export const Default = {
  args: {
    size: "md",
    imageUrl: null,
    status: null,
  },
};

export const WithImage = {
  args: {
    size: "lg",
    imageUrl:
      "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740&q=80",
  },
  status: null,
};

export const WithIndicator = {
  args: {
    size: "xl",
    imageUrl: null,
    status: "indicator",
  },
};

export const WithImageAndIndicator = {
  args: {
    size: "xl",
    imageUrl:
      "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740&q=80",
    status: "indicator",
  },
};
