import styled from 'styled-components';

const Widget = styled.div`
  margin: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: rgba(23, 27, 53,.95);
  border-radius:${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    text-transform:uppercase;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.PCenter = styled.div`
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  form{
    width: 100%;
  }
  form{
    margin-bottom:10px;
    text-align:center;
  }
  p{
    margin-top:0;
  }
  
`;
Widget.Content = styled.div`
  padding: 32px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  * {
    margin: 0;
  }
  p{
    text-align:center;
    display:block;
    margin:0 auto;
  }
`;

export default Widget;
