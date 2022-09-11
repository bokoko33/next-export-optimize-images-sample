import 'destyle.css';
import '~/styles/app.scss';
import { SampleContextProvider } from '~/context/SampleContext';

function MyApp({ Component, pageProps }) {
  return (
    <SampleContextProvider>
      <Component {...pageProps} />
    </SampleContextProvider>
  );
}

export default MyApp;
