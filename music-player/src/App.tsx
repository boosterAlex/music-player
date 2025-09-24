import { useState } from "react"

const tracks = [
{id: 1, name: 'Sountrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'}, 
{id: 2, name: 'Soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
]

export function App() {

  const [selectedTrackId, setSelectedTrackId ] = useState<null | number>(null)

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={()=>{setSelectedTrackId(null)}}>Reset selection</button>
        <ul>
          {tracks.map((track)=>{
           return <li key={track.name} style={{
            border: track.id === selectedTrackId ? '1px solid white' : 'none' 
           }}>
                   <div onClick={()=>{
            setSelectedTrackId(track.id)
           }} >{track.name}</div>
                   <audio src={track.url} controls></audio>
                  </li> 
  }) }
        </ul>
    </div>
  )
}

