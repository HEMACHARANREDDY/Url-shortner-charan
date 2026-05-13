import React from 'react'
import Input from '../../Components/UrlShortner/input';
import Response from '../../Components/UrlShortner/Response';

export default function ShortenUrl() {
    const [response, setResponse] = React.useState(null);
  return (
    <div>
      {
        response ?<Response/> : <Input setResponse={setResponse} />
      }
    </div>
  )
}
