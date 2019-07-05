import {Injectable} from "@angular/core";
import {Joueurs} from "../models/interface-Joueurs";

@Injectable()
export  class JoueursService {

  constructor(){

  }

  ListJours: Joueurs[]= [

    {
      title: 'Sadio-Mane',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/sd.jpg'
    },
    {
      title: 'Lionel Messi',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/me.jpg'
    },

    {
      title: 'Cristiono Ronaldo',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/cr.jpg'
    },

    {
      title: 'Neymar Jr',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/ne.jpg'
    }
    ,
    {
      title: 'Gyan Assamoha',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/gya.jpg'
    },
    {
      title: 'Mohamed-Salah',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/sala.jpg'
    },
    {
      title: 'Thievy Bifouma',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/tbf.jpg'
    },
    {
      title: 'Gervinho',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/gv.jpg'
    },
    {
      title: 'Michael Essien',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/mc.jpg'
    },
    {
      title: 'Salement Kalou',
      description : 'Il est actuellement le meilleur Jour de la ligues de champions',
      image: 'assets/imgs/joueurs/kl.jpg'
    }
  ]

}
