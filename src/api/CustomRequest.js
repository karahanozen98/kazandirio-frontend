const apiUrl = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : null;

function CustomRequest(endpoint, method, body) {
  const token = localStorage.getItem("authtoken");

  return new Request(`${apiUrl}/${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}
export default CustomRequest;
