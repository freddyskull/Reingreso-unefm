import "./App.css"
import React, { useState } from 'react'

function App() {
  const estudiantes = [
    { nombres: "Dulce Maria Guerrero Fernandez", cedula: "21447946" },
    { nombres: "Osirys Nakary Cadenas", cedula: "25619365" },
    { nombres: "Mara Janeth Illescas Galan", cedula: "20980357" },
    { nombres: "Maria Gabriela Marcano Lugo", cedula: "20665516" },
    { nombres: "Victoria Jose Ruiz Castillo", cedula: "28499458" },
    { nombres: "Anavid Nazaret Campos Diaz", cedula: "27116874" },
    { nombres: "Carlos Ramon Paredes Montilla", cedula: "25299988" },
    { nombres: "Eglesca Hidalgo", cedula: "14734789" },
    { nombres: "Micheel Andreina Teran Fernandez", cedula: "27074398" },
    { nombres: "Orlando Jose Galue Chirino", cedula: "26904427" },
    { nombres: "Kysbeixis Alexandra Rodriguez Guerra", cedula: "25033708" },
    { nombres: "Freddy Ernesto Garrido Nuñes", cedula: "25460591" },
    { nombres: "Sharly Nazareth Berrios Marquez", cedula: "27806687" },
    { nombres: "Dilcia Leon", cedula: "7456023" },
    { nombres: "Marley Valeria Garcia Ospina", cedula: "28460600" },
    { nombres: "Carmen Teresa Aguirre Mena", cedula: "24823623" },
    { nombres: "Sairi Tarazona Betancourt", cedula: "28277154" },
    { nombres: "Yolenny Mariana Colmenarez Gutierrez", cedula: "26085045" },
    { nombres: "ORTUNEZ MARIA", cedula: "26085043" },
    { nombres: "CHIRINOS ROSIANGEL", cedula: "30353701" },
    { nombres: "MAVAREZ ANDREA", cedula: "27247797" },
  ]

  const [cedulaBusqueda, setCedulaBusqueda] = useState('')
  const [resultadoBusqueda, setResultadoBusqueda] = useState('')

  const handleInputChange = (event) => {
    setCedulaBusqueda(event.target.value)
  }

  const handleBuscar = (event) => {
    event.preventDefault() // Evita la recarga de la página al enviar el formulario

    const cedulaLimpia = cedulaBusqueda.replace(/[^0-9]/g, '') // Elimina caracteres no numéricos
    const estudianteEncontrado = estudiantes.find(
      (estudiante) => estudiante.cedula.replace(/[^0-9]/g, '') === cedulaLimpia
    )

    if (estudianteEncontrado) {
      setResultadoBusqueda(`¡Estudiante encontrado! Nombre: ${estudianteEncontrado.nombres} (C.I. ${estudianteEncontrado.cedula})`)
    } else {
      setResultadoBusqueda('Estudiante no encontrado.')
    }
  }
  return (
    <div class="top-0 z-[-2] absolute bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] bg-white w-screen h-screen">
      <div className="mx-auto mt-6 container">
        <img src="logo.webp" alt="LOGO UNEFM" width="250" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[80vh]">
        <div className="block bg-white shadow-xl p-6 py-12 border border-gray-200 rounded-lg w-[30vw]">
          <h1 className="font-bold text-slate-600 text-2xl text-center uppercase">Buscar Estudiante</h1>
          <div className="mt-4">
            <form className="mx-auto" onSubmit={handleBuscar}>
              <label htmlFor="default-search" className="sr-only mb-2 font-medium text-gray-900 dark:text-white text-sm">Buscar</label>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none start-0">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="default-search"
                  className="block bg-gray-50 p-4 ps-10 border border-gray-300 focus:border-blue-500 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 w-full text-gray-900 text-sm"
                  placeholder="Buscar por cédula"
                  value={cedulaBusqueda}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="bottom-2.5 absolute bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-white text-sm end-2.5"
                >
                  BUSCAR
                </button>
              </div>
            </form>
          </div>
        </div>
        {resultadoBusqueda && <p className="mt-4 text-center">{resultadoBusqueda}</p>}
      </div>
    </div>
  )
}

export default App