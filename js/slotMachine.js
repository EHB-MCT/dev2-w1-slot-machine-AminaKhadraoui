export const slotMachine = {
	calculateStatus: function () {
		// TODO: check for three similar symbols and update 'win'-boolean
	},
	getRandomSymbol: function () {
		// TODO: return a single random symbol
        const randomIndex = Math.floor(Math.random() * this.symbols.length);
        return this.symbols[randomIndex];

	},
	reset: function () {
		// TODO: Empty out the slots and reset 'win'-boolean
	},
	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],
	slotsAmount: 3,
	spin: function () {
		// TODO: generate three random symbols, and add them to the slots of the slotMachine

		for (let i = 0; i < this.slotsAmount; i++) {
			console.log("spin");
			const symbol = this.getRandomSymbol();
            console.log(symbol);
            this.slots.push(symbol);
		}
	},
	win: true,
};
