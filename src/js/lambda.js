export const handler = async (event, context) => {
  const host = `d2ehrufq9oj3da.cloudfront.net`;
  const path = "images";
  const numImages = 1000;

  const imageData = {
    images: Array.from(
      { length: numImages },
      (_, i) => `https://${host}/${path}/image-${i + 1}.png`
    ),
  };

  const response = {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 200,
  };

  response.body = JSON.stringify(imageData);
  return response;
};
