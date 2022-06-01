import React from 'react';
import './EncabezadoTransaccion.css'
import {Stack,FloatingLabel,Form} from 'react-bootstrap';

const RangoFecha = () => {
    return (
      <Stack direction="horizontal" gap={3} className="mx-4 my-2">
          <FloatingLabel controlId="floatingInputGrid" label="Desde" >
            <Form.Control type="date" placeholder="Fecha desde"  />
          </FloatingLabel>
          <div className="vr" />
          <FloatingLabel controlId="floatingInputGrid" label="Hasta" >
              <Form.Control type="date" placeholder="Fecha hasta"  />
            </FloatingLabel>
      </Stack>
  );
}

export default RangoFecha;