/**
 * Curadoria complementar de exemplos para o backlog de Strasbourg.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Strasbourg e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const STRASBOURG_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  verrière: [
    { level: 'A1', fr: 'La verrière est grande.', pt: 'A claraboia é grande.' },
    { level: 'A2-B1', fr: 'Le train part sous la grande verrière de la gare.', pt: 'O trem parte sob a grande claraboia da estação.' },
    { level: 'B2', fr: 'La verrière du hall, rénovée l’an dernier, inonde la salle de lumière naturelle.', pt: 'A claraboia do saguão, reformada no ano passado, inunda a sala de luz natural.' },
    { level: 'C1-C2', fr: 'C’est sous la verrière de la gare que les voyageurs se croisent, pressés et silencieux, avant de se quitter.', pt: 'É sob a claraboia da estação que os viajantes se cruzam, apressados e silenciosos, antes de se despedirem.' },
  ],
  accompagner: [
    { level: 'A1', fr: 'Je t’accompagne à la gare.', pt: 'Eu te acompanho até a estação.' },
    { level: 'A2-B1', fr: 'Elle accompagne sa mère au marché le samedi matin.', pt: 'Ela acompanha a mãe ao mercado no sábado de manhã.' },
    { level: 'B2', fr: 'Le vin blanc accompagne parfaitement la choucroute et la charcuterie.', pt: 'O vinho branco acompanha perfeitamente a chucrute e os embutidos.' },
    { level: 'C1-C2', fr: 'Ce sont les silences, plus que les paroles, qui accompagnent les longs voyages en train.', pt: 'São os silêncios, mais que as palavras, que acompanham as longas viagens de trem.' },
  ],
  maïs: [
    { level: 'A1', fr: 'Le maïs est jaune.', pt: 'O milho é amarelo.' },
    { level: 'A2-B1', fr: 'Les champs de maïs bordent la route entre Strasbourg et le sud.', pt: 'Os campos de milho margeiam a estrada entre Strasbourg e o sul.' },
    { level: 'B2', fr: 'Le maïs, cultivé en Alsace comme ailleurs, nourrit les hommes et les animaux.', pt: 'O milho, cultivado na Alsácia como em outros lugares, alimenta homens e animais.' },
    { level: 'C1-C2', fr: 'C’est derrière les champs de maïs que le train laissa la plaine d’Alsace pour entrer dans la lumière du Midi.', pt: 'É atrás dos campos de milho que o trem deixou a planície da Alsácia para entrar na luz do Sul.' },
  ],
  finesse: [
    { level: 'A1', fr: 'La finesse du tissu est remarquable.', pt: 'A finura do tecido é notável.' },
    { level: 'A2-B1', fr: 'J’admire la finesse de cette sculpture.', pt: 'Admiro a finura desta escultura.' },
    { level: 'B2', fr: 'La façade de la maison Kammerzell, ciselée avec une finesse rare, traverse les siècles sans vieillir.', pt: 'A fachada da casa Kammerzell, cinzelada com finura rara, atravessa os séculos sem envelhecer.' },
    { level: 'C1-C2', fr: 'La finesse d’un détail, imperceptible au premier regard, révèle souvent le génie d’un artisan.', pt: 'A finura de um detalhe, imperceptível ao primeiro olhar, revela muitas vezes o gênio de um artesão.' },
  ],
};
