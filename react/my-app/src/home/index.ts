import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList} from '@/api/movie'

const getters = {

}

const state: State = {
  movieList: [
    {
      name: '霸王别姬',
      title: '排名第一',
      id: '12345'
    }
  ]
}

const mutations = {};
const actions = {
  // api 前后端的分离点
  // commit mutitation
  async movieList(context: { commit: Commit }, cate: string) {
    const res = await getMovieList(cate)
      .then((response: any) => response)
    return res;
  }
}

export default {
  getters,
  state,
  mutations,
  actions
}