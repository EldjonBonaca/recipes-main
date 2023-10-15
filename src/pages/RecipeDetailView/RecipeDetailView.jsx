import { useLocation } from 'react-router-dom';
import MealInfo from '../../components/MealInfo/MealInfo';
import Instructions from '../../components/Instructions/Instructions';
import './RecipeDetailView.css';

export default function RecipeDetailView ({ favorites, setFavorites }) {
  const location = useLocation();
  
  return (
    <main className='recipe-detail-view'>
      <div className='recipe-detail-wrapper'>
        <MealInfo favorites={favorites} setFavorites={setFavorites} {...location.state} />
        <Instructions strInstructions={location.state.strInstructions} />
      </div>
    </main>
  );
}