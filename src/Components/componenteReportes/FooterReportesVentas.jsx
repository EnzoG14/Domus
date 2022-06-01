import React from 'react';
import './ComponenteReportes.css';
import {FormControl, Form, Button } from 'react-bootstrap';
const FooterReportesVentas = () => {
    return (
        <div className="footerReportesVen">
              <Form.Label className="tipoReporte">Cantidad de Ventas <div className="paginaReporte"> 22 </div> </Form.Label>
              <Form.Label className="tipoReporte">Total General  $<div className="paginaReporte"> 88.000.000,00 </div> </Form.Label>
              <div className="d-grid gap-2">
                <Button className="btn-customize" variant="primary" size="lg">
                    Guardar como pdf
                </Button>
                <Button variant="secondary" size="lg">
                    Imprimir
                </Button>
                </div>
          </div>
  );
}

export default FooterReportesVentas;