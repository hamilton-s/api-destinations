const handler = async (e) => {
  console.log({ e });
  return { statusCode: 200, body: JSON.stringify(e) };
};

export default handler;
