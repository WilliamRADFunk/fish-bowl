import { Fish } from './critters/fish';

let fish: Fish;
/**
 * All things game related. Only starts when all assets are finished loading.
 * @param difficulty player's choice in difficulty level.
 */
const loadGame = () => {
    fish = new Fish();
    // requestAnimationFrame( render );
};
/**
 * Called by DOM when page is finished loading. Now load assets, then the game.
 */
export default () => {
    loadGame();
}