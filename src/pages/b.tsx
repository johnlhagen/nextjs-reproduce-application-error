import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {
  someData: string;
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      someData: "some data",
    },
  };
};

const PageComponent: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  console.log("props: ", props);
  const { someData } = props;
  return (
    <>
      <h1>Page B</h1>
      <p>With {someData}</p>
    </>
  );
};

export default PageComponent;
