import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Layout>
        <AppBar />
        <Footer />
      </Layout>
    </>
  );
};
