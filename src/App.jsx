import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChannelDetails, HomePage, VideoDetails } from './components'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>: routes to the FIRST matched path */}
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        {/* <Route path='/search/:searchTerm' exact element={<SearchFeed />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
