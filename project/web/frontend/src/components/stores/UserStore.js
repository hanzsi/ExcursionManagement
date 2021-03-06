import { extendObservable } from "mobx";

//store some data for currently logged user
class UserStore {
  constructor() {
    //contains properties for this store
    extendObservable(this, {
      loading: false,
      isLoggedIn: false,
      username: " ",
      name_first: " ",
      name_last: " ",
      user_type: " ",
      user_id: " ",
      user_no: " ",
    });
  }
}

export default new UserStore();
