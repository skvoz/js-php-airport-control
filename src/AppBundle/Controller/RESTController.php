<?php

namespace AppBundle\Controller;

use GuzzleHttp\Client;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RESTController
{
    /**
     * @Route("/api/data")
     * @return Response
     */
    public function dataAction()
    {
        $request = Request::createFromGlobals();

        $searchWord = $request->request->get('searchWord');

        $url = 'http://www.opodo.de/travel/service/geo/autocomplete;searchWord=%s;departureOrArrival=DEPARTURE;addSearchByCountry=true;addSearchByRegion=true;product=FLIGHT';
        if (strlen($searchWord) < 3) {
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

        return new Response(
            json_encode($data),
            $code,
            array('Content-Type' => 'application/json')
        );
    }
    /**
     * @Route("/api/send")
     * @return Response
     */
    public function sendAction()
    {
        $request = Request::createFromGlobals();

        $key = $request->request->get('airPortKey');
        $code = $request->request->get('airPortCode');

        return new Response(
            json_encode([
                'key' => $key,
                'code' => $code,
            ]),
            200,
            array('Content-Type' => 'application/json')
        );
    }
}