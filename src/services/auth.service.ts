 import * as firebase from 'firebase';

export class AuthService {

  public authenticated:boolean;

  public token: string;
  signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
          this.saveToken();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
          this.saveToken();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  public saveToken(){
    this.token ="azerty1";
    localStorage.setItem("myToken", this.token);
  }


  deconnexion() {
    localStorage.removeItem('myToken');
    firebase.auth().signOut();
  }

  public loadToken(){
    this.token = localStorage.getItem("myToken");
    if(this.token == 'azerty1'){
      this.authenticated = true;
      return true;
    }else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
}
