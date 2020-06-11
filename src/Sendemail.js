
  export default function sendEmail (toEmails, subject, message) {
    new Date();
    let current_datetime = new Date();
    toEmails = [toEmails];

    console.log(current_datetime.toString());
    return fetch('https://f2jkjy36k8.execute-api.us-west-2.amazonaws.com/Prod/send', {
      method: 'POST',
          headers: {
            "Accept": "*/*",
            "Host": "f2jkjy36k8.execute-api.us-west-2.amazonaws.com",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "http://mkdecision-form.s3-website-us-west-2.amazonaws.com",

            "Date": JSON.stringify({ current_datetime })
          },
      body: JSON.stringify({ toEmails, subject, message })
    })
  }
