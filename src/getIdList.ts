// stub
const idList = ["1"];
export const getIdList: () => Promise<string[]> = async () => {
  const promise = new Promise<typeof idList>((resolve) => {
    setTimeout(() => {
      resolve(idList);
    }, 300);
  });
  return await promise;
};

export type PageData = {
  title: string;
  text: string;
};

// stub
export const getPageData: (id: string) => Promise<PageData> = async (id) => {
  const promise = new Promise<PageData>((resolve) => {
    setTimeout(() => {
      resolve({
        text: `Text for page with id ${id}`,
        title: `Title for page with id ${id}`,
      });
    }, 300);
  });
  return await promise;
};
