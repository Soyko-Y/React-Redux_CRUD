import React from 'react'

const ViewRow = ({ 
  id,
  age,
  name,
  gender,
  company,
  email,
  phone,
  address,
  onEdit,
  onDelete,
}) => { 
  const onChange = ({ target: { value }}) => { 
    if (value === 'edit') onEdit(id)
    if (value === 'delete') onDelete(id)
  }

  return (
    <div className="row bg-secondary text-white">
      <div className="col-sm-2">{   name    }</div>
      <div className="col-sm-1">{   age     }</div>
      <div className="col-sm-1">{   gender  }</div>
      <div className="col-sm-1">{   company }</div>
      <div className="col-sm-2">{   email   }</div>
      <div className="col-sm-1.5">{ phone   }</div>
      <div className="col-sm-2">{   address }</div>
      <div className="col-sm-1.5">
        <button onClick={ onChange } className="btn btn-primary" value="edit">Edit</button>
        <button onClick={ onChange } className="btn btn-danger" value="delete">Deete</button>
      </div>
    </div>
  )
} 

export default ViewRow
