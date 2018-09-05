<?php

namespace Cuonggt\Dibi\Tests\Controller;

class TablesControllerTest extends AbstractControllerTest
{
    public function test_it_can_listing_all_tables()
    {
        $response = $this->get('/dibi/api/tables');

        $response->assertJson([
            ['name' => 'migrations'],
            ['name' => 'users'],
        ]);
    }
}
