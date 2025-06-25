export default function Home (){
    return (
      <div className="container my-4">
      <h1 className="mb-4">Dashboard</h1>

      {/* cards principales */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-light h-100">
            <div className="card-body">
              <h5 className="card-title">Total de Arriendos</h5>
              <p className="display-6 fw-bold">153</p>
              <p className="text-muted">Actualizado hoy</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Arriendos Activos</h5>
              <p className="display-6 fw-bold">42</p>
              <p className="text-white-50">Vehículos aún en uso</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-success text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Arriendos Terminados</h5>
              <p className="display-6 fw-bold">111</p>
              <p className="text-white-50">Vehículos devueltos</p>
            </div>
          </div>
        </div>
      </div>

      {/* cards de vehiculos */}
      <h4 className="mb-3">Arriendos por tipo de vehículo</h4>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card border-info border-2 h-100">
            <div className="card-body">
              <h6 className="card-title">Sedán</h6>
              <p className="fs-4">48 arriendos</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-warning border-2 h-100">
            <div className="card-body">
              <h6 className="card-title">SUV</h6>
              <p className="fs-4">71 arriendos</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-danger border-2 h-100">
            <div className="card-body">
              <h6 className="card-title">Camioneta</h6>
              <p className="fs-4">34 arriendos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}