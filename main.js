const tracks = [
  {name: 'Sountrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'}, 
  {name: 'Soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
]

const rootEl = document.querySelector('#root')

const titleEl = document.createElement('h1')
titleEl.append('Music Player')
rootEl.append(titleEl)

const tracksEl = document.createElement('ul')

tracks.forEach((track) => {
  const trackEl = document.createElement('li')
  const trackElName = document.createElement('div')
    trackElName.append(track.name)
  const trackElPlayer = document.createElement('audio')
    trackElPlayer.src = track.url
    trackElPlayer.controls = true
  trackEl.append(trackElName)
  trackEl.append(trackElPlayer)
  tracksEl.append(trackEl)

})

rootEl.append(tracksEl)
