CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `symptome` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `tisane` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATE,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

CREATE TABLE `plante` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `properties` TEXT,
    `description` TEXT NOT NULL,
    `image_url` VARCHAR(50),
    `price` DECIMAL(5, 2) DEFAULT 6.90,
    `quantity` INTEGER DEFAULT 100
);

CREATE TABLE `propertiesPlante` (
    `plante_id` INT NOT NULL,
    `property_id` INT NOT NULL,
    FOREIGN KEY (`plante_id`) REFERENCES `plante` (`id`),
    FOREIGN KEY (`property_id`) REFERENCES `symptome` (`id`),
    PRIMARY KEY (`plante_id`, `property_id`)
);

CREATE TABLE `tisane_plante` (
    `tisane_id` INT NOT NULL,
    `plante_id` INT NOT NULL,
    FOREIGN KEY (`tisane_id`) REFERENCES `tisane` (`id`),
    FOREIGN KEY (`plante_id`) REFERENCES `plante` (`id`),
    PRIMARY KEY (`tisane_id`, `plante_id`)
);

CREATE TABLE `favorites` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `tisane_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    FOREIGN KEY (`tisane_id`) REFERENCES `tisane` (`id`)
);

-- Insérer des données dans la table `plante`

INSERT INTO
    `plante` (
        `name`,
        `properties`,
        `image_url`,
        `description`,
        `price`,
        `quantity`
    )
VALUES (
        'Moringa',
        'Riche en vitamines, réduit la pression artérielle',
        'moringa.jpg',
        'Le Moringa est une plante aux multiples bienfaits, souvent appelée "arbre de vie". Riche en vitamines A, C, E et en minéraux essentiels comme le calcium et le potassium, le Moringa est réputé pour réduire la pression artérielle, soutenir le système immunitaire et améliorer l\'énergie générale.',
        6.90,
        100
    ),
    (
        'Artémisia',
        'Antipaludique, stimule le système immunitaire',
        'artemisia.jpg',
        'L\'Artémisia est largement reconnu pour ses propriétés antipaludiques naturelles. En plus de lutter contre le paludisme, cette plante stimule le système immunitaire et peut être utilisée pour traiter diverses infections grâce à ses composés actifs puissants.',
        6.90,
        100
    ),
    (
        'Laurier',
        'Antibactérien, améliore la digestion',
        'laurier.jpg',
        'Le Laurier est une plante aromatique dont les feuilles sont utilisées depuis l\'Antiquité pour leurs vertus médicinales. Elles possèdent des propriétés antibactériennes et aident à améliorer la digestion en stimulant les sécrétions gastriques.',
        6.90,
        100
    ),
    (
        'Pain de singe',
        'Antioxydant, riche en vitamine C',
        'pain_de_singe.jpg',
        'Le Pain de singe, ou fruit du baobab, est extrêmement riche en vitamine C et en antioxydants. Ce superaliment aide à combattre les radicaux libres, renforce le système immunitaire, et améliore l\'énergie globale tout en favorisant la santé digestive.',
        6.90,
        100
    ),
    (
        'Khamaré (Vétiver)',
        'Antiseptique, aide à la digestion',
        'khamare.jpg',
        'Le Khamaré, également connu sous le nom de Vétiver, est une plante aux propriétés antiseptiques puissantes. Elle est couramment utilisée pour améliorer la digestion et purifier le corps, grâce à ses capacités à stimuler le système digestif et à apaiser les maux d\'estomac.',
        6.90,
        100
    ),
    (
        'Camomille',
        'Apaisante, aide à la digestion',
        'camomille.jpg',
        'La Camomille est célèbre pour ses propriétés apaisantes et relaxantes. Elle est souvent consommée sous forme d\'infusion pour calmer les nerfs, faciliter la digestion, et aider à soulager les insomnies légères. C\'est un remède naturel pour les troubles digestifs et l\'anxiété.',
        6.90,
        100
    ),
    (
        'Menthe Poivrée',
        'Anti-inflammatoire, aide à la digestion',
        'menthe_poivree.jpg',
        'La Menthe Poivrée est largement utilisée pour ses effets bénéfiques sur le système digestif. Elle aide à soulager les ballonnements, les gaz, et les maux d\'estomac grâce à ses propriétés anti-inflammatoires et antispasmodiques. Elle rafraîchit également l\'haleine.',
        6.90,
        100
    ),
    (
        'Thym',
        'Antiseptique, aide à la respiration',
        'thym.jpg',
        'Le Thym est une plante aromatique connue pour ses propriétés antiseptiques puissantes. Utilisé en infusion, il aide à soulager les infections respiratoires comme la toux et le rhume, tout en stimulant le système immunitaire. C\'est aussi un excellent détoxifiant naturel.',
        6.90,
        100
    ),
    (
        'Gingembre',
        'Antioxydant, anti-nauséeux',
        'gingembre.jpg',
        'Le Gingembre est un puissant antioxydant et anti-inflammatoire naturel. Il est surtout connu pour son efficacité à soulager les nausées, qu\'elles soient liées au mal des transports, à la grossesse ou à des troubles digestifs. Il stimule également la circulation sanguine.',
        6.90,
        100
    ),
    (
        'Lavande',
        'Calmante, anti-stress',
        'lavande.jpg',
        'La Lavande est réputée pour ses effets relaxants et anti-stress. Elle est souvent utilisée en aromathérapie pour apaiser l\'esprit, réduire l\'anxiété et favoriser un sommeil réparateur. En infusion, elle aide également à calmer les maux de tête et les troubles digestifs légers.',
        6.90,
        100
    ),
    (
        'Rooibos',
        'Antioxydant, bon pour la peau',
        'rooibos.jpg',
        'Le Rooibos, aussi appelé thé rouge, est riche en antioxydants, notamment en aspalathine. Il aide à protéger la peau des dommages causés par les radicaux libres, tout en apaisant les inflammations et en favorisant la santé générale de la peau. C\'est une boisson sans caféine idéale pour toute la famille.',
        6.90,
        100
    ),
    (
        'Ortie',
        'Riche en fer, combat l\'anémie',
        'ortie.jpg',
        'L\'Ortie est une plante très nutritive, particulièrement riche en fer, en vitamines A et C. Elle est utilisée pour lutter contre l\'anémie, renforcer les cheveux et les ongles, et purifier le sang. Elle a également des propriétés diurétiques et anti-inflammatoires.',
        6.90,
        100
    ),
    (
        'Sauge',
        'Régule les hormones, améliore la mémoire',
        'sauge.jpg',
        'La Sauge est une plante aux nombreuses vertus, notamment pour la régulation hormonale chez les femmes. Elle est également reconnue pour améliorer la mémoire et aider à la concentration. En infusion, elle est souvent utilisée pour apaiser les maux de gorge.',
        6.90,
        100
    ),
    (
        'Romarin',
        'Améliore la circulation, anti-inflammatoire',
        'romarin.jpg',
        'Le Romarin est une plante aux propriétés stimulantes et tonifiantes. Elle améliore la circulation sanguine, soulage les douleurs musculaires et articulaires grâce à ses vertus anti-inflammatoires. En cuisine, elle est aussi très appréciée pour aromatiser les plats.',
        6.90,
        100
    ),
    (
        'Verveine',
        'Apaisante, aide à la digestion',
        'verveine.jpg',
        'La Verveine est connue pour ses effets apaisants et relaxants. Elle est souvent utilisée en infusion pour calmer les tensions nerveuses, faciliter la digestion et favoriser un sommeil réparateur. C\'est une plante idéale pour se détendre après une longue journée.',
        6.90,
        100
    ),
    (
        'Mélisse',
        'Calmante, anti-stress',
        'melisse.jpg',
        'La Mélisse est une plante aux propriétés calmantes et anti-stress. Elle est couramment utilisée pour apaiser l\'anxiété, les troubles digestifs nerveux et les troubles du sommeil. Son goût citronné en fait une infusion agréable et relaxante.',
        6.90,
        100
    ),
    (
        'Eucalyptus',
        'Antiseptique, aide à la respiration',
        'eucalyptus.jpg',
        'L\'Eucalyptus est reconnu pour ses propriétés antiseptiques et expectorantes. Il est couramment utilisé en infusion ou en inhalation pour dégager les voies respiratoires, soulager la toux et les maux de gorge. C\'est une plante idéale pour combattre les affections respiratoires.',
        6.90,
        100
    ),
    (
        'Basilic',
        'Aide à la digestion, antispasmodique',
        'basilic.jpg',
        'Le Basilic est une plante aromatique aux vertus digestives et antispasmodiques. Il est utilisé pour apaiser les maux d\'estomac, réduire les ballonnements et stimuler l\'appétit. En cuisine, il est très apprécié pour ses arômes frais et agréables.',
        6.90,
        100
    ),
    (
        'Fenouil',
        'Aide à la digestion, réduit les coliques',
        'fenouil.jpg',
        'Le Fenouil est une plante reconnue pour ses bienfaits sur le système digestif. Il aide à soulager les ballonnements, les coliques et les troubles digestifs. En infusion, il est souvent recommandé pour les bébés souffrant de coliques ou pour les personnes ayant des troubles digestifs.',
        6.90,
        100
    ),
    (
        'Citronnelle',
        'Anti-moustique, aide à la digestion',
        'citronnelle.jpg',
        'La Citronnelle est connue pour son arôme citronné et ses propriétés répulsives contre les moustiques. En infusion, elle est également bénéfique pour la digestion et aide à réduire les spasmes digestifs. C\'est une plante rafraîchissante, souvent utilisée en tisane ou en cuisine.',
        6.90,
        100
    ),
    (
        'Cannelle',
        'Régule le sucre dans le sang, anti-inflammatoire',
        'cannelle.jpg',
        'La Cannelle est une épice aux propriétés médicinales puissantes. Elle aide à réguler le sucre dans le sang, ce qui en fait un allié pour les personnes atteintes de diabète de type 2. Elle possède également des propriétés anti-inflammatoires et antioxydantes, bénéfiques pour la santé globale.',
        6.90,
        100
    ),
    (
        'Clou de Girofle',
        'Antiseptique, anti-douleur',
        'clou_de_girofle.jpg',
        'Le Clou de Girofle est un puissant antiseptique et analgésique naturel. Il est souvent utilisé pour soulager les maux de dents, les infections buccales, et pour son effet anesthésiant local. En infusion, il aide à combattre les infections et à renforcer l\'immunité.',
        6.90,
        100
    ),
    (
        'Curcuma',
        'Anti-inflammatoire, antioxydant',
        'curcuma.jpg',
        'Le Curcuma est une épice aux propriétés anti-inflammatoires et antioxydantes puissantes. Il est utilisé pour réduire l\'inflammation, notamment dans les articulations, et pour lutter contre le stress oxydatif. Son principal composé actif, la curcumine, est largement étudié pour ses bienfaits pour la santé.',
        6.90,
        100
    ),
    (
        'Ginseng',
        'Stimule l\'énergie, réduit le stress',
        'ginseng.jpg',
        'Le Ginseng est une plante adaptogène, ce qui signifie qu\'elle aide le corps à s\'adapter au stress. Elle est utilisée pour stimuler l\'énergie, renforcer le système immunitaire et améliorer la concentration. Le Ginseng est également connu pour ses effets bénéfiques sur la vitalité sexuelle.',
        6.90,
        100
    ),
    (
        'Aloe Vera',
        'Hydratant, bon pour la peau',
        'aloe_vera.jpg',
        'L\'Aloe Vera est une plante succulente reconnue pour ses propriétés hydratantes et apaisantes. Elle est largement utilisée en cosmétique pour nourrir la peau, traiter les brûlures et les irritations. En interne, elle aide à apaiser les troubles digestifs et à renforcer l\'immunité.',
        6.90,
        100
    ),
    (
        'Échinacée',
        'Renforce le système immunitaire, anti-inflammatoire',
        'echinacee.jpg',
        'L\'Échinacée est une plante bien connue pour renforcer le système immunitaire. Elle est souvent utilisée en prévention ou en traitement des rhumes et des grippes. Ses propriétés anti-inflammatoires aident également à soulager les douleurs et les infections.',
        6.90,
        100
    ),
    (
        'Reine des Prés',
        'Antirhumatismale, diurétique',
        'reine_des_pres.jpg',
        'La Reine des Prés est une plante aux propriétés antirhumatismales et diurétiques. Elle est utilisée pour soulager les douleurs articulaires et musculaires, ainsi que pour éliminer l\'excès d\'eau dans le corps. En infusion, elle est idéale pour les personnes souffrant d\'arthrite ou de rétention d\'eau.',
        6.90,
        100
    ),
    (
        'Valériane',
        'Calmante, aide à l\'endormissement',
        'valeriane.jpg',
        'La Valériane est une plante médicinale reconnue pour ses effets calmants et sédatifs. Elle est souvent utilisée pour traiter l\'insomnie, l\'anxiété et les troubles nerveux. En infusion, elle aide à induire un sommeil réparateur et à calmer les tensions nerveuses.',
        6.90,
        100
    ),
    (
        'Passiflore',
        'Calmante, anti-stress',
        'passiflore.jpg',
        'La Passiflore est une plante aux propriétés calmantes et anti-stress. Elle est souvent utilisée pour traiter les troubles anxieux et pour favoriser le sommeil. Son effet relaxant en fait un remède naturel contre l\'insomnie et les états de tension nerveuse.',
        6.90,
        100
    ),
    (
        'Souci',
        'Antiseptique, bon pour la peau',
        'souci.jpg',
        'Le Souci, ou Calendula, est une plante aux propriétés antiseptiques et cicatrisantes. Elle est utilisée pour traiter les affections cutanées telles que les plaies, les brûlures et les irritations. En infusion, elle aide également à apaiser les inflammations internes.',
        6.90,
        100
    );

-- Insérer des données dans la table `symptome`
INSERT INTO
    `symptome` (`name`)
VALUES ('Stress'),
    ('Problèmes digestifs'),
    ('Inflammation'),
    ('Nausées'),
    ('Infections respiratoires'),
    ('Hypertension'),
    ('Cholestérol'),
    ('Diabète'),
    ('Anémie'),
    ('Douleurs articulaires'),
    ('Problèmes de sommeil'),
    ('Fatigue');

-- Insérer des données dans la table de jointure `propertiesPlante`
INSERT INTO
    `propertiesPlante` (`plante_id`, `property_id`)
VALUES
    -- Moringa
    (1, 6), -- Hypertension
    (1, 7), -- Cholestérol
    -- Artémisia
    (2, 5), -- Infections respiratoires
    -- Laurier
    (3, 2), -- Problèmes digestifs
    (3, 3), -- Inflammation
    -- Pain de singe
    (4, 4), -- Nausées
    (4, 9), -- Anémie
    -- Khamaré (Vétiver)
    (5, 2), -- Problèmes digestifs
    (5, 3), -- Inflammation
    -- Camomille
    (6, 1), -- Stress
    (6, 2), -- Problèmes digestifs
    -- Menthe Poivrée
    (7, 2), -- Problèmes digestifs
    (7, 3), -- Inflammation
    -- Thym
    (8, 5), -- Infections respiratoires
    -- Gingembre
    (9, 4), -- Nausées
    (9, 3), -- Inflammation
    -- Lavande
    (10, 1), -- Stress
    (10, 11), -- Problèmes de sommeil
    -- Rooibos
    (11, 9), -- Anémie
    (11, 12), -- Fatigue
    -- Ortie
    (12, 9), -- Anémie
    (12, 10), -- Douleurs articulaires
    -- Sauge
    (13, 11), -- Problèmes de sommeil
    -- Romarin
    (14, 3), -- Inflammation
    (14, 12), -- Fatigue
    -- Verveine
    (15, 1), -- Stress
    (15, 2), -- Problèmes digestifs
    -- Mélisse
    (16, 1), -- Stress
    (16, 11), -- Problèmes de sommeil
    -- Eucalyptus
    (17, 5), -- Infections respiratoires
    -- Basilic
    (18, 2), -- Problèmes digestifs
    -- Fenouil
    (19, 2), -- Problèmes digestifs
    -- Citronnelle
    (20, 2), -- Problèmes digestifs
    (20, 4), -- Nausées
    -- Cannelle
    (21, 8), -- Diabète
    (21, 7), -- Cholestérol
    -- Clou de Girofle
    (22, 10), -- Douleurs articulaires
    -- Curcuma
    (23, 3), -- Inflammation
    (23, 7), -- Cholestérol
    -- Ginseng
    (24, 12), -- Fatigue
    -- Aloe Vera
    (25, 9), -- Anémie
    (25, 4), -- Nausées
    -- Échinacée
    (26, 3), -- Inflammation
    (26, 5), -- Infections respiratoires
    -- Reine des Prés
    (27, 10), -- Douleurs articulaires
    -- Valériane
    (28, 11), -- Problèmes de sommeil
    -- Passiflore
    (29, 1), -- Stress
    -- Souci
    (30, 3);
-- Inflammation