

type ErrorType = {
  message: string;

};

const ErrorComponent = ({ message }: ErrorType) => {

return <div className="bg-red-700 text-white text-center py-1 ">{message}</div>

  // <div className="bg-red-700 text-white text-center py-1 ">{message}</div>
};

export default ErrorComponent;
