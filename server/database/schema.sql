CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `symptomes` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `Tisanes` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `name` VARCHAR(255),
    `created_at` DATE,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `plants` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `properties` TEXT,
    `dosage` INT,
    `status` VARCHAR(255),
    `image_url` VARCHAR(50)
);

CREATE TABLE `Properties_plants` (
    `plante_id` INT NOT NULL,
    `property_id` INT NOT NULL,
    FOREIGN KEY (`plante_id`) REFERENCES `plants` (`id`),
    FOREIGN KEY (`property_id`) REFERENCES `symptomes` (`id`),
    PRIMARY KEY (`plante_id`, `property_id`)
);

CREATE TABLE `Compo_tisane` (
    `tisane_id` INT NOT NULL,
    `plante_id` INT NOT NULL,
    `quantite` decimal(5, 2),
    FOREIGN KEY (`tisane_id`) REFERENCES `Tisanes` (`id`),
    FOREIGN KEY (`plante_id`) REFERENCES `plants` (`id`)
);
-- Insérer des données dans la table `plants`
INSERT INTO
    `plants` (
        `name`,
        `properties`,
        `dosage`,
        `status`,
        `image_url`
    )
VALUES (
        'Moringa',
        'Riche en vitamines, réduit la pression artérielle',
        2,
        'active',
        'moringa.jpg'
    ),
    (
        'Artémisia',
        'Antipaludique, stimule le système immunitaire',
        1,
        'active',
        'artemisia.jpg'
    ),
    (
        'Laurier',
        'Antibactérien, améliore la digestion',
        1,
        'active',
        'laurier.jpg'
    ),
    (
        'Pain de singe',
        'Antioxydant, riche en vitamine C',
        2,
        'active',
        'pain_de_singe.jpg'
    ),
    (
        'Khamaré (Vétiver)',
        'Antiseptique, aide à la digestion',
        1,
        'active',
        'khamare.jpg'
    ),
    (
        'Camomille',
        'Apaisante, aide à la digestion',
        2,
        'active',
        'camomille.jpg'
    ),
    (
        'Menthe Poivrée',
        'Anti-inflammatoire, aide à la digestion',
        1,
        'active',
        'menthe_poivree.jpg'
    ),
    (
        'Thym',
        'Antiseptique, aide à la respiration',
        1,
        'active',
        'thym.jpg'
    ),
    (
        'Gingembre',
        'Antioxydant, anti-nauséeux',
        2,
        'active',
        'gingembre.jpg'
    ),
    (
        'Lavande',
        'Calmante, anti-stress',
        1,
        'active',
        'lavande.jpg'
    ),
    (
        'Rooibos',
        'Antioxydant, bon pour la peau',
        2,
        'active',
        'rooibos.jpg'
    ),
    (
        'Ortie',
        'Riche en fer, combat l\'anémie',
        2,
        'active',
        'ortie.jpg'
    ),
    (
        'Sauge',
        'Régule les hormones, améliore la mémoire',
        1,
        'active',
        'sauge.jpg'
    ),
    (
        'Romarin',
        'Améliore la circulation, anti-inflammatoire',
        1,
        'active',
        'romarin.jpg'
    ),
    (
        'Verveine',
        'Apaisante, aide à la digestion',
        2,
        'active',
        'verveine.jpg'
    ),
    (
        'Mélisse',
        'Calmante, anti-stress',
        1,
        'active',
        'melisse.jpg'
    ),
    (
        'Eucalyptus',
        'Antiseptique, aide à la respiration',
        2,
        'active',
        'eucalyptus.jpg'
    ),
    (
        'Basilic',
        'Aide à la digestion, antispasmodique',
        1,
        'active',
        'basilic.jpg'
    ),
    (
        'Fenouil',
        'Aide à la digestion, réduit les coliques',
        2,
        'active',
        'fenouil.jpg'
    ),
    (
        'Citronnelle',
        'Anti-moustique, aide à la digestion',
        1,
        'active',
        'citronnelle.jpg'
    ),
    (
        'Cannelle',
        'Régule le sucre dans le sang, anti-inflammatoire',
        1,
        'active',
        'cannelle.jpg'
    ),
    (
        'Clou de Girofle',
        'Antiseptique, anti-douleur',
        1,
        'active',
        'clou_de_girofle.jpg'
    ),
    (
        'Curcuma',
        'Anti-inflammatoire, antioxydant',
        2,
        'active',
        'curcuma.jpg'
    ),
    (
        'Ginseng',
        'Stimule l\'énergie, réduit le stress',
        1,
        'active',
        'ginseng.jpg'
    ),
    (
        'Aloe Vera',
        'Hydratant, bon pour la peau',
        2,
        'active',
        'aloe_vera.jpg'
    ),
    (
        'Échinacée',
        'Renforce le système immunitaire, anti-inflammatoire',
        1,
        'active',
        'echinacee.jpg'
    ),
    (
        'Reine des Prés',
        'Antirhumatismale, diurétique',
        2,
        'active',
        'reine_des_pres.jpg'
    ),
    (
        'Valériane',
        'Calmante, aide à l\'endormissement',
        1,
        'active',
        'valeriane.jpg'
    ),
    (
        'Passiflore',
        'Calmante, anti-stress',
        1,
        'active',
        'passiflore.jpg'
    ),
    (
        'Souci',
        'Antiseptique, bon pour la peau',
        2,
        'active',
        'souci.jpg'
    );

-- Insérer des données dans la table `symptomes`
INSERT INTO
    `symptomes` (`name`)
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

-- Insérer des données dans la table de jointure `Properties_plants`
INSERT INTO
    `Properties_plants` (`plante_id`, `property_id`)
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