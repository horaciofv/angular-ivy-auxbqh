import { Map } from 'ol';
import { Image } from 'ol/layer';
import { ImageWMS } from 'ol/source';




export class GeoserverLayers {



  mDeleteLayer(mName: string, mMap: Map) {
    for (var i = 0; i < mMap.getLayers().getArray().length; i++) {
      let m: any = mMap.getLayers().getArray()[i];
      if (m.values_.source.params_ == undefined)
        continue;

      if (m.values_.source.params_.LAYERS === 'MinaheletABantal:' + mName) {
        mMap.removeLayer(m);
      }
    }
  }



  ReturnLayerByName(WMSadress: string, mName: string, zindex: number): Image {
    const mLayer: Image =
      new Image({
        visible: true,
        source: new ImageWMS({
          ratio: 1,
          url: WMSadress,
          params: {
            FORMAT: 'image/png',
            VERSION: '1.1.1',
            STYLES: '',
            LAYERS: 'MinaheletABantal:' + mName,
            exceptions: 'application/vnd.ogc.se_inimage',
          }
        })
      })//
    mLayer.setZIndex(zindex);
    return mLayer;
  }

  ReturnLayerByNameStyleAndFilter(mName: string, mStyle: string, mFilter: string, zindex: number): Image {
    return this.ReturnLayerByNameStyleAndFilter_01(mName, mStyle, 'projectid=' + mFilter, zindex)
  }


  ReturnLayerByNameStyleAndFilter_01(mName: string, mStyle: string, mFilter: string, zindex: number): Image {

    if (mFilter == undefined)
      mFilter = '-1';

    //mFilter = '72';
    //http://theia:8080/geoserver/MinaheletABantal/wms?service=WMS&version=1.1.0&request=GetMap&layers=MinaheletABantal:projectzonesview&styles=ZonesSelectedOne&bbox=119163.57033915613,373656.61310462496,266628.78805866954,798787.1837089723&width=330&height=768&srs=EPSG:2039&format=application/openlayers&cql_filter=projectid=23
    const mLayer: Image = new Image({
      className: mName,
      visible: true,
      source: new ImageWMS({
        ratio: 1,
        url: 'add' + '?cql_filter=' + mFilter,
        params: {
          FORMAT: 'image/png',
          VERSION: '1.1.1',
          STYLES: mStyle,
          LAYERS: 'MinaheletABantal:' + mName,
          exceptions: 'application/vnd.ogc.se_inimage',
        }
      })
    });
    //console.log(this.mconfig.mUrlWMS + '?cql_filter=projectid=' + mFilter)
    mLayer.setZIndex(zindex);
    return mLayer;
  }




  BasicLayer01(): Image {
    return this.ReturnLayerByName('gvulotshifut_pgstoreds', 0);
  }


  LayerZonesView(): Image {
    return this.ReturnLayerByName('projectzonesview', 1000);
  }

  SelectedPolygonLayer(): Image {
    return this.ReturnLayerByNameStyleAndFilter('projectzonesview', 'ZonesSelectedOne', null, 1001);
  }

}
