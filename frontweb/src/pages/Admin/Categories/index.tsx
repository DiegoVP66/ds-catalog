import { Route, Switch } from 'react-router-dom';

const Categories = () => {
  return (
    <Switch>
      <Route path="/admin/categories" exact>
        <h1>Category List</h1>
      </Route>
      <Route path="/admin/categories/:categoryId">
        <h1>Category Form</h1>
      </Route>
    </Switch>
  );
};

export default Categories;
