import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LSidebar from './global/LSidebar'
import Topbar from "./global/Topbar";
import Approute from "./route/Approute";
import './App.css'

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
              <LSidebar/>
            <main className="content px-6">
              <Topbar/>
              <Approute/>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;