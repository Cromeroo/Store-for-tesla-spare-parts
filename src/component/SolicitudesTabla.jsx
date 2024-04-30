import React, { useState } from 'react';

const SolicitudesTabla = () => {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, usuario: 'Juan Perez', productos: 'Repuesto x, Repuesto y', estado: 'Pendiente', precio: '', confirmado: false },
    { id: 2, usuario: 'Ana López', productos: 'Repuesto z, Repuesto x', estado: 'Pendiente', precio: '', confirmado: false },
  ]);

  const establecerPrecio = (id) => {
    const precio = prompt('Introduce el precio para esta solicitud:');
    if (precio) {
      const solicitudesActualizadas = solicitudes.map(solicitud => 
        solicitud.id === id ? { ...solicitud, precio, estado: 'Precio Establecido', confirmado: false } : solicitud
      );
      setSolicitudes(solicitudesActualizadas);
    }
  };

  const modificarPrecio = (id) => {
    establecerPrecio(id); 
  };

  const eliminarPrecio = (id) => {
    const solicitudesActualizadas = solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, precio: '', estado: 'Pendiente', confirmado: false } : solicitud
    );
    setSolicitudes(solicitudesActualizadas);
  };

  const confirmarPrecios = (id) => {
    const solicitudesActualizadas = solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, confirmado: true } : solicitud
    );
    setSolicitudes(solicitudesActualizadas);

    console.log(`Precios confirmados para la solicitud ${id}`);
  };

  return (
    <div className="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>ID Solicitud</th>
            <th>Usuario</th>
            <th>Productos Seleccionados</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id}>
              <td>{solicitud.id}</td>
              <td>{solicitud.usuario}</td>
              <td>{solicitud.productos}</td>
              <td>{solicitud.estado}</td>
              <td>{solicitud.precio}</td>
              <td>
                {solicitud.estado === 'Pendiente' && (
                  <button onClick={() => establecerPrecio(solicitud.id)}>Establecer Precios</button>
                )}
                {solicitud.estado === 'Precio Establecido' && !solicitud.confirmado && (
                  <>
                    <button onClick={() => modificarPrecio(solicitud.id)}>Modificar</button>
                    <button onClick={() => eliminarPrecio(solicitud.id)}>Eliminar</button>
                    <button onClick={() => confirmarPrecios(solicitud.id)}>Confirmar Precios</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SolicitudesTabla;
