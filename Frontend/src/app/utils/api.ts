import { CONFIG } from "./config";

export const API = {
    'userAPI' : (CONFIG.backend_url + 'user'),   
    'updatePasswordAPI' : (CONFIG.backend_url + 'userpassword'),   
    'loginAPI' : (CONFIG.backend_url + 'login'), 
    'backendstatusAPI' : (CONFIG.backend_url + 'backend'), 
    'eniDBstatusAPI' : (CONFIG.backend_url + 'enidbstatus'), 
    'erpDBstatusAPI' : (CONFIG.backend_url + 'erpstatus'), 
    'getPlanningAPI' : (CONFIG.backend_url + 'document/getplanning'),
    'storeActivityLogAPI' : (CONFIG.backend_url + 'activity-log'),
    'getActivityLogsAPI' : (CONFIG.backend_url + 'activity-log'),
    'purgeLogs' : (CONFIG.backend_url + 'activity-log/purge'),
    'backendTitre' : (CONFIG.backend_url + 'titre'),
    'formation' : (CONFIG.backend_url + 'formation'),
    'stagiaireParEntreprise':  (CONFIG.backend_url + 'stagiaireparentreprise'),
    'entreprise':  (CONFIG.backend_url + 'entreprise'),
    'coursPlanning':  (CONFIG.backend_url + 'planningcoursebyplanning'),
    'module':  (CONFIG.backend_url + 'getModuleByLibelleCourt'),
    'complementaryModule':  (CONFIG.backend_url + 'complementaryModule'),
    'complementaryCourse':  (CONFIG.backend_url + 'complementaryCourse'),
};