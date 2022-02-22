import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import CategoryForm from './CategoryForm';

const Categories = () => {
  return (
    <Switch>
      <Route path="/admin/categories" exact>
        <CategoriesList />
      </Route>
      <Route path="/admin/categories/:categoryId">
        <CategoryForm />
      </Route>
    </Switch>
  );
};

export default Categories;
