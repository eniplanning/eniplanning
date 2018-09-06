--------------------------------------------------------
-- ENI PLANNING ----------------------------------------
--------------------------------------------------------

-- INSERTION DE l'UTILISATEUR ADMIN EN  BASE (login : administrateur@eniplanning.fr, password : P@$$w0rd)
INSERT INTO users (email, password, name, firstname, role_id)
VALUES ('administrateur@campus-eni.fr', '$2y$10$mMAHg8hgmiNhYmnTfXfhFupO/tN/yHZ6HJEozEh8yDNOMmleUW.0a', 'Super', 'Administrateur', 3); 

-- INSERTION PLANNING
INSERT INTO eniplanning.plannings (label, date_start_contract, date_end_contract, date_start_formation, date_end_formation,date_inscription, nb_weeks_formation, nb_weeks_enterprise, stagiaire_id, formation_id, user_id)
VALUES('planning 1 carine', CONVERT(datetime,'01-09-2018', 103),  CONVERT(datetime,'30-09-2019', 103), CONVERT(datetime,'01-10-2018', 103), CONVERT(datetime,'15-09-2019', 103), CONVERT(datetime,'18-06-2016', 103), 2, 2, 12, '17MSI-IN', 1);
INSERT INTO eniplanning.plannings (`label`, `date_start_contract`, `date_end_contract`, `date_start_formation`, `date_end_formation`, `date_inscription`, `nb_weeks_formation`, `nb_weeks_enterprise`, `limit_day_formation`, `num_version`, `status`, `is_archived`, `is_model`, `is_broken`, `planning_id`, `stagiaire_id`, `formation_id`, `user_id`)
VALUES ('test planning', '2018-06-01', '2019-06-01', '2018-06-01', '2019-06-01', '2018-07-26', 20, 5, NULL, NULL, 1, 0, 0, 0, NULL, 12, '17cdi', 1);
INSERT INTO eniplanning.plannings (`label`, `date_start_contract`, `date_end_contract`, `date_start_formation`, `date_end_formation`, `date_inscription`, `nb_weeks_formation`, `nb_weeks_enterprise`, `limit_day_formation`, `num_version`, `status`, `is_archived`, `is_model`, `is_broken`, `planning_id`, `stagiaire_id`, `formation_id`, `user_id`)
VALUES ('test2 planning', '2019-06-01', '2020-06-01', '2019-06-01', '2020-06-01', '2018-07-26', 20, 5, NULL, NULL, 1, 0, 0, 0, NULL, 12, '17cdi', 1);

INSERT INTO `plannings` (`id`, `label`, `date_start_contract`, `date_end_contract`, `date_start_formation`, `date_end_formation`, `date_inscription`, `nb_weeks_formation`, `nb_weeks_enterprise`, `limit_day_formation`, `num_version`, `status`, `is_archived`, `is_model`, `planning_id`, `stagiaire_id`, `formation_id`, `user_id`, `created_at`, `updated_at`)
VALUES (NULL, 'planning 1 carine', '2018-09-01', '2019-09-30', '2018-10-01', '2019-09-15', '2018-06-01', '2', '2', '120', '1', '1', '0', '0', NULL, '30', '17MSI-IN', '24', NULL, NULL);

--------------------------------------------------------
-- ENI ERP ---------------------------------------------
--------------------------------------------------------
select * from enierp.dbo.Formation where LibelleLong like '%Manager%';
select * from enierp.dbo.Stagiaire;
select * from eniplanning.users;
select * from enierp.dbo.Entreprise;

-- UDPATE STAGIAIRE
UPDATE enierp.dbo.Stagiaire SET DateNaissance=CONVERT(datetime, '27/04/1975', 103), Email='carine@gmail.com' WHERE CodeStagiaire=12;
-- DELETE STAGIAIRE
DELETE enierp.dbo.Stagiaire WHERE CodeStagiaire=20;


-- INSERT ENTREPRISE
INSERT INTO enierp.dbo.Entreprise (RaisonSociale,Adresse1,CodePostal,Ville,Telephone,SiteWeb, Email, CodeRegion, CodeTypeEntreprise, CodeSecteur)
VALUES ('LIBRE LOGIC','Allée Duquesne', '44000', 'NANTES', '02 02 02 02 02', 'www.libre-logic.com', 'contact@libre-logic.com', 'NT', 'ESN', 2);
INSERT INTO enierp.dbo.Entreprise (RaisonSociale,Adresse1,CodePostal,Ville,Telephone,SiteWeb, Email, CodeRegion, CodeTypeEntreprise, CodeSecteur)
VALUES ('SOCIETE GENERALE','Rond Point de la Beaujoire', '44300', 'NANTES', '02 02 02 02 02', 'www.societe-generale.com', 'contact@soge.com', 'NT', 'START', 2);
INSERT INTO enierp.dbo.Entreprise (RaisonSociale,Adresse1,CodePostal,Ville,Telephone,SiteWeb, Email, CodeRegion, CodeTypeEntreprise, CodeSecteur)
VALUES ('B TO BE CONNECT','27 rue de la Guillovrinière', '44130', 'LA CHEVROLIERE', '02 02 02 02 02', 'www.btobeconnet.com', 'contact@btbc.com', 'NT', 'START', 2);
INSERT INTO enierp.dbo.Entreprise (RaisonSociale,Adresse1,CodePostal,Ville,Telephone,SiteWeb, Email, CodeRegion, CodeTypeEntreprise, CodeSecteur)
VALUES ('LOUINEAU','Rue Jacquard', '85400', 'LUCON', '02 02 02 02 02', 'www.louineau.com', 'contact@louineau.com', 'NT', 'START', 2);


-- INSERTION STAGIAIRES
INSERT INTO enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, TelephoneFixe, TelephonePortable, Email, DateNaissance, CodeRegion, CodeNationalite, DateCreation) 
VALUES ('M.', 'BRIAND', 'Matthieu', 'Rue de la Mer', '85000', 'LA ROCHE SUR YON', '0251987410', '0658954102', 'mat@gmail.com', '1995-06-01', 'NT', 'FR', '2018-06-01');
INSERT INTO enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, TelephoneFixe, TelephonePortable, Email, DateNaissance, CodeRegion, CodeNationalite, DateCreation) 
VALUES ('M.', 'BELAUD', 'Valentin', 'Rue de la Vendée', '44230', 'ST SEBASTIEN SUR LOIRE', '0251967425', '0696025560', 'val@gmail.com', Convert(datetime,'27-04-1988',103), 'NT', 'FR', Convert(datetime,'01-06-2018', 103));
INSERT INTO enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, TelephoneFixe, TelephonePortable, Email, DateNaissance, CodeRegion, CodeNationalite, DateCreation) 
VALUES ('M.', 'FOUCHER', 'Baptiste', 'Route de la Beaujoire', '44300', 'NANTES', '0251410899', '0632154785', 'baptiste@gmail.com', Convert(datetime,'10-08-1992',103), 'NT', 'FR', Convert(datetime,'01-06-2018', 103));
INSERT INTO enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, TelephoneFixe, TelephonePortable, Email, DateNaissance, CodeRegion, CodeNationalite, DateCreation) 
VALUES ('Mme', 'GEINDREAU', 'Carine', 'Rue Renan', '44000', 'NANTES', '0251005588', '0696471085', 'carine@gmail.com', Convert(datetime,'27-04-1975',103), 'NT', 'FR', Convert(datetime,'01-06-2018', 103));
INSERT INTO enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, TelephoneFixe, TelephonePortable, Email, DateNaissance, CodeRegion, CodeNationalite, DateCreation) 
VALUES ('Mme', 'BLIN', 'Marina', 'Place Canclaux', '44000', 'NANTES', '0251648424', '0322159840', 'marina@gmail.com', Convert(datetime,'29-06-1996',103), 'NT', 'FR', Convert(datetime,'01-06-2018',103));


-- INSERT STAGIAIRE PAR ENTREPRISE
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (10,4, CONVERT(datetime, '01/06/2018', 103), 'CDD', CONVERT(datetime, '01/09/2018', 103),CONVERT(datetime, '31/10/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (11,3, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (12,2, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '15/08/2018', 103),CONVERT(datetime, '15/08/2020', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (13,1, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (14,1, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '11/11/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');