import { Card, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <Row className="justify-content-center m-auto">
          <Colxx sm="10" md="8" lg="8">
            <Card className="home-page-card">
              <h3 className="question-text text-center">Quiz Game</h3>
              <h5 className="question-text text-center">
                Quiz Game is a fun small game where you have to answer 10 random
                questions each time you play the game. Questions are all about
                movies to test your knowledge of film-related topics. You have
                15 seconds to answer each question. Also, you can use your
                lifelines to get a hint or more time. Pretty straight forward
                huh?hope you enjoy playing.
              </h5>
              <Row className="d-flex justify-content-center mt-5">
                <Colxx sm="10" md="6" lg="4">
                  <Button
                    data-testid="startQuizButton"
                    className="button-start mt-2"
                    onClick={() => navigate(`/quiz`)}
                  >
                    Start The Quiz
                  </Button>
                </Colxx>
              </Row>
            </Card>
          </Colxx>
        </Row>
      </div>
    </>
  );
};
export default HomePage;
