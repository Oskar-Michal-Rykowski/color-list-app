import React from 'react';
import Form from './components/layout/Form/Form';
import Header from './components/layout/Header/Header';
import List from './components/layout/List/List';
import MainLayout from './components/layout/MainLayout/MainLayout.tsx';

function App() {
  const basicList = ['#FFFFFF', '#FF0000', '#FFFF00'];

  const [list, updateList] = React.useState([...basicList]);
  console.log('list', list);

  const handleNewColor = (newColor) => {
    console.log(newColor);
    const exists = list.find((color) => color === newColor);
    if (exists) {
      alert('The color is already on the list! Please, chose another color.');
    } else {
      updateList([...list, newColor]);
    }
    console.log('list', list);
  };

  const removeColor = (removingColor) => {
    const newList = list.filter((color) => color !== removingColor);
    updateList([...newList]);
  };

  return (
    <MainLayout>
      <Header />
      <Form handleNewColor={handleNewColor} />
      <List list={list} removingFunction={removeColor} />
    </MainLayout>
  );
}

export default App;
