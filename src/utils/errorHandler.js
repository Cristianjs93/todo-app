const errorHandler = (err) => {
  const { error } = err.response.data;
  return error;
};

export default errorHandler;
