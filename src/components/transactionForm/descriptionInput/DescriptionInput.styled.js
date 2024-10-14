import styled from "styled-components";


export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media only screen and (min-width: 768px) {
    gap: 8px;
  }
`

export const StyledLabel = styled.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const StyledDescriptionInput = styled.textarea`
  padding: 12px 14px;
  resize: none;

  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;

  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:focus {
    border-color: #0EF387;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444446;
    border-radius: 12px;

    height: 15px;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 18px;
  }

`