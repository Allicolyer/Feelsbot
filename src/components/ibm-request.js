const ibmRequest = (text) => {
  const url = process.env.REACT_APP_IBM_URI
  return fetch(`${url}`, {
    body: `{"text":"${text}","features":{"emotion":{}}}`,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then((res) => res.json())
}

export default ibmRequest;
