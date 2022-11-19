import React, { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOutsideAlerter from '../hooks/useOutsideAlerter';

interface Props {
  closeAction: () => void;
}

const SearchModal = ({ closeAction }: Props) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    closeAction();
  };

  useOutsideAlerter(wrapperRef, closeAction);

  return (
    <div
      ref={wrapperRef}
      className="fixed bg-white bg-opacity-10 backdrop-blur-md w-full top-0 left-0 h-screen flex justify-center items-center px-10"
    >
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            onChange={(e) => setSearch(e.currentTarget.value)}
            placeholder="Search"
            className="text-3xl py-5 outline-none border-b-2 border-b-black "
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
