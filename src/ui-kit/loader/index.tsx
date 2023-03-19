import React, { FC } from "react";
import { LoaderContainer } from "./styles";
import { MutatingDots } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <LoaderContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#2f4eff"
        secondaryColor="#2f4eff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
