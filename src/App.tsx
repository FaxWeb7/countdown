import { FC, ReactNode } from 'react'
import { Footer } from './components/layout/Footer/Footer'
import './styles/global.scss'

interface IAppProps {
  children: ReactNode
}

export const App: FC<IAppProps> = ({ children }: IAppProps) => {
  return (
    <div className="wrapper">
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default App
