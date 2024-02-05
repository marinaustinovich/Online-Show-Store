import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { App } from './components';
import { initializeI18next } from './i18n';
import { I18nextProvider } from 'react-i18next';

import './index.scss';
import i18next from 'i18next';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

initializeI18next()
    .then(() => {
        const rootElement = document.getElementById('root');

        if (!rootElement) {
            throw new Error("Cannot find element with id 'root'");
        }

        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <I18nextProvider i18n={i18next}>
                <BrowserRouter>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <App />
                        </PersistGate>
                    </Provider>
                </BrowserRouter>
            </I18nextProvider>,
        );
    })
    .catch(error => {
        console.error('Failed to initialize i18next:', error);
    });

reportWebVitals();
