import React from "react";
import * as S from "./Notification.style";

function Notification({ children, color, handleChange }) {
  return (
    <S.NotificationBox color={color}>
      {children}
      <S.NotificationButton onClick={handleChange}>X</S.NotificationButton>
    </S.NotificationBox>
  );
}

export default Notification;
