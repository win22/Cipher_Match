import {Injectable} from "@angular/core";
import {MatchProgram} from "../models/matchProgram";

Injectable()

export class MatchProgramService {

  ListProgram: MatchProgram[] = [
    {
      title1: 'Barcelone',
      title2: 'Real',
      stadium: 'wembley stadium',
      date : '22/juin/2019',
      ticket: '2000 FCFA',
      images: [
        'assets/imgs/logo/logoBarca.png',
        'assets/imgs/logo/LogoReal.svg.png',
      ]
    },
    {
      title1: 'Paris',
      title2: 'Marseille',
      stadium: 'Paris stadium',
      date : '23/juin/2019',
      ticket: '2000 FCFA',
      images: [
        'assets/imgs/logo/paris.svg.png',
        'assets/imgs/logo/marseille.svg',
      ]
    },
    {
      title1: 'Liverpool',
      title2: 'Arsenal',
      stadium: 'wembley stadium',
      date : '24/juin/2019',
      ticket: '1500 FCFA',
      images: [
        'assets/imgs/logo/Li.png',
        'assets/imgs/logo/Arsenal_FC.svg',
      ]
    },
    {
      title1: 'Manchesterd',
      title2: 'Réal',
      stadium: 'wembley stadium',
      date : '25/juin/2019',
      ticket: '1500 FCFA',
      images: [
        'assets/imgs/logo/LogoManchester.png',
        'assets/imgs/logo/LogoReal.svg.png',
      ]
    },
    {
      title1: 'Barcelone',
      title2: 'Liverpool',
      stadium: 'wembley stadium',
      date : '26/juin/2019',
      ticket: '2000 FCFA',
      images: [
        'assets/imgs/logo/logoBarca.png',
        'assets/imgs/logo/Li.png',
      ]
    },
    {
      title1: 'Barcelone',
      title2: 'Real',
      stadium: 'wembley stadium',
      date : '22/juin/2019',
      ticket: '2000 FCFA',
      images: [
        'assets/imgs/logo/logoBarca.png',
        'assets/imgs/logo/LogoReal.svg.png',
      ]
    },
    {
      title1: 'Paris',
      title2: 'Marseille',
      stadium: 'Paris stadium',
      date : '23/juin/2019',
      ticket: '1000 FCFA',
      images: [
        'assets/imgs/logo/paris.svg.png',
        'assets/imgs/logo/marseille.svg',
      ]
    },
    {
      title1: 'Liverpool',
      title2: 'Arsenal',
      stadium: 'wembley stadium',
      date : '24/juin/2019',
      ticket: '1000 FCFA',
      images: [
        'assets/imgs/logo/Li.png',
        'assets/imgs/logo/Arsenal_FC.svg',
      ]
    },
    {
      title1: 'Manchesterd',
      title2: 'Réal',
      stadium: 'wembley stadium',
      date : '25/juin/2019',
      images: [
        'assets/imgs/logo/LogoManchester.png',
        'assets/imgs/logo/LogoReal.svg.png',
      ]
    },
    {
      title1: 'Barcelone',
      title2: 'Liverpool',
      stadium: 'wembley stadium',
      date : '26/juin/2019',
      ticket: '2500 FCFA',
      images: [
        'assets/imgs/logo/logoBarca.png',
        'assets/imgs/logo/Li.png',
      ]
    },
  ]
}
