

export default function sendEmail (toEmails, subject, message) {
  return fetch('https://f2jkjy36k8.execute-api.us-west-2.amazonaws.com/Prod/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "User-Agent": "PostmanRuntime/7.19.0",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "a188f864-1784-4882-b082-8c206088fc1b,d5b33f2f-483f-4329-8a14-bfcaf384b5fe",
      "Host": "f2jkjy36k8.execute-api.us-west-2.amazonaws.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    body: JSON.stringify({ toEmails, subject, message })
  })
}
