//Added IState,
import { IAction, IEpisode, IState, Dispatch } from './types/interfaces';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=transformers&embed=episodes';

  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  });
};

//Add IState withits type
export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  //const episodeInFav = state.favorites.includes(episode)
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  };
  //add an if statement
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
