import "./Home.css";

// import { useFetch } from "../../hook/useFetch";
import { projectFirestore } from "../../firebase/config";

import RecipeList from "../../components/RecipeList";
import { useEffect, useState } from "react";

const Home = () => {
  //fetch from json server
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  // fetch from firestore database
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) =>
            results.push({ id: doc.id, ...doc.data() })
          );
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    // cleanup function
    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
