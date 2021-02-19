import { Anwsers } from './data'

describe("Answer to the ultimate question of life, the universe, and everything", () => {
	it("should be 42", () => {
		const a = Anwsers.ultimate;
		expect(a).toBe(42);
	})
})