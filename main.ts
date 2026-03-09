namespace accessor {
    export class Accessor {
        _spr: Sprite;
        _firValue: any;
        _secValue: any;
        _thiValue: any;
        _fouValue: any;
        _fifValue: any;

        constructor(player: Sprite, firstValue?: any, secondValue?: any, thirdValue?: any, fourthValue?: any, fifthValue?: any) {
            this._spr = player;

            this._firValue = firstValue;
            this._secValue = secondValue;
            this._thiValue = thirdValue;
            this._fouValue = fourthValue;
            this._fifValue = fifthValue;
        }

        get player(): Sprite {
            return this._spr;
        }

        get firstValue(): any {
            return this._firValue;
        }

        get secondValue(): any {
            return this._secValue;
        }

        get thirdValue(): any {
            return this._thiValue;
        }

        get fourthValue(): any {
            return this._fouValue;
        }

        get fifthValue(): any {
            return this._fifValue;
        }

        set player(input: Sprite) {
            this.player = input;
        }

        set firstValue(input: any) {
            this.firstValue = input;
        }

        set secondValue(input: any) {
            this.secondValue = input;
        }

        set thirdValue(input: any) {
            this.thirdValue = input;
        }

        set fourthValue(input: any) {
            this.fourthValue = input;
        }

        set fifthValue(input: any) {
            this.fifthValue = input;
        }
    }
}