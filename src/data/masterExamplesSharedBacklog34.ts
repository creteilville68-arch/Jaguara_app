/**
 * Curadoria compartilhada 34 — raízes comuns (verbos flexionados e nomes)
 * que apareciam no texto mas estavam sem os 4 exemplos curados.
 *
 * Backlog achado pelo `bun run audit:clickable <cidade>`:
 *   - s'ouvre / l'ouvre  → ouvre
 *   - t'envoie           → envoie
 *   - s'assieds          → assieds
 *   - d'allure           → allure
 *   - d'appellation      → appellation
 *   - d'amiens           → amiens
 */
import type { MasterExample } from './masterExamplesDictionary';

export const SHARED_BACKLOG_EXAMPLES_34: Record<string, MasterExample[]> = {
  ouvre: [
    { level: 'A1', fr: 'Elle ouvre la porte de sa chambre.', pt: 'Ela abre a porta do quarto dela.' },
    { level: 'A2-B1', fr: 'Le magasin ouvre à neuf heures.', pt: 'A loja abre às nove horas.' },
    { level: 'B2', fr: 'Il ouvre son relevé pour vérifier le solde du compte.', pt: 'Ele abre o extrato para conferir o saldo.' },
    { level: 'C1-C2', fr: 'Ouvrir une porte, c’est toujours prendre le risque de voir ce qui se cache derrière.', pt: 'Abrir uma porta é sempre correr o risco de ver o que se esconde atrás dela.' },
  ],
  envoie: [
    { level: 'A1', fr: 'Je t’envoie un message ce soir.', pt: 'Eu te envio uma mensagem esta noite.' },
    { level: 'A2-B1', fr: 'Elle envoie son dossier avant la date limite.', pt: 'Ela envia o dossiê antes do prazo.' },
    { level: 'B2', fr: 'Le chef envoie son rapport au directeur chaque semaine.', pt: 'O chefe envia o relatório ao diretor toda semana.' },
    { level: 'C1-C2', fr: 'On n’envoie pas seulement des fichiers : on envoie un peu de soi dans chaque geste.', pt: 'Não se enviam apenas arquivos: envia-se um pouco de si em cada gesto.' },
  ],
  assieds: [
    { level: 'A1', fr: 'Tu t’assieds à côté de moi.', pt: 'Você se senta ao meu lado.' },
    { level: 'A2-B1', fr: 'Elle s’assied toujours près de la fenêtre.', pt: 'Ela se senta sempre perto da janela.' },
    { level: 'B2', fr: 'Il s’assied devant son ordinateur et travaille jusqu’au soir.', pt: 'Ele se senta diante do computador e trabalha até a noite.' },
    { level: 'C1-C2', fr: 'On s’assied pour mieux écouter : parfois, se taire est un acte de présence.', pt: 'Senta-se para ouvir melhor: às vezes, calar-se é um ato de presença.' },
  ],
  allure: [
    { level: 'A1', fr: 'Sa allure est rapide.', pt: 'O passo dele é rápido.' },
    { level: 'A2-B1', fr: 'Le chat marche d’une allure souple.', pt: 'O gato anda com um passo ágil.' },
    { level: 'B2', fr: 'Le quartier a pris une allure moderne.', pt: 'O bairro ganhou um aspecto moderno.' },
    { level: 'C1-C2', fr: 'Une allure paisible masque parfois une énergie rare.', pt: 'Um jeito tranquilo às vezes esconde uma energia rara.' },
  ],
  appellation: [
    { level: 'A1', fr: 'L’appellation du plat est écrite sur la carte.', pt: 'O nome do prato está escrito no cardápio.' },
    { level: 'A2-B1', fr: 'Cette appellation d’origine protège un vin.', pt: 'Essa denominação de origem protege um vinho.' },
    { level: 'B2', fr: 'L’appellation contrôlée garantit la qualité du fromage.', pt: 'A denominação controlada garante a qualidade do queijo.' },
    { level: 'C1-C2', fr: 'Derrière chaque appellation se cache un terroir, une histoire et un savoir-faire.', pt: 'Por trás de cada denominação esconde-se um terroir, uma história e um saber-fazer.' },
  ],
  amiens: [
    { level: 'A1', fr: 'Amiens est une ville du nord de la France.', pt: 'Amiens é uma cidade do norte da França.' },
    { level: 'A2-B1', fr: 'Le train arrive à Amiens en fin de matinée.', pt: 'O trem chega a Amiens no fim da manhã.' },
    { level: 'B2', fr: 'La cathédrale fait de la vieille ville d’Amiens un haut lieu d’histoire.', pt: 'A catedral faz do centro antigo de Amiens um lugar de grande história.' },
    { level: 'C1-C2', fr: 'Amiens incarne cette France où le patrimoine se vit au quotidien.', pt: 'Amiens encarna essa França em que o patrimônio se vive no dia a dia.' },
  ],
  anciennes: [
    { level: 'A1', fr: 'Ce sont de très anciennes maisons.', pt: 'São casas muito antigas.' },
    { level: 'A2-B1', fr: 'Le musée expose d’anciennes cartes de la région.', pt: 'O museu expõe mapas antigos da região.' },
    { level: 'B2', fr: 'D’anciennes traditions revivent pendant la fête du village.', pt: 'Antigas tradições revivem durante a festa da aldeia.' },
    { level: 'C1-C2', fr: 'Derrière ces anciennes façades se cachent des siècles de mémoire ouvrière.', pt: 'Atrás dessas fachadas antigas escondem-se séculos de memória operária.' },
  ],
  "d'anciennes": [
    { level: 'A1', fr: 'Ce sont d’anciennes maisons.', pt: 'São casas antigas.' },
    { level: 'A2-B1', fr: 'Le musée expose d’anciennes cartes de la région.', pt: 'O museu expõe mapas antigos da região.' },
    { level: 'B2', fr: 'D’anciennes traditions revivent pendant la fête du village.', pt: 'Antigas tradições revivem durante a festa da aldeia.' },
    { level: 'C1-C2', fr: 'Derrière ces anciennes façades se cachent des siècles de mémoire ouvrière.', pt: 'Atrás dessas fachadas antigas escondem-se séculos de memória operária.' },
  ],
};