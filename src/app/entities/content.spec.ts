import { Content } from "./content";

describe("Content", () => {
    it('be should to be create a new notification', () => {
        const content = new Content("Você recebeu uma nova solicitação de amizade");
        expect(content).toBeTruthy();
    });
    
    it("should not be able to create a notification content with less than 5 characters", () => {
        expect(() => new Content("aaa")).toThrow();
    })
    
    it("should not be able to create a notification content with more than 240 characters", () => {
        expect(() => new Content("a".repeat(241))).toThrow();
    })
})





