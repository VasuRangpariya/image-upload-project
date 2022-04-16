const SignUp = (props) => {
  console.log(props);
  return (
    <div className='col-md-6 signUpContainer' style={{ textAlign: "left" }}>
      <h2>Sign Up</h2>
      <div className='inputForm mt-3'>
        <label>Name : </label>
        <input
          type='text'
          className='form-control w-75'
          name='username'
          placeholder='Enter Name'
          value={props.data.username}
          onChange={props.HandleChange}></input>
        <br />
        <label>Email :</label>
        <input
          type='email'
          className='form-control w-75'
          name='email'
          placeholder='Enter Email'
          value={props.data.email}
          onChange={props.HandleChange}></input>
        <br />
        <input
          type='password'
          className='form-control w-75'
          name='password'
          placeholder='Enter Password'
          value={props.data.password}
          onChange={props.HandleChange}></input>
        <br />
        <div>
          <input
            type='radio'
            className='form-check-input'
            id='normalUser'
            name='userType'
            required
            value='User'
            onChange={props.HandleChange}></input>
          &nbsp;&nbsp;<label htmlFor='normalUser'> Normal User</label>
          <br />
          <input
            type='radio'
            className='form-check-input'
            id='contributer'
            name='userType'
            required
            value='Contributer'
            onChange={props.HandleChange}></input>
          &nbsp;&nbsp;
          <label htmlFor='contributer'>Contributer</label>
          <br />
        </div>
      </div>
      <button
        className='btn btn-warning mt-4 w-25'
        onClick={props.HandleSignUp}>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
