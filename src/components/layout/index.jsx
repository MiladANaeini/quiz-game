import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";
import { CardBody } from "reactstrap";
function MainLayout() {
  return (
    <div>
      <TopNav />
      <div className="mt-3">
        <CardBody>
          <AppRoutes />
        </CardBody>
      </div>
    </div>
  );
}

export default MainLayout;
