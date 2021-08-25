import firebase from "firebase/app";

export default {
  actions: {
    async fetchCategories({ commit, dispatch }) {
      try {
        const uid = await dispatch("getUid");
        const categories =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/categories`)
              .once("value")
          ).val() || {};

        //format data that comes from backend
        // const cats = [];
        // Object.keys(categories).forEach((key) => {
        //   cats.push({
        //     title: categories[key].title,
        //     limit: categories[key].limit,
        //     id: key,
        //   });
        // });
        // return cats;

        //also format data that comes from backend but this is more beautiful and smart
        return Object.keys(categories).map((key) => ({
          ...categories,
          id: key,
        }));
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },

    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch("getUid");
        const category = await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .push({ title, limit });
        return {
          title,
          limit,
          id: category.key,
        };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
};
