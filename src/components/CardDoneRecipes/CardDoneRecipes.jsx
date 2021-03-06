import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import { RecipeContainer, RecipeImg } from './styles';

function CardDoneRecipes({
  image,
  name,
  index,
  type,
  category,
  alcoholic,
  doneDate,
  area,
  id,
  tags,
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`)
      .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
    setCopied(true);
  };
  console.log(tags);
  return (
    <RecipeContainer>
      <Link to={ `/${type}s/${id}` }>
        <RecipeImg
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          className="recipe-done-image"
        />
      </Link>
      <div>
        <Link to={ `/${type}s/${id}` }>
          <h3 data-testid={ `${index}-horizontal-name` }>
            {name}
          </h3>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>
          {type === 'food' ? (
            `${area} - ${category}`
          ) : (
            `${alcoholic}`
          )}
        </p>
        <p data-testid={ `${index}-horizontal-done-date` }>
          {doneDate}
        </p>
        <div>
          {tags && tags.map((tagName) => (
            <p
              data-testid={ `${index}-${tagName}-horizontal-tag` }
              key={ `${tagName}${index}` }
            >
              {tagName}
            </p>
          ))}
        </div>
        <button
          data-testid={ `${index}-horizontal-share-btn` }
          type="button"
          src="src/images/shareIcon.svg"
          onClick={ copyToClipboard }
        >
          <img src={ shareIcon } alt="share" />
        </button>
        { copied && <span>Link copied!</span>}
      </div>
    </RecipeContainer>
  );
}

export default CardDoneRecipes;

CardDoneRecipes.defaultProps = {
  doneDate: '',
  category: '',
  image: '',
  name: '',
  index: '',
  type: '',
  alcoholic: '',
  area: '',
  id: '',
  tags: [],
};
CardDoneRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  category: PropTypes.string,
  alcoholic: PropTypes.string,
  doneDate: PropTypes.string,
  area: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.any),
};
