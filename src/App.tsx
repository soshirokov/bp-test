import { Cell, Grid, Layout, Theme, ThemeProvider } from '@balance-pl/lego'
import theme from '@balance-pl/lego/themes/default/theme.module.scss'

import './App.scss'
import { UserForm } from './Components/UserForm'

function App() {
  return (
    <ThemeProvider theme={theme as Theme}>
      <div className="App">
        <Layout.Content>
          <Grid cols={[1, 1, 1]} gap={[25, 25]}>
            <Cell cols={[2, 3]}>
              <UserForm />
            </Cell>
          </Grid>
        </Layout.Content>
      </div>
    </ThemeProvider>
  )
}

export default App
