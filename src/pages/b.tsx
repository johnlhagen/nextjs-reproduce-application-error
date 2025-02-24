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
  // THE PROBLEM: for some reason, props are empty here
  console.log("props in /b: ", props);
  if (JSON.stringify(props) === "{}") {
    console.log("avoiding the error");
    window.location.reload();
  }
  // THE PROBLEM: someData is undefined!
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
