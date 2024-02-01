import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Combobox from "./Combobox";

function IconComponent() {
  return (
    <>
      <div className="row bg-light pt-4 pb-4">
        <div className="d-flex">
          <div className="col-md-4">
            <Combobox/>
          </div>
          <div className="col-md-4 text-center ">
            <form className="input-group">
              <input type="file" name="file" className="form-control" />
              <Button className="px-2" type="submit">
                Save <i className="bi bi-floppy2-fill" />
              </Button>
            </form>
          </div>
          <div className="col-md-4" >
           
          </div>
        </div>
      </div>
    </>
  );
}

export default IconComponent;
