const data = {
  '5a6b008747ee8d7357263198': {
      id: "5a6b008747ee8d7357263198",
      age: 40,
      name: "Casandra Leblanc",
      gender: "female",
      company: "PHOTOBIN",
      email: "casandraleblanc@photobin.com",
      phone: "+1 (995) 458-2730",
      address: "636 Prince Street, Needmore, Tennessee, 5197"
    },
  '5a6b0087cb6506cef3378424':  {
      id: "5a6b0087cb6506cef3378424",
      age: 30,
      name: "Lucia Reed",
      gender: "female",
      company: "UNIA",
      email: "luciareed@unia.com",
      phone: "+1 (902) 507-2069",
      address: "782 Ridgewood Avenue, Homeworth, Missouri, 948"
    },
  '5a6b0087eb6b2f630d741551':  {
      id: "5a6b0087eb6b2f630d741551",
      age: 23,
      name: "Rachael Finley",
      gender: "female",
      company: "INSOURCE",
      email: "rachaelfinley@insource.com",
      phone: "+1 (956) 425-3831",
      address: "118 Ridge Court, Bedias, Mississippi, 1332"
    },
  '5a6b00875354977607dc7813':  {
      id: "5a6b00875354977607dc7813",
      age: 22,
      name: "Reilly Patrick",
      gender: "male",
      company: "SENMEI",
      email: "reillypatrick@senmei.com",
      phone: "+1 (931) 582-2799",
      address: "235 Thatford Avenue, Vaughn, Louisiana, 8555"
    },
  '5a6b00878e1696903536ff3a':  {
      id: "5a6b00878e1696903536ff3a",
      age: 31,
      name: "Consuelo Hardin",
      gender: "female",
      company: "EXTREMO",
      email: "consuelohardin@extremo.com",
      phone: "+1 (890) 431-3134",
      address: "402 Mermaid Avenue, Norris, New Mexico, 4919"
    }
}

export const getRows = () => new Promise((resolve, reject) => {
  console.log('getRows')
  if (true) {
    resolve(data)
  }
  else {
    reject(Error('It broke'))
  }
})

export const deleteRow = id => new Promise((resolve, reject) => {
  if (data[id]) {
    delete data[id]
    resolve()
  }
  else {
    reject(Error('It broke'))
  }
})

export const editRow = row => new Promise((resolve, reject) => {
  if (true) {
    row[row.id] = row
    resolve(true)
  }
  else {
    reject(Error('It broke'))
  }
})


