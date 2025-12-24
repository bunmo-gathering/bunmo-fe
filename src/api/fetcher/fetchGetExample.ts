const fetchGetExample = async (string: string) => {
  const response = await fetch(`https://api.example.com/data?query=${string}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export default fetchGetExample;
