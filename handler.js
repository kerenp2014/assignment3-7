exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go faster keren v4! Your function executed successfully!",
    }),
  };
};

exports.dye = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go ahead kp v4! Your function executed successfully!",
    }),
  };
};