<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'administrateur@campus-eni.fr',
            'password' => '$2y$10$mMAHg8hgmiNhYmnTfXfhFupO/tN/yHZ6HJEozEh8yDNOMmleUW.0a',
            'name' => 'Super',
            'firstname' => 'Administrateur',
            'role_id' => 3
        ]);
    }
}
