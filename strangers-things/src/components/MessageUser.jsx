import { useState } from "react";

export default async function MessageUser({token}) {

    try {
        const response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            message: {
              content: content
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    

    return (
        <></>
    )
}