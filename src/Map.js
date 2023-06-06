/**
 * Google Map with markers.
 * @module Map
 */

import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { website } from './helper';

/**
 * Create a Map.
 *
 * @component Map
 * @prop {string} APIKey -
 * @prop {string} center -
 * @prop {string} zoom -
 * @prop {Array} markerPositions -
 * @prop {string} [height=600px] -
 * @prop {string} [width=800px] -
 * @returns {function} A Map component.
 */
export default function Map(props) {
	const { APIKey, center, zoom, markerPositions = [], height = '600px', width = '800px' } = props;

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: APIKey,
		language: website.getLanguage()
	});

	if (isLoaded) {
		return (
			<GoogleMap mapContainerStyle={{ height, width }} center={center} zoom={zoom}>
				{markerPositions.map((position, index) => {
					let { lat, lng } = position;

					if (!isNaN(lat) && !isNaN(lng)) {
						lat = Number(lat);
						lng = Number(lng);

						return <Marker key={index} position={{ lat, lng }}></Marker>;
					}
					return null;
				})}
			</GoogleMap>
		);
	} else if (loadError) return <div>Unable to load Map.</div>;

	return null;
}
