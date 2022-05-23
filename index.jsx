 function PhoneBookForm({ addEntryToPhoneBook }) {
    const [state,setState] = React.useState({userFirstname:'',userLastname:'',userPhone:''});
    const {userFirstname,userLastname,userPhone} = state;
    const handleChange = (e) => {
      setState({...state,[e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
      e.preventDefault();
      addEntryToPhoneBook(state)
      setState({userFirstname:'',userLastname:'',userPhone:''});
    }
    return (
      <form onSubmit={onSubmit}>
        <label>First name:</label>
        <br />
        <input
          className='userFirstname'
          name='userFirstname'
          type='text'
          value={userFirstname}
          onChange={handleChange}
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input
          className='userLastname'
          name='userLastname'
          type='text'
          value={userLastname}
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className='userPhone'
          name='userPhone'
          type='text'
          value={userPhone}
          onChange={handleChange}
        />
        <br/>
        <input
          className='submitButton'
          type='submit'
          value='Add User'
        />
      </form>
    )
  }

  function InformationTable({entries}) {
    return (
      <table className='informationTable'>
        <thead>
        <tr>
          <th >First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>{entries.map((e) => (
          <tr>
            <td>{e.userFirstname}</td>
            <td>{e.userLastname}</td>
            <td>{e.userPhone}</td>
          </tr>
        ))}</tbody>
      </table>
    );
  }

  function Application() {
    const [entry,setEntry] = React.useState([]);
    const addEntry = (e) => {
      const arr = [...entry];
      arr.push(e);
      arr.sort((a,b) => {
        const first = a.userLastname.toLowerCase();
        const second = b.userLastname.toLowerCase();
        if(first<second) { return -1; }
        if(first>second) { return 1; }
        return 0
      });
      setEntry(arr);
    }

    return (
      <section>
        <PhoneBookForm addEntryToPhoneBook={addEntry} />
        <InformationTable entries={entry}/>
      </section>
    );
  }
