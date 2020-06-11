

export default function sendEmail (toEmails, subject, message) {
  return fetch('https://f2jkjy36k8.execute-api.us-west-2.amazonaws.com/Prod/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "*/*",
      "Host": "f2jkjy36k8.execute-api.us-west-2.amazonaws.com",
    },
    body: JSON.stringify({ toEmails, subject, message })
  })
}
