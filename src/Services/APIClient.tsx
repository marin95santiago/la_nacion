import Axios from "axios";

export const getArticles = async () => {
  try {
    const articles = await Axios.get(
      "https://api-test-ln.herokuapp.com/articles"
    );
    return articles.data.articles;
  } catch (error) {
    const err = {
      message: 'Ocurrió un problema al momento de cargar la información',
      error: error,
    }
    return err;
  }
};
