import { useState } from 'react';

const Trandition = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErros] = useState({
    username: '',
    email: '',
    password: '',
  });
  //validate
  const inValid = () => {
    if (!formData.username) {
      setErros({ ...errors, username: ' User name is required' });
      return;
    }
    if (!formData.email) {
      setErros({ ...errors, email: 'Email is required' });
      return;
    }
    if (!formData.password) {
      setErros({ ...errors, password: 'Password is requied' });
      return;
    }
  };
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (event.target.value) {
      setErros({
        ...errors,
        [event.target.name]: '',
      });
    }
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inValid();
    console.log('check form data', formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData['username']}
            onChange={(event) => handleOnChange(event)}
          />
          {errors.username && <p className="invalid">{errors.username}</p>}
          {console.log('abc', errors.username)}
        </div>
        <div className="form-group">
          <label>Email address :</label>
          <input
            name="email"
            className="form-control"
            value={formData['email']}
            onChange={(event) => handleOnChange(event)}
          />
          {errors.email && <p className="invalid">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password :</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={formData['password']}
            onChange={(event) => handleOnChange(event)}
          />
          {errors.password && <p className="invalid">{errors.password}</p>}
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Trandition;
