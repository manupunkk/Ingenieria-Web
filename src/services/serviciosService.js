export async function obtenerServicios() {
  const respuesta = await fetch('/data/servicios.json')

  if (!respuesta.ok) {
    throw new Error('No fue posible cargar los servicios.')
  }

  const datos = await respuesta.json()

  return datos
}