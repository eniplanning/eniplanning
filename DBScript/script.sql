--------------------------------------------------------
-- ENI PLANNING ----------------------------------------
--------------------------------------------------------
-- INSERTION DE l'UTILISATEUR ADMIN EN  BASE (login : administrateur@eniplanning.fr, password : P@$$w0rd)
INSERT INTO users (email, password, name, firstname, role_id)
VALUES ('administrateur@eniplanning.fr', '$2y$10$mMAHg8hgmiNhYmnTfXfhFupO/tN/yHZ6HJEozEh8yDNOMmleUW.0a', 'Compte', 'Administrateur', 3); 
-- INSERTION PLANNING
INSERT INTO `plannings` (`id`, `label`, `date_start_contract`, `date_end_contract`, `date_start_formation`, `date_end_formation`, `date_inscription`, `nb_weeks_formation`, `nb_weeks_enterprise`, `limit_day_formation`, `num_version`, `status`, `is_archived`, `is_model`, `planning_id`, `stagiaire_id`, `formation_id`, `user_id`, `created_at`, `updated_at`)
VALUES (NULL, 'planning 1 carine', '2018-09-01', '2019-09-30', '2018-10-01', '2019-09-15', '2018-06-01', '2', '2', '120', '1', '1', '0', '0', NULL, '30', '17MSI-IN', '24', NULL, NULL);

--------------------------------------------------------
-- ENI ERP ---------------------------------------------
--------------------------------------------------------
select * from enierp.dbo.Formation where LibelleLong like '%Manager%';
select * from enierp.dbo.Stagiaire;
select * from eniplanning.dbo.users;
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
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'BRIAND', 'Matthieu', 'Rue de la Mer', '85000', 'LA ROCHE SUR YON', 
'mat@gmail.com', '1995-06-01', 'NT',  '2018-06-01');
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'BELAUD', 'Valentin', 'Rue de la Vendée', '44230', 'ST SEBASTIEN SUR LOIRE', 
'val@gmail.com', Convert(datetime,'27-04-1988',103), 'NT',  Convert(datetime,'01-06-2018', 103));
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'FOUCHER', 'Baptiste', 'Route de la Beaujoire', '44300', 'NANTES', 
'baptiste@gmail.com', Convert(datetime,'10-08-1992',103), 'NT',  Convert(datetime,'01-06-2018', 103));
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('Mme', 'GEINDREAU', 'Carine', 'Rue Renan', '44000', 'NANTES', 
'carine@gmail.com', Convert(datetime,'27-04-1975',103), 'NT',  Convert(datetime,'01-06-2018', 103));
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('Mme', 'BLIN', 'Marina', 'Place Canclaux', '44000', 'NANTES', 
'marina@gmail.com', Convert(datetime,'29-06-1996',103), 'NT',  Convert(datetime,'01-06-2018',103));


-- INSERT STAGIAIRE PAR ENTREPRISE
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (???,???, CONVERT(datetime, '01/06/2018', 103), 'CDD', CONVERT(datetime, '01/09/2018', 103),CONVERT(datetime, '31/10/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (???,???, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (???,???, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '15/08/2018', 103),CONVERT(datetime, '15/08/2020', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (???,???, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');
