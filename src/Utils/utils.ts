import moment from "moment";

export type Tag = {
  tag: string,
  slug: string,
  total: number,
}

// parse available tags
// articles grouped by "text" property
export const parseAvailableTags = (articles: any) => {
  // aux tag (is to avoid mistakes with typescript)
  const tagsAvailable = [{tag: 'TAG_FOR_REMOVE', slug: '', total: 0}];

  articles.forEach((article: any) => {
    article.taxonomy.tags.forEach((tag: any) => {
      let add = true;
      tagsAvailable.forEach((tagSaved) => {
        // if article has a tag that alredy exist in "tagsAvailable" add is false
        if (tagSaved.tag === tag.text) {
          add = false;
          // SUM 1 for this tag
          tagSaved.total += 1;
        }
      });

      // only add products nonexistent in "tagsAvailable"
      if (add === true) {
        const newTagToSave = {
          tag: tag.text,
          slug: tag.slug,
          // initial total is 1
          total: 1
        }
        tagsAvailable.push(newTagToSave);
      }
    });
  });

  // delete first tag "TAG_FOR_REMOVE"
  tagsAvailable.shift();

  // sort tags
  const sortTags = sortArrayTags(tagsAvailable)
  return sortTags;
}

// sort tags per "total" DESC
const sortArrayTags = (tags: Tag[]) => {
  tags.sort(function (a, b) {
    if (a.total < b.total) {
      return 1;
    }
    if (a.total > b.total) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return tags;
}

// parse date with format (example) "1 de junio 2019"
export const parseDates = (articles: any) => {
  articles.forEach((article: any) => {
    // moment lenguage config spanish
    moment.locale('es');
    article.parseDate = moment(article.display_date).format("D MMMM YYYY");
  })
  return articles;
}

export const parseArticlesData = (articles: any) => {
  // parse dates
  const articlesWithParseDate = parseDates(articles);
  return articlesWithParseDate;
}