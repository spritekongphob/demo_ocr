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
              <Button className="mx-2" variant="success" type="submit">
                Upload <i className="bi bi-file-earmark-arrow-up" />
              </Button>
            </form>
          </div>
          <div className="col-md-4">
            <Stack direction="horizontal" gap={3}>
              <Button className="px-2">
                Save <i className="bi bi-floppy2-fill" />
              </Button>
              <Button className="px-2 ms-auto" variant="warning">
                Edit <i className="bi bi-pencil-square" />
              </Button>
              <Button className="px-2" variant="danger">
                Delete <i className="bi bi-trash" />
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconComponent;
