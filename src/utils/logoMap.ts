export const getLogoSrc = (identifier: string): string => {
    const logos: { [key: string]: string } = {
        'man_utd': 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
        'liverpool': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
        'arsenal': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
        'chelsea': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC_crest.svg.png',
        'real_madrid': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
        'barcelona': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        'bayern_munich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg/1200px-Logo_FC_Bayern_M%C3%BCnchen.svg.png',
        'dortmund': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
        'psg': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png',
        'marseille': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/1200px-Olympique_Marseille_logo.svg.png',
        'lakers': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
        'celtics': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png',
        'warriors': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
        'nets': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brooklyn_Nets_logo.svg/1200px-Brooklyn_Nets_logo.svg.png',
        'djokovic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Novak_Djokovic_2023_US_Open.jpg/800px-Novak_Djokovic_2023_US_Open.jpg', // Placeholder
        'nadal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rafael_Nadal_2023_US_Open.jpg/800px-Rafael_Nadal_2023_US_Open.jpg', // Placeholder
        'alcaraz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Carlos_Alcaraz_2023_US_Open.jpg/800px-Carlos_Alcaraz_2023_US_Open.jpg', // Placeholder
        'sinner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jannik_Sinner_2023_US_Open.jpg/800px-Jannik_Sinner_2023_US_Open.jpg', // Placeholder
        'fnatic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fnatic_Logo.svg/1200px-Fnatic_Logo.svg.png',
        'g2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/G2_Esports_logo.svg/1200px-G2_Esports_logo.svg.png',
        't1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/T1_2022_logo.svg/1200px-T1_2022_logo.svg.png',
        'gen_g': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Gen.G_Esports_logo.svg/1200px-Gen.G_Esports_logo.svg.png',
        // Add more logos as needed
    };
    return logos[identifier.toLowerCase()] || 'https://via.placeholder.com/50'; // Default placeholder
};