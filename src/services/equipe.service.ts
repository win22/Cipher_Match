import {Injectable} from "@angular/core";
import {Equipe} from "../models/equipe";

@Injectable()
export class EquipeService {

  constructor(){}

  ListEquipe: Equipe [] = [
    {
      title: 'Liverpool',
      desciption : 'Liverpool joue sa première finale de Coupe d\'Angleterre en 1914, la dernière jouée à Crystal Palace et la première vue par le monarque, George V, celle-ci est perdue 0-1 contre Burnley8. Cependant, le club est aussi impliqué dans un scandale dans le football britannique en 1915, l\'un des plus anciens scandales dans le football qui voit quatre joueurs de Liverpool bannis jusqu\'en 1919.',
      competition: 'Premiere Ligue',
      entreneur: 'Jürgen Klopp',
      nombreJour: '12',
      images: [
        'assets/imgs/logo/Li.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'FC Barçelone',
      desciption : 'L\'histoire du FC Barcelone, communément appelé le Barça, débute à la fin du XIX e siècle, lorsqu\'un groupe d\'étrangers établis à Barcelone, mené par le Suisse Hans Gamper, ancien joueur du FC Bâle, et composé en majorité d\'Anglais, de Suisses et d\'Allemands, cherche à s\'inscrire dans les clubs sportifs de la ville pour .',
      competition: 'La Ligua',
      entreneur: 'Ernesto Valverde',
      nombreJour: '19',
      images: [
        'assets/imgs/logo/logoBarca.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Paris Saint Germain',
      desciption : 'L\'histoire de Paris remonte autour de l\'an 259 avant J-C, lorsque la petite tribu des Parisii fonda la ville sur la rive droite de la Seine. Ce premier peuple de pêcheurs tomba entre les mains des Romains qui fondèrent la ville de Lutèce en l\'an 52 avant J-C. La ville ne prendra le nom de Paris qu\'au IVème siècle.',
      competition: 'Premiere Ligue',
      entreneur: 'Thomas Tuchel',
      nombreJour: '21',
      images: [
        'assets/imgs/logo/paris.svg.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Chealse',
      desciption : 'Cet article présente l\'histoire du club de football de Chelsea. ... Le premier succès majeur de Chelsea est sa qualification en finale de la FA Cup en 1915 (battu par Sheffield United). Le club a également atteint les demi-finales de cette compétition en 1911, 1920, 1932, 1950 et 1952.',
      competition: 'Premiere Ligue',
      entreneur: 'Frank Lampard',
      nombreJour: '18',
      images: [
        'assets/imgs/logo/LogoChealse.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Arsenal',
      desciption : 'Arsenal est fondé sous le nom Dial Square en 1886 par un groupe d\'ouvriers employés à l\'atelier de Dial Square, au Royal Arsenal, une usine d\'armement située à Woolwich, au sud-est de Londres1. L\'équipe est emmenée par l\'Écossais David Danskin, qui a acheté le premier ballon, et comprend le gardien de but Fred Bearsley, venu de Nottingham Forest, et plus tard rejoint par son coéquipier Morris Bates. C\'est de leur ancien club qu\'ils obtiendront un jeu de maillots rouges, transmettant ainsi les couleurs que le club d\'Arsenal a conservées jusqu\'à ce jour.',
      competition: 'Premiere Ligue',
      entreneur: 'Unai Emery',
      nombreJour: '12',
      images: [
        'assets/imgs/logo/Arsenal_FC.svg',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Réal-Madrid',
      desciption : 'Le Real Madrid Club de Fútbol, plus connu sous le nom de Real Madrid (souvent réduit à Real ou, en Espagne, El Madrid) est un club professionnel espagnol de football, basé à Madrid. Vainqueur de très nombreux titres nationaux et internationaux, il a reçu de la Fédération internationale de football association (FIFA) le titre honorifique de plus grand club du xxe siècle.',
      competition: 'Premiere Ligue',
      entreneur: 'Thomas Tuchel',
      nombreJour: '21',
      images: [
        'assets/imgs/logo/LogoReal.svg.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Manchester-united',
      desciption : 'Cet article présente l\'histoire du club de football de Chelsea. ... Le premier succès majeur de Chelsea est sa qualification en finale de la FA Cup en 1915 (battu par Sheffield United). Le club a également atteint les demi-finales de cette compétition en 1911, 1920, 1932, 1950 et 1952.',
      competition: 'Zinédine Zidane',
      entreneur: 'Ole Gunnar Solskjær',
      nombreJour: '18',
      images: [
        'assets/imgs/logo/LogoManchester.png',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    },
    {
      title: 'Marseille',
      desciption : 'L\'histoire de Marseille retrace les 2 600 ans de la cité depuis sa fondation. Bien que son site soit occupé dès les temps préhistoriques comme en témoigne la grotte Cosquer, c\'est en 600 av. J.-C. qu\'est fondée la ville par des colons grecs venus de Phocée.',
      competition: 'Premiere Ligue',
      entreneur: 'André Villas-Boas',
      nombreJour: '12',
      images: [
        'assets/imgs/logo/marseille.svg',
        'assets/imgs/equipe/s.jpg',
        'assets/imgs/joueurs/sd.jpg',
        'assets/imgs/equipe/liverpool.jpg',
        'assets/imgs/logo/LogoLigue.svg.png',
      ]
    }

  ]
}
