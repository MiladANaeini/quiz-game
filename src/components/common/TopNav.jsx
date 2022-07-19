import { useEffect, useState } from "react";
import { Row, Popover } from "reactstrap";
import { Colxx } from "./Colxx";
import GitHubLogo from "assets/images/GitHubLogo.png";
const TopNav = () => {
  const [popOverVisible, setPopOverVisible] = useState(false);
  useEffect(() => {
    if (popOverVisible) {
      setTimeout(() => {
        setPopOverVisible(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      <div className="topnav">
        <Row>
          <Colxx lg={10} md={10} sm={8} xs={8} xxs={12}>
            <span
              onClick={() => {
                window.open(
                  "https://github.com/MiladANaeini/quiz-game",
                  "_blank"
                );
              }}
              className="top-title cursor--pointer"
            >
              <img
                className="mr-1 cursor--pointer mb-2"
                src={GitHubLogo}
                alt="GitHub"
                width={"26px"}
              />
              <span className="ms-2">Quiz Game</span>
            </span>
          </Colxx>
          <Colxx lg={2} md={2} sm={4} xs={4} xxs={12}>
            <span
              onClick={() =>
                navigator.clipboard.writeText("milad88884@gmail.com")
              }
              className="top-title cursor--pointer align-center"
              id="Popover1"
            >
              milad88884@gmail.com
            </span>
            <Popover placement="span" isOpen={popOverVisible} target="Popover1">
              copy
            </Popover>
          </Colxx>
        </Row>
      </div>
    </>
  );
};
export default TopNav;
