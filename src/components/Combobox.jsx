import Form from 'react-bootstrap/Form';

function Combobox() {
  return (
    <Form.Select aria-label="Default" style={{width:'200px'}}>
      <option> select </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default Combobox;
  