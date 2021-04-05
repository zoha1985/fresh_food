
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';

const TableEdit = ({newItem}) => {
    console.log('table edite',newItem)
    console.log('table edite',newItem._id)
    const [forDelete, steForDelete] = useState();

    useEffect( () => {

    },[])
    const handleDelete = (id) =>{
        fetch(`https://sheltered-forest-82274.herokuapp.com/delete/${id}`, { 
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete success fully',result)
        })

    }

    return (
        <tr>
                    <td>{newItem.name}</td>
                    <td>{newItem.quantity}</td>
                    <td>{newItem.price}</td>
        
                    <td> E: <EditIcon color="action" style={{color:"#357a38"}} /><button onClick={()=>handleDelete(newItem._id)}> Del : <DeleteForeverIcon  style={{color:"#f50057"}} /></button></td>
         </tr>
    );
};

export default TableEdit;