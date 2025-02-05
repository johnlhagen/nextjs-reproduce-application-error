import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getIdList, getPageData, PageData } from "@/getIdList";

type Params = {
  id: string;
};
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const idList = await getIdList();
  return {
    paths: idList.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

type Props = {
  pageData: PageData;
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const id = context.params?.id;
  if (id === undefined) {
    console.log("id is undefined in getStaticProps");
    return {
      notFound: true,
    };
  }

  const pageData = await getPageData(id);
  return {
    props: {
      pageData,
    },
  };
};

const DynamicPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  pageData,
}) => {
  console.log("DynamicPage render body, pageData: ", pageData);
  const { text, title } = pageData;
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};

export default DynamicPage;