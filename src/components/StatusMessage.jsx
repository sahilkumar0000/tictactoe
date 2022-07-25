import React from 'react';
// const message = winner
// ? `winner is ${winner}`
// : `next player is ${current.isXNext ? 'X' : 'O'}`;

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O Tied'}
    </h2>
  );
};

export default StatusMessage;
