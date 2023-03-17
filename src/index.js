import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import { orange, yellow } from '@mui/material/colors';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Root from "./routes/root";
import Picture from "./routes/picture";
import Pokemon from './routes/pokemon';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: yellow[500],
    },
  },
  typography: {
    fontFamily: [
      'Fira Code',
      'monospace',
    ].join(','),
  },
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "picture/:uuid",
    element: <Picture />,
  },
  {
    path: "pokemon/:id",
    // loader: pokemonLoader,
    element: <Pokemon />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();