import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>JINetflix | {titleName}</title>
    </Helmet>
  );
};
