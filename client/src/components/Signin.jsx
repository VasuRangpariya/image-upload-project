const SignIn = (props) => {
  return (
    <div className='col-md-6 signUpContainer' style={{ textAlign: "left" }}>
      <h2>Login</h2>
      <div className='inputForm mt-3'>
        <label>Username : </label>
        <input
          type='text'
          className='form-control w-75'
          name='luser'
          value={props.luser}
          onChange={props.HandleChange}
          placeholder='Enter Username'></input>
        <br />
        <label>Password :</label>
        <input
          type='password'
          className='form-control w-75'
          name='lpass'
          value={props.lpass}
          onChange={props.HandleChange}
          placeholder='Enter Password'></input>
        <br />
      </div>
      <button
        className='btn btn-warning mt-4 w-25'
        onClick={props.HnaldeSignIn}>
        Sign In
      </button>
    </div>
  );
};
export default SignIn;
