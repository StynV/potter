/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentDetail from './pages/StudentDetail'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import commonEn from './translations/en/common.json'
import commonNl from './translations/nl/common.json'

i18next
  .init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        common: commonEn
      },
      nl: {
        common: commonNl
      }
    }
  })

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/student" element={<StudentDetail />} >
                <Route path=':name' element={<StudentDetail />} />
              </Route>
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
