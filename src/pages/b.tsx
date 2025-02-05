import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {
  someData: {
    title: string;
    text: string;
  };
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      someData: { title: "title", text: "text" },
    },
  };
};

const PageComponent: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  // Everything works as expected
  console.log("props in /b: ", props);
  const { someData } = props;
  const { title, text } = someData;
  return (
    <>
      <h1>Page B</h1>
      <p>
        With title "{title}" and text "{text}"
      </p>
    </>
  );
};

export default PageComponent;
