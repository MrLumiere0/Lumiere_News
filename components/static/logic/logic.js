export default function formValidationSignUp(
  { firstName },
  { lastName },
  { email },
  { password },
  { confirmPassword },
  { setErrors }
) {
  const validationErrors = {};
  if (!firstName.trim()) {
    validationErrors.first = "First Name is required";
  }
  if (!lastName.trim()) {
    validationErrors.last = "Last Name is required";
  }
  if (!email.trim()) {
    validationErrors.email = "Email is required";
  } else if (/\S+@\S+\.S+/.test(email)) {
    validationErrors.username = "Valid email is required";
  }

  if (!password.trim()) {
    validationErrors.password = "Password is required";
  }

  if (!confirmPassword.trim()) {
    validationErrors.confirmPassword = "Confirm password is required";
  }
  if (!(password.trim() === confirmPassword.trim())) {
    validationErrors.match = "Password and Confirm password must match";
  }

  setErrors(validationErrors);
}

export function formValidationSignIn({ email }, { password }, { setErrors }) {
  const validationErrors = {};
  if (!email.trim()) {
    validationErrors.email = "Email is required";
  } else if (/\S+@\S+\.S+/.test(email)) {
    validationErrors.username = "Valid email is required";
  }

  if (!password.trim()) {
    validationErrors.password = "Password is required";
  }
  setErrors(validationErrors);
}
