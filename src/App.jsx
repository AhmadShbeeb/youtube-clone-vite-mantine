import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>: routes to the FIRST matched path */}
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        {/* <Route path='/video/:id' exact element={<VideoDetail />} /> */}
        {/* <Route path='/channel/:id' exact element={<ChannelDetail />} /> */}
        {/* <Route path='/search/:searchTerm' exact element={<SearchFeed />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
