import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChannelDetails, HomePage, VideoDetails, Layout } from './components'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>: routes to the FIRST matched path */}
      <Routes>
        <Route path='/' exact element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/video/:videoId' element={<VideoDetails />} />
          <Route path='/channel/:channelId' element={<ChannelDetails />} />
          {/* <Route path='/search/:searchTerm' exact element={<SearchFeed />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
