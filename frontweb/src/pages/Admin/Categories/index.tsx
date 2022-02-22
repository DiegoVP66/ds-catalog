import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';

const Categories = () => {
  return (
    <Switch>
      <Route path="/admin/categories" exact>
        <CategoriesList />
      </Route>
      <Route path="/admin/categories/:categoryId">
        <h1>Category Form</h1>
      </Route>
    </Switch>
  );
};

export default Categories;
