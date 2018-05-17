import React from 'react'

const Row = ({ 
  id,
  age,
  name,
  gender,
  company,
  email,
  phone,
  address,
  editRow,
  onView,
}) => { 
  const onSubmit = (e) => { 
    e.preventDefault()
    const value = (name) =>
      e.target.querySelector(`[name=${ name }]`).value

    editRow({ 
      id,
      age:      value('age'),
      name:     value('name'),
      gender:   value('gender'),
      company:  value('company'),
      email:    value('email'),
      phone:    value('phone'),
      address:  value('address'),
     })
    onView()
  }

  return (
    <form className="row bg-secondary" onSubmit={ onSubmit }>
      <div className="col-sm-2">
        <input
          defaultValue={ name }
          name="name"
        />
      </div>
      <div className="col-sm-1">
        <input
          defaultValue={ age }
          name="age"
        />
      </div>
      <div className="col-sm-1">
        <input
          defaultValue={ gender }
          name="gender"
        />
      </div>
      <div className="col-sm-1">
        <input
          defaultValue={ company }
          name="company"
        />
      </div>
      <div className="col-sm-2">
        <input
          defaultValue={ email }
          name="email"
        />
      </div>
      <div className="col-sm-1.5">
        <input
          defaultValue={ phone }
          name="phone"
        />
      </div>
      <div className="col-sm-2">
        <input
          defaultValue={ address }
          name="address"
        /> 
      </div>
      <div className="col-sm-1.5">
        <button className="btn btn-success"> Save </button>
      </div>
    </form>
  )
}

export default Row