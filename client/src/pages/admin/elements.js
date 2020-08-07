import styled, { css } from 'styled-components'

const selectAndInputStyles = css`
  width: 100%;
  height: 35px;
  font-size: 18px;
  border-radius: 10px;
  outline: 0;
  border: 1px solid #c9c6c6;
  padding: 0 16px;
  box-sizing: border-box;
  color: ${(props) => (props.isGreen ? '#19e619' : 'initial')};
`

export const StyledInput = styled.input`
  ${selectAndInputStyles}
`

export const StyledSelect = styled.select`
  ${selectAndInputStyles}
`

export const SubmitButton = styled.button`
  justify-self: center;
  padding: 7px 20px;
  border-radius: 10px;
  background-color: #5f9ea0;
  font-size: 16px;
  color: #ffffff;
  outline: 0;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #3a989b;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: #d3cccc;
  }
`

export const AddItemForm = styled.form`
  display: grid;
  row-gap: 20px;
`

export const AdminContent = styled.div`
  width: 500px;
  padding: 24px;
  margin: auto;
`
