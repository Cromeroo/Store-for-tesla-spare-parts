import React from 'react';
import SolicitudesTabla from '../component/SolicitudesTabla';

class PanelAdmin extends React.Component {
  render() {
    return (
      <div>
        <h1>Panel de Administración</h1>
        <SolicitudesTabla />
      </div>
    );
  }
}

export default PanelAdmin;