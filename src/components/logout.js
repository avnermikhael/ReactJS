function logout() {
  // remove user from local storage to log user out
  // localStorage.removeItem("jwtToken");
  // localStorage.removeItem("jwtRole");

  localStorage.clear();

  window.location.replace("/signin");
}

export default logout;
