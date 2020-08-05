import React from 'react';
import { IEpisode, IProps } from '../types/interfaces';

const EpisodesList = (props: IProps): Array<JSX.Element> => {
  // add togglefavaction, favorites and store
  const { episodes, toggleFavAction, favorites, store } = props;
  //declare const { state, dispatch } = store
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={!!episode.image ? episode.image.medium : ''}
          alt={`Transformers - ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button
            type='button'
            //add an onclick [ onClick={() => toggleFavAction(state, dispatch, episode)} ]
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {/* Add {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}, to change the text based on the favorites state. */}
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
