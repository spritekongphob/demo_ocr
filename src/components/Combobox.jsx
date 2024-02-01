import Form from 'react-bootstrap/Form';

function Combobox() {
  return (
    <Form.Select aria-label="Default" style={{width:'200px'}} >
      <option> select </option>
      <option value="1">BSRC</option>
      <option value="2">KPAT</option>
      <option value="3">NFCT</option>
      <option value="3">PTTGC</option>
      <option value="3">PTTOR</option>
      <option value="3">SPRC</option>
      <option value="3">THAIOIL</option>
    </Form.Select>
  );
}

export default Combobox;
  