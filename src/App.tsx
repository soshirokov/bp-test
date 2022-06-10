import { Theme, ThemeProvider } from '@balance-pl/lego'
import theme from '@balance-pl/lego/themes/default/theme.module.scss'

import './App.scss'
import { UserForm } from './Components/UserForm'

function App() {
  return (
    <ThemeProvider theme={theme as Theme}>
      <div className="App">
        <UserForm />
      </div>
    </ThemeProvider>
  )
}

export default App
