import { useOutletContext } from 'react-router-dom';

const Rules = () => {
  const { project } = useOutletContext();
  return <p>rules</p>;
};

export default Rules;