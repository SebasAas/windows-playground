import { useState, useEffect } from 'react';

// Styles
import * as S from './styles';

function Clock() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [hour, setHour] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric'
    })
  );

  useEffect(() => {
    const timerId = setInterval(refreshClock, 10000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  function refreshClock() {
    setHour(
      new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
      })
    );
    setDate(new Date().toLocaleDateString());
  }

  return (
    <S.Clock>
      <S.Time>{hour}</S.Time>
      <S.Date>{date}</S.Date>
    </S.Clock>
  );
}
export default Clock;
