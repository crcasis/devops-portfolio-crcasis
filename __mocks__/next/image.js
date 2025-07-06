/* eslint-disable @next/next/no-img-element */
const NextImage = ({ alt = '', ...rest }) => {
  return <img alt={alt} {...rest} />;
};

export default NextImage;
