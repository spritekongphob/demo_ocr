import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function IconComponent() {
  return (
    <>
      <div className="row">
        <div className="d-flex">
          <div className="col-md-4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-4 text-center">
            <Button className="mx-2">
              Upload <i className="bi bi-file-earmark-arrow-up"></i>
            </Button>
            <Button className="mx-2">
              Save <i className="bi bi-floppy2-fill"></i>
            </Button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default IconComponent;
