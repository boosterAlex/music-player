import { useEffect, useState } from "react"

export function App() {

  const [tracks, setTracks] = useState(null)
  const [selectedTrackId, setSelectedTrackId ] = useState<null | number>(null)

  useEffect(()=>{
     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
          'api-key': '5ee87017-690c-4fb4-aa8c-7e21225d89b1'
        }
     }).then(res => res.json()).then(res=> setTracks(res.data))
  }, [])


  if(tracks === null) {
    return (
      <>
        <h1>Music Player</h1>
        <h2>Loading...</h2>
      </>
    )
  }

  if(tracks.length === 0) {
    return (
      <>
        <h1>Music Player</h1>
        <h2>No tracks</h2>
      </>
    )
  }

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={()=>{setSelectedTrackId(null)}}>Reset selection</button>
        <ul>
          {tracks.map((track)=>{
           return <li key={track.id} style={{
            border: track.id === selectedTrackId ? '1px solid white' : 'none' 
           }}>
                   <div onClick={()=>{
            setSelectedTrackId(track.id)
           }} >{track.attributes.title}</div>
                   <audio src={track.attributes.attachments[0].url} controls></audio>
                  </li> 
  }) }
        </ul>
    </div>
  )
}

