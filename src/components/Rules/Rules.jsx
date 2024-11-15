import { useOutletContext } from 'react-router-dom';

const Rules = () => {
    const contextData = useOutletContext();
  const rulesItem = contextData.project.rules;
  console.log(rulesItem);
  return <p>{ rulesItem }</p>
};

export default Rules;