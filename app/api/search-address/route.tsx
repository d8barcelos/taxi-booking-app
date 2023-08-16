import { NextResponse } from "next/server";
const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest'
export async function GET(request:any) {

  const {searchParams} = new URL(request.url);

  const searchText = searchParams.get('q');

  const res = await fetch(BASE_URL+searchText+'pk.eyJ1IjoiZDhiYXJjZWxvcyIsImEiOiJjbGxlN3FnOWEwZ2NlM2ZwamQ4MWYxYzNoIn0.xagzVaURiDFTKgNb6Np2YQ')
  return NextResponse.json({data: searchText})
}