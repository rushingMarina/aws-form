
export default function saveMessage(name, email, message) {
  fetch( 'https://3ht5j7v3ji.execute-api.us-west-2.amazonaws.com/Prod/',  {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            })
  })
  .then(response => response.json())
  .then((response) => {
    console.log(response);
  });
}
