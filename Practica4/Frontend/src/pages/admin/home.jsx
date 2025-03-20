const HomeAdmin =() => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profesores</title>
  {/* Agregar Bootstrap */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container mt-5">
    <h2>Profesores</h2>
    {/* Botones de acciones */}
    <div className="mb-3">
      <button className="btn btn-primary">Carga Masiva</button>
      <button className="btn btn-success">Exportar Excel</button>
    </div>
    {/* Tabla de Profesores */}
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Código</th>
          <th>Nombres y Apellidos</th>
          <th>Correo</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ECYS-P01</td>
          <td>Juan Perez</td>
          <td>j@email.com</td>
          <td>M</td>
          <td>
            <button className="btn btn-warning btn-sm">
              <i className="bi bi-pencil" />
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="bi bi-trash" />
            </button>
          </td>
        </tr>
        <tr>
          <td>ECYS-P02</td>
          <td>Andrea Gonzalez</td>
          <td>a@email.com</td>
          <td>F</td>
          <td>
            <button className="btn btn-warning btn-sm">
              <i className="bi bi-pencil" />
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="bi bi-trash" />
            </button>
          </td>
        </tr>
        <tr>
          <td>ECYS-P03</td>
          <td>Luis Montoya</td>
          <td>l@email.com</td>
          <td>M</td>
          <td>
            <button className="btn btn-warning btn-sm">
              <i className="bi bi-pencil" />
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="bi bi-trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* Agregar Bootstrap Icons y Bootstrap JS */}
</>

    )
};

export default HomeAdmin;