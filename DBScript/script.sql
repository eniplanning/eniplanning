--------------------------------------------------------
-- ENI PLANNING ----------------------------------------
--------------------------------------------------------
-- INSERTION PLANNING
INSERT INTO eniplanning.dbo.plannings
(label, date_start_contract, date_end_contract, date_start_formation, date_end_formation,date_subscription,
nb_weeks_formation, nb_weeks_enterprise, stagiaire_id, formation_id, user_id)
VALUES
('planning 1 carine', CONVERT(datetime,'01-09-2018', 103),  CONVERT(datetime,'30-09-2019', 103), CONVERT(datetime,'01-10-2018', 103), 
CONVERT(datetime,'15-09-2019', 103), CONVERT(datetime,'18-06-2016', 103),
2, 2, 12, '17MSI-IN', 1);

-- INSERTION USER
insert into eniplanning.dbo.users(email, password, name, firstname, is_active, role_id, remember_token, created_at)
VALUES ('stephane.ollivier@gmail.com', 'password', 'OLLIVIER', 'Stéphane', 1, 1, 1,'2018-06-01' );

--------------------------------------------------------
-- ENI ERP ---------------------------------------------
--------------------------------------------------------
select * from enierp.dbo.Formation where LibelleLong like '%Manager%';
select * from enierp.dbo.Stagiaire;
select * from eniplanning.dbo.users;
select * from enierp.dbo.Entreprise;

-- INSERTION STAGIAIRES
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'BRIAND', 'Matthieu', 'Rue de la Mer', '85000', 'LA ROCHE SUR YON', 
'mat@gmail.com', '1995-06-01', 'NT',  '2018-06-01');
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'BELAUD', 'Valention', 'Rue de la Vendée', '44230', 'ST SEBASTIEN SUR LOIRE', 
'val@gmail.com', Convert(datetime,'27-04-1988',103), 'NT',  Convert(datetime,'01-06-2018', 103));
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('M.', 'FOUCHER', 'Baptiste', 'Route de la Beaujoire', '44300', 'NANTES', 
'baptiste@gmail.com', Convert(datetime,'10-08-1992',103), 'NT',  Convert(datetime,'01-06-2018', 103));
insert into enierp.dbo.stagiaire(Civilite, Nom, Prenom, Adresse1, Codepostal, Ville, 
Email, DateNaissance, CodeRegion, DateCreation) 
VALUES ('Mme', 'GEINDREAU', 'Carine', 'Rue Renan', '44000', 'NANTES', 
'carine@gmail.com', Convert(datetime,'27-04-1975',103), 'NT',  Convert(datetime,'01-06-2018', 103));
-- UDPATE STAGIAIRE
UPDATE enierp.dbo.Stagiaire SET Nom='GEINDREAU', Prenom='Carine' WHERE CodeStagiaire=12;
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


-- INSERT STAGIAIRE PAR ENTREPRISE
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (24, 3, CONVERT(datetime, '01/06/2018', 103), 'CDD', CONVERT(datetime, '01/09/2018', 103),CONVERT(datetime, '31/10/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (21, 6, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (22, 5, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '15/08/2018', 103),CONVERT(datetime, '15/08/2020', 103),'MS2I');
INSERT INTO enierp.dbo.StagiaireParEntreprise (CodeStagiaire,CodeEntreprise,DateLien,CodeTypeLien,DateDebutEnEts,DateFinEnEts,TitreVise)
VALUES (23, 4, CONVERT(datetime, '01/05/2018', 103), 'CDD', CONVERT(datetime, '01/12/2018', 103),CONVERT(datetime, '31/12/2019', 103),'MS2I');