import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

function MobileForm({value, reportEmergencyGrave,reportEmergencyGravisimo}) {
  return (
    <div className="well" style={wellStyles}>
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Nombre Paciente</ControlLabel>
          <FormControl
            type="text"
            value={value}
            placeholder="ingrese nombre"
          />
        </FormGroup>
      </form>

      <Button onClick={reportEmergencyGrave} bsSize="large" block bsStyle="warning">Grave</Button>
      <Button onClick={reportEmergencyGravisimo} bsSize="large" block bsStyle="danger">Gravisimo</Button>
    </div>
  )
}

export default MobileForm;
