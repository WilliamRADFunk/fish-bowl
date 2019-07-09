import * as Spriteling from 'spriteling';

let index: number = 0;

export class Fish {
    /**
     * Controls size and shape of the fish
     */
    private spriteEl: HTMLElement;
    /**
     * Controls the color of the fish material
     */
	private animations: any[] = [

    ];
    private isAlive: boolean = true;

    constructor() {
        index++;
        console.log('Here');
        this.spriteEl = document.createElement('div');
        document.getElementById('mainview').appendChild(this.spriteEl);
        const sprite = new Spriteling({
            url: '../../assets/spritesheets/coi-19.png',
            top: 300,
            left: 500,
            cols: 8,
            rows: 8
        }, this.spriteEl);

        const script = sprite.addScript('swim', [
            {sprite: 1, delay: 100},
            {sprite: 2, delay: 100},
            {sprite: 3, delay: 100},
            {sprite: 4, delay: 100},
            {sprite: 5, delay: 100},
            {sprite: 6, delay: 100},
            {sprite: 7, delay: 100},
            {sprite: 8, delay: 100}
          ])
        
        sprite.play('swim');
    }
    /**
     * Adds fish object to the three.js scene.
     */
    addToScene(): void {
        
    }

    /**
     * At the end of each loop iteration, move the fish a little.
     * @returns whether or not the fish is done, and its points calculated.
     */
    endCycle(): boolean {
        return false;
    }

    getActive(): boolean {
        return this.isAlive;
    }
    
}