import react from "react";

const CrudTableRow = ({el, setDataToEdit,deleteData}) => {
    let {name,apellido,id}=el;

  return(
          <tr>
              <td>{name}</td>
              <td>{apellido}</td>
              <td>
                  <button onClick={()=>setDataToEdit(el)}>Editar</button>
                  <button onClick={()=>deleteData(id)}>Eliminar</button>
              </td>
          </tr>
  )
}

export default CrudTableRow