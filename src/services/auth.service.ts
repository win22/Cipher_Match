 import * as firebase from 'firebase';

export class AuthService {

  public authenticated:boolean;
  public authenticated2:boolean;
  public authenticated3:boolean;
  public token: string;
  public  token2: string;
  public token3 : string;
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

  public  login(email:string, password:string){
    if (email== 'admin@gmail.com' && password=='admin1234'){
      this.authenticated3 = true
      this.saveTokenA();

    }else {
      this.authenticated3 = false
    }
    return this.authenticated3;
  }


  public saveToken(){
    this.token ="azerty1";
    localStorage.setItem("myToken", this.token);
  }

  public saveTokenF(){
    this.token2 = "facebook";
    localStorage.setItem("Face", this.token2);
  }

  public saveTokenA(){
    this.token3 = "admin";
    localStorage.setItem("AD", this.token3)
  }


  deconnexion() {
    localStorage.removeItem('myToken');
    localStorage.removeItem("Face");
    localStorage.removeItem("AD");
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

  public loadTokenF(){
    this.token2 = localStorage.getItem("Face");
    if(this.token2 == 'facebook'){
      this.authenticated2 = true;
      return true
    }else {
      this.authenticated2 = false;
    }
    return this.authenticated2;
  }

  public loadTokenA(){
    this.token3 = localStorage.getItem("AD");
    if(this.token3 == 'admin'){
      this.authenticated3 = true;
      return true
    }else {
      this.authenticated3 = false;
    }
    return this.authenticated3;
  }
}
