import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "components/common/Colxx";
function MainLayout() {
  return (
    <div>
      <TopNav />
      <div className="mt-0">
        <div className="mt-3">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
