/*
// These are the actions you can use and keep the calls here to use firebase authentication (NB: Use redux-thunk)

import firebaseService from '~/config/FirebaseConfig';

import firebase, {firebaseService} from '../firebase';


export const restoreSession = () => dispatch => {
  dispatch(types.SESSION_LOADING);
  dispatch(type: types.SESSION_RESTORING);

  firebaseService.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(type: types.SESSION_SUCCESS, user);
    } else {
      dispatch(type: types.SESSION_LOGOUT);
    }
  });
};

export const loginUser = (email, password) => dispatch => {
  dispatch(types.SESSION_LOADING);

  firebaseService
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(type: types.SESSION_SUCCESS, user);
    })
    .catch(error => {
      dispatch(type: types.SESSION_ERROR, error.message);
    });
};

export const signupUser = (email, password) => dispatch => {
  dispatch(types.SESSION_LOADING);

  firebaseService
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(type: types.SIGNUP_SUCCESS, user);
    })
    .catch(error => {
      dispatch(type: types.SESSION_ERROR, error.message);
    });
};

export const logoutUser = () => dispatch => {
  dispatch(types.SESSION_LOADING);

  firebaseService
    .auth()
    .signOut()
    .then(() => {
      dispatch(type: types.SESSION_LOGOUT);
    })
    .catch(error => {
      dispatch(type: types.SESSION_ERROR, error.message);
    });
};


// ----------------------------------------------------------------------------------------------------------


export function fetchTodos(uid) {
  return (dispatch, getState) => {
    const todosRef = firebaseService.child(`todos/${uid}`);

    return todosRef.once('value').then(snapshot => {
      const todos = snapshot.val() || {};

      Object.keys(todos).map(todoId => {
        const parsedTodos = {
          id: todoId,
          ...todos[todoId]
        };

        dispatch(addTodo(parsedTodos));
      });
    });
  };
}

export function startAddTodo(text) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todo = {
      text,
      isDone: false,
      isStarred: false
    };
    const todoRef = firebaseService.child(`todos/${UID}`).push(todo);

    dispatch(addTodo({
      id: todoRef.key,
      ...todo
    }));

    todoRef.then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startUpdateTodo(id, key, value) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseService.child(`todos/${UID}/${id}`);
    let updates = {};
    updates[key] = value;

    dispatch(updateTodo(id, updates));

    todoRef.update(updates).then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startRemoveTodo(id) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseService.child(`todos/${UID}/${id}`);

    dispatch(removeTodo(id));

    todoRef.remove().then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

*/
// ------------------------------------------------------------------------------------------------------------------------
/*
import md5 from 'md5';
import DeviceInfo from 'react-native-device-info';
import firebase from 'react-native-firebase';

class FirebaseService {

  static async signIn(idToken, accessToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    return await firebase.auth().signInWithCredential(credential);
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

  static addProduct(imageUrl, name, price, color, size) {
    return this.productsCollection().add({ imageUrl, name, price, color, size });
  }

  static setProduct(id, imageUrl, name, price, color, size) {
    return this.productsCollection().doc(id).set({ imageUrl, name, price, color, size });
  }

  static deleteProduct(id) {
    return this.productsCollection().doc(id).delete();
  }

  static productsCollection() {
    return firebase.firestore().collection('products');
  }

  static uploadImage(path) {
    const id = imageId();
    const metadata = { cacheControl: 'public,max-age=604800', contentType: 'image/jpeg' };
    return firebase.storage().ref(`/products/images/${id}.jpg`).putFile(path, metadata);
  }

}

// used only to generate a unique id
// ideally, the server would generate this unique id
function imageId() {
  const uniqueID = DeviceInfo.getUniqueID();
  const date = Date.parse(Date());
  return md5(`${uniqueID}-${date}`);
}

export { FirebaseService };
*/
