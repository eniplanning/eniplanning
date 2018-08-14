<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'entreprise';
    protected $primaryKey = 'CodeEntreprise';
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $map = [
        'RaisonSociale' => 'company_name',
        'Adresse1' => 'address1',
        'Adresse2' => 'address2',
        'Adresse3' => 'address3',
        'CodePostal' => 'zip_code',
        'Ville' => 'city',
        'Telephone' => 'phone',
        'Fax' => 'fax',
        'SiteWe' => 'web_site',
        'Email' => 'email',
        'Observation' => 'observation',
        'CodeTypeEnterprise' => 'code_type_company',
        'CodeRegion' => 'code_region',
        'CodeSecteur' => 'code_sector',
        'CodeOrganisme' => 'code_organization',
        'NomCommercial' => 'trade_name',
        'CodeContactEni' => 'code_contact_eni',
        'CodeOrganisationFavoris' => 'code_favorite_organization'
    ];
}
