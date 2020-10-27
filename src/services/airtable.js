export default function saveMessage(fields) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_APP_NAME}/messages`, {
      method: 'POST',
      body: JSON.stringify({
        records: [{ fields }],
      }),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          resolve();
        } else {
          reject();
        }
      })
      .catch(() => reject());
  });
}
