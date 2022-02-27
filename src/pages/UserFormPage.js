import styled from "styled-components";
import UserForm from "../components/UserForm/UserForm";

const FormContainer = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  background-color: #222;
  height: 600px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #f0f0f0;
`;

const UserFormPage = ({ isLogin }) => {
  return (
    <FormContainer>
      <UserForm isLogin={isLogin} />
    </FormContainer>
  );
};

export default UserFormPage;
