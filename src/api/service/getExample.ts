"use server";

import fetchGetExample from "../fetcher/fetchGetExample";

const getExample = async () => {
  const data = await fetchGetExample("exmapleString");

  return data;
};

export default getExample;
