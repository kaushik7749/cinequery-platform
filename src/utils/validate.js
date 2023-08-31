export const checkValidData = (email, password, name) => {
  //To get this regex google regex for email validation
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const isName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPassword) return "Password is not valid";
  if (!isName) return "Name is not valid";
};
