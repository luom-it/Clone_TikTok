import { memo } from "react";

import AccountItem from "../../../components/AccountItem";

function RenderResult({ searchResult }) {
  return (
    <>
      {searchResult.map((result) => (
        <AccountItem key={result.id} data={result} />
      ))}
    </>
  );
}

export default memo(RenderResult);
