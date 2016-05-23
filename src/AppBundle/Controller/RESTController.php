<?php

namespace AppBundle\Controller;

use GuzzleHttp\Client;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RESTController
{
    /**
     * @Route("/api/data/{searchWord}")
     * @param string $searchWord
     * @return Response
     */
    public function dataAction($searchWord='')
    {
        $url = 'http://www.opodo.de/travel/service/geo/autocomplete;searchWord=%s;departureOrArrival=DEPARTURE;addSearchByCountry=true;addSearchByRegion=true;product=FLIGHT';
        if (strlen($searchWord) < 3 ) {
            $code = 200;
            $data = [];
        } else {
            $client = new Client();
            $res = $client->request('GET',
                sprintf($url, $searchWord));

            $code = $res->getStatusCode();

            $data = [];
            if ($code === 200) {
                $data = $res->getBody()->getContents();
            }
        }

//
//
//echo '<pre>';
//        var_dump( $res->getStatusCode());
//// "200"
//        var_dump( $res->getHeader('content-type'));
//// 'application/json; charset=utf8'
//        var_dump( $res->getBody()->getContents());
//        echo '</pre>';
//        die;

        return new Response(
            json_encode($data),
            $code,
            array('Content-Type' => 'application/json')
        );

    }
}