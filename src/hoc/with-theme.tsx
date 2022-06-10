import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, Theme } from '@balance-pl/lego'

import theme from '@balance-pl/lego/themes/default/theme.module.scss'

const withTheme = (component: JSX.Element) => (
  <ThemeProvider theme={theme as Theme}>{component}</ThemeProvider>
)

function renderWithProviders(component: JSX.Element) {
  const { container, rerender: nativeRerender } = render(withTheme(component))
  const rerender = (componentRerender: JSX.Element) =>
    nativeRerender(withTheme(componentRerender))
  return { container, rerender }
}

export { renderWithProviders as render }
