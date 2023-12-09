const errorHandler = (err) => {
  if (err.code === 'ERR_NETWORK') {
    return `${err.message}, try again later`;
  }

  const { error } = err.response.data;
  return error;
};

export default errorHandler;
