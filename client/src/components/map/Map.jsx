import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import house from "/house.svg";

import "./map.scss";

const Map = ({ projects, initLng, initLat, initZoom = 7 }) => {
  mapboxgl.accessToken = import.meta.env.VITE_API_MAP;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(initLng);
  const [lat, setLat] = useState(initLat);
  const [zoom, setZoom] = useState(initZoom);

  const points = projects.map((project) => {
    return {
      ...project,
      type: "Feature",
      properties: {
        projectId: project.id,
        projectName: project.name,
        projectDescription: project.location,
      },
      geometry: {
        type: "Point",
        coordinates: [project.geometry[0], project.geometry[1]],
      },
    };
  });

  const featuresCollection = { type: "FeatureCollection", features: points };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("load", () => {
      map.current.addSource("projects", {
        type: "geojson",

        data: featuresCollection,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      });

      map.current.addLayer({
        id: "clusters",
        type: "circle",
        source: "projects",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#007bfb",
            100,
            "#007bfb",
            750,
            "#007bfb",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.current.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "projects",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });
      let img = new Image(20, 20);
      img.onload = () => map.current.addImage("house", img);
      img.src = house;

      map.current.addLayer({
        id: "unclustered-point",
        type: "symbol",
        source: "projects",
        layout: { "icon-image": "house", "icon-size": 0.95 },
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#007bfb",
          "circle-radius": 7,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
        },
      });

      map.current.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties.cluster_id;
        map
          .getSource("projects")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      map.current.on("click", "unclustered-point", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = e.features[0].properties.projectName;
        const id = e.features[0].properties.projectId;
        console.log(e.features[0]);

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<a href="/projects/${id}">${name}</a>`)
          .addTo(map.current);
      });
    });

    map.current.on("mouseenter", "clusters", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });
    map.current.on("mouseleave", "clusters", () => {
      map.current.getCanvas().style.cursor = "";
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
  }, []);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
