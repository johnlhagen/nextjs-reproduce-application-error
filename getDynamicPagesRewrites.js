module.exports = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          source: "/a",
          destination: "/_dynamic-pages/1",
        },
      ]);
    }, 500);
  });
  return await promise;
};
