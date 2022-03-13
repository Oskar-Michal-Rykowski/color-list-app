import Form from './components/layout/Form/Form';
import Header from './components/layout/Header/Header';
import List from './components/layout/List/List';
import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Header />
      <Form />
      <List />
    </MainLayout>
  );
}

export default App;
