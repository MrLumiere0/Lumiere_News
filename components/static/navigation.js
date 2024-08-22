import React from "react";
import TimeZone from "./timezone";
import SearchModal from "./portal/search-modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const handleCancelBtn = (value) => {
    setModalOpen(false);
    setSearchResult(value);
  };
  const handleSubmitBtn = (value) => {
    setModalOpen(false);
    setSearchResult(value);
  };

  return (
    <div className='nav'>
      {modalOpen &&
        createPortal(
          <SearchModal onClick={handleSubmitBtn} onCancel={handleCancelBtn} />,
          document.body
        )}
      <div className='time-nav'>
        <TimeZone />
      </div>
      <div className='call-to-action'>
        <div className='NavSearch'>
          <button className='SearchInput' onClick={() => setModalOpen(true)}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
