import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
    
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#00000073"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      
    </div>
  );
};

export default Loading;
