export class Content {
    private readonly content: string;

    get Value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean {
        return content.length > 5 && content.length < 240 ? true: false;
    }

    constructor (content: string) {
        const contentValidatorLength = this.validateContentLength(content);

        if(!contentValidatorLength) {
            throw new Error ("Content length Error02");
        }

        this.content = content;
    }
}

