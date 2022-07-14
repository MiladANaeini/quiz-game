import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      home page
      <Button color="primary" onClick={() => navigate(`/quiz`)}>
        button
      </Button>
    </>
  );
};
export default HomePage;
