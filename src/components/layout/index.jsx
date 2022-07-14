import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "components/common/Colxx";
function MainLayout() {
  return (
    <>
      <TopNav />
      <div className="mt-0">
        <div className="mt-3">
          {/* <Row className="justify-content-center">
            <Colxx>
              <Card> */}
          {/* <CardBody> */}
          <AppRoutes />
          {/* </CardBody> */}
          {/* </Card>
            </Colxx>
          </Row> */}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
