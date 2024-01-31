
import Button from "react-bootstrap/Button";
import Combobox from './Combobox';



function IconComponent() {
  return (
    <>
      <div className="row">
        <div className="d-flex">
          <div className="col-md-4">
           <Combobox/>
          </div>
          <div className="col-md-4 text-center ">
            <form className="input-group">
              <input type="file" name="file" className="form-control"/>
              <Button className="mx-2" variant="success" type="submit">
                Upload <i className="bi bi-file-earmark-arrow-up"></i>
              </Button>
            </form>
          </div>
          <div className="col-md-4">
            <Button className="mx-2">
              Save <i className="bi bi-floppy2-fill"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconComponent;
