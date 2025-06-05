import "./App.css"
import React, { useState } from 'react'
import estudiantes from './clinicas.json'
function App() {
  const [cedulaBusqueda, setCedulaBusqueda] = useState('')
  const [resultadoBusqueda, setResultadoBusqueda] = useState("")
  const [result, setResult] = useState({})

  const handleInputChange = (event) => {
    setCedulaBusqueda(event.target.value)
  }

  const handleBuscar = (event) => {
    event.preventDefault()
    const cedulaLimpia = cedulaBusqueda.replace(/[^0-9]/g, '') // Elimina caracteres no numéricos
    const estudianteEncontrado = estudiantes.find(
      (estudiante) => estudiante.CEDULA.replace(/[^0-9]/g, '') === cedulaLimpia
    )

    if (estudianteEncontrado) {
      setResultadoBusqueda("true")
      setResult({ ...estudianteEncontrado })
    } else {
      setResultadoBusqueda("false")
      setResult({})
    }
  }
  return (
    <div class="">
      <div className="mx-auto mt-6 ml-4 container">
        <img src="logo.webp" alt="LOGO UNEFM" className="w-auto h-12 md:h-18" />
      </div>
      <div className="flex flex-col justify-center items-center px-6 w-full h-[60vh] md:h-[80vh]">
        <div className="block bg-white shadow-xl p-6 py-12 border border-gray-200 rounded-lg w-full md:w-[30vw]">
          <h1 className="font-bold text-slate-600 text-xl md:text-2xl text-center uppercase">Buscar Estudiante</h1>
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
        {resultadoBusqueda && <div className="mt-4">{resultadoBusqueda == "true" ? (
          <div className="w-[90vw] md:w-[30vw]">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="mt-12 mb-4 font-bold text-md text-slate-600 md:text-2xl uppercase">{result.NOMBRES}</h2>
              <table className="w-full">
                <thead className='bg-slate-600 p-4 rounded-tl-lg w-full text-slate-300'>
                  <tr>
                    <th className="p-2 border border-white-300 md:text-left text-center"><p>CLINICA</p></th>
                    <th className="p-2 md:text-left text-center"><p>HOSPITAL</p></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-slate-400">
                    <td className="p-2 border border-slate-400 md:text-left text-center"><p>{result.CLINICA}</p></td>
                    <td className="p-2 md:text-left text-center"><p>{result.HOSPITAL}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        ) : (<h1 className="font-bold text-slate-600 text-xl uppercase">Tu cédula no está en la lista</h1>)}
        </div>
        }
      </div>
    </div >
  )
}

export default App