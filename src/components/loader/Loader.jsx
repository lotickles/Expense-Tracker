import React from 'react';
import { MutatingDots} from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      (<MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)

    </StyledLoaderWrapper>
  );
};

export default Loader;
