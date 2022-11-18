import { BiLoaderAlt } from 'react-icons/bi';

const Loader = () => {
  return (
    <div className="fixed w-full h-screen bg-opacity-30 flex flex-col justify-center items-center top-0 left-0 text-black">
      <p className="my-5">Loading...</p>
      <BiLoaderAlt className="text-black animate-spin" size={36} />
    </div>
  );
};

export default Loader;
