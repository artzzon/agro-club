import { ThreeDots } from "react-loader-spinner";
const Loader = ({ width = 50, height = 30 }) => {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="#a8b8ca"
      radius="9"
      ariaLabel="#a8b8ca"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
