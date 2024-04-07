import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App.tsx'
import { Home } from './components/screens/Home/Home.tsx'
import { Error404 } from './components/screens/404/404.tsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </App>
  </BrowserRouter>
)
