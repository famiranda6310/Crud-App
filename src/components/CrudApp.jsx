import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        id: 1,
        name: "Juan",
        apellido: "Marinez",
    },
    {
        id: 2,
        name: "Ander",
        apellido: "Dragón",
    },
    {
        id: 3,
        name: "Fabian",
        apellido: "Miranda",
    },
    {
        id: 4,
        name: "Ronal",
        apellido: "Aguiar",
    },
    {
        id: 5,
        name: "jose",
        apellido: "Fénix",
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>Datos Personales</h2>
            <hr/>
            <article className="grid-1-2">
                <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                <CrudTable
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            </article>
        </div>
    );
};

export default CrudApp;