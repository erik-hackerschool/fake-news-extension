namespace news_extension {
    const realNews: string[] = [
        "Der Klimawandel lässt Gletscher schmelzen",
        "Bienen bestäuben 80% unserer Nutzpflanzen",
        "Plastik braucht 450 Jahre zum Verrotten",
        "Händewaschen schützt vor Krankheiten",
        "Rauchen verursacht Lungenkrebs",
        "Smartphones enthalten seltene Erden",
        "Mit 18 Jahren darf man in Deutschland wählen"
    ];
    const fakeNews: string[] = [
        "Baerbok als UN-Chefin eiskalt abgelehnt",
        "Solarstrom ist Schuld am Blackout",
        "Frau muss 170.000€ Strafe für Merz-Kritik zahlen",
        "3000 AfD-Stimmzettel in der Elbe gefunden",
        "Ukraine inszeniert Kriegsszenen für CNN",
        "Greta Thunberg hält Anti-Israel-Schild",
        "Hamburg-Klimademo: Foto zeigt nur 100 Leute"
    ];
    let remainingRealNews = realNews.slice();
    let remainingFakeNews = fakeNews.slice();
    export function get_news(): string | undefined {
        const isReal = Math.random() < 0.5;
        const news = takeRandom(isReal ? remainingRealNews : remainingFakeNews);
        return news;
    }
    export function is_real(news: string): boolean {
        return fakeNews.indexOf(news) === -1;
    }
    function takeRandom<T>(arr: T[]): T | undefined {
        if (arr.length === 0) return undefined;
        const index = Math.floor(Math.random() * arr.length);
        const element = arr[index];
        arr.splice(index, 1);
        return element;
    }
}