import SpinnerLoader from "../../components/Common/SpinnerLoader";
const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <SpinnerLoader />
    </div>
  );
};

export default LoadingPage;
