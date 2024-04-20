type Explanationtype = {
  explanation: string;
};

const Explanation = ({ explanation }: Explanationtype) => {
  return <div className="h-fit w-full top-8 text-black rounded-lg bg-white absolute text-sm border shadow-md p-4 z-10">{explanation}</div>;
};

export default Explanation;
