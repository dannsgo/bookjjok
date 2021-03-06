import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Modal from "../modal";

function BookItem({ book }) {
  const [showModal, setShowModal] = useState(false);
  const [bookInfo, setBookInfo] = useState("");

  return (
    <BookWrap>
      {book.map((item, i) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        if (thumbnail !== undefined) {
          return (
            <Fragment key={i}>
              <BookItemWrap>
                <img
                  src={thumbnail}
                  alt=""
                  onClick={() => {
                    setShowModal(true);
                    setBookInfo(item);
                  }}
                />
              </BookItemWrap>
              {showModal ? (
                <Modal
                  showModal={showModal}
                  bookInfo={bookInfo}
                  onClose={() => {
                    setShowModal(false);
                  }}
                />
              ) : (
                <></>
              )}
            </Fragment>
          );
        }
      })}
    </BookWrap>
  );
}

const BookWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BookItemWrap = styled.div`
  display: flex;
  background: rgba(245, 245, 245, 0.9);
  padding: 1.2rem 3rem;
  margin: 1rem 0;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 1.2rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem 5rem;
  }
`;

export default BookItem;
