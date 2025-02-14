interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strMeasure16?: string;
  strMeasure17?: string;
  strMeasure18?: string;
  strMeasure19?: string;
  strMeasure20?: string;
}
interface RandomMealProps {
  meal: Meal | Meal[]; // Теперь meal может быть либо объектом, либо массивом
}

const RandomMeal: React.FC<RandomMealProps> = ({ meal }) => {
  const currentMeal = Array.isArray(meal) ? meal[0] : meal; // Если это массив, берем первый элемент

  if (!currentMeal || !currentMeal.idMeal) {
    return <div>Данные о рецепте отсутствуют</div>;
  }

  // Функция для отображения ингредиентов и их мер
  const renderIngredients = (meal: Meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}` as keyof Meal;
      const measureKey = `strMeasure${i}` as keyof Meal;

      const ingredient = meal[ingredientKey];
      const measure = meal[measureKey];

      if (
        ingredient &&
        ingredient.trim() !== "" &&
        measure &&
        measure.trim() !== ""
      ) {
        ingredients.push(
          <li key={i}>
            {ingredient}: {measure}
          </li>
        );
      }
    }
    return ingredients.length > 0 ? (
      ingredients
    ) : (
      <li>Ингредиенты отсутствуют</li>
    );
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{currentMeal.strMeal}</h1>
      <img
        src={currentMeal.strMealThumb || "/default-image.jpg"}
        alt={currentMeal.strMeal || "Recipe"}
        style={styles.image}
      />
      <p style={styles.category}>
        <strong>Категория:</strong> {currentMeal.strCategory}
      </p>
      <p style={styles.area}>
        <strong>Регион:</strong> {currentMeal.strArea}
      </p>
      <h2 style={styles.subtitle}>Ингредиенты:</h2>
      <ul style={styles.ingredientsList}>{renderIngredients(currentMeal)}</ul>
      <h2 style={styles.subtitle}>Инструкции:</h2>
      <p style={styles.instructions}>{currentMeal.strInstructions}</p>
      {currentMeal.strYoutube && (
        <div style={styles.videoContainer}>
          <h2 style={styles.subtitle}>Видео рецепта:</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              currentMeal.strYoutube.split("v=")[1]
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.video}
          ></iframe>
        </div>
      )}
    </div>
  );
};

// Стили для компоненты с правильной типизацией
const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center" as const, // Указываем тип 'center' как литерал
    color: "#333",
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    margin: "20px auto",
    borderRadius: "8px",
  },
  category: {
    textAlign: "center" as const, // Указываем тип 'center' как литерал
    fontSize: "18px",
    color: "#555",
  },
  area: {
    textAlign: "center" as const, // Указываем тип 'center' как литерал
    fontSize: "18px",
    color: "#555",
  },
  subtitle: {
    color: "#333",
    marginTop: "20px",
  },
  ingredientsList: {
    listStyleType: "none",
    padding: "0",
  },
  instructions: {
    whiteSpace: "pre-line",
    lineHeight: "1.6",
  },
  videoContainer: {
    marginTop: "20px",
  },
  video: {
    width: "100%",
    height: "400px",
    border: "none",
    borderRadius: "8px",
  },
};

export default RandomMeal;
