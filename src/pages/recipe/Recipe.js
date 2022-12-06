import "./Recipe.css";
import { useParams } from "react-router-dom";
// import { useFetch } from "../../hook/useFetch";
import { useTheme } from "../../hook/useTheme";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

const Recipe = () => {
  const { id } = useParams();
  // const url = "http://localhost:3000/recipes/" + id;
  // const { error, isPending, data: recipe } = useFetch(url);
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });

    //cleanup function
    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore
      .collection("recipes")
      .doc(id)
      .update({ title: `Updated recipe test` });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update recipe</button>
        </>
      )}
    </div>
  );
};

export default Recipe;
