const NextImage = ({ alt = '', ...rest }) => {
  return <img alt={alt} {...rest} />;
};

export default NextImage;
