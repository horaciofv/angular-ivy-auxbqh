
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IntKeyValue } from '../Models/commonsModels';
import { ListenedTimes, MusicianDatas, NamesAndID } from '../Models/sampleModels';
import { MInitOL } from '../Scripts/Common/m_ol/init';
import {Commons } from '../Scripts/Common/Commons'
export class SampleController {


  //Class gives all data
  musicianDatas: MusicianDatas = new MusicianDatas();

  // Musician Autocomplete
  myControl_Musicians = new FormControl();
  filteredOptions_Musicians: Observable<NamesAndID[]>;
  // Current musician ID
  selectedMusicianID = -1;

  //Open Layer Basic Map
  mInitOL: MInitOL = new MInitOL();
  pythonArr: IntKeyValue[] = [];
  mcommons = new Commons;
  mNewID = '';

  // At start
  initController(mhttp: HttpClient) {
    var params = new HttpParams()
    const mQueryString: string = 'http://localhost:9000/assets/json/sample.json';

    const obs = mhttp.get<MusicianDatas>(mQueryString, { params })
      .subscribe((res) => {
        // Principal data package
        this.musicianDatas = res;
        //Musician autocompllete
        this.initControl_Musicians();
      });

    //Init map OL on internet;
    this.mInitOL.initMap4326();
    //this.mInitOL.InitMap2039();
  }


  TestPython(mhttp: HttpClient) {
    var params = new HttpParams()
    const mQueryString: string = 'http://localhost:7878/test1.py';

    const obs = mhttp.get<IntKeyValue[]>(mQueryString, { params })
      .subscribe((res) => {
        this.pythonArr = res;
      });
  }

  // Getting the listened counted times by id
  CountingListeningTimes(id: number) {
    return this.musicianDatas.listenedTimes.filter(x => x.id === id).reduce(function (acc, x) { return acc + 1 }, 0);
  }

  // Musician Autocomplete
  initControl_Musicians() {
    this.filteredOptions_Musicians = this.myControl_Musicians.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_Musicians(value))
      );
  }
  // Musician Autocomplete
  private _filter_Musicians(value: string): NamesAndID[] {
    const filterValue = value.toLowerCase();
    // Filtering by form control input
    return this.musicianDatas.namesAndID.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  // Getting ID as value from Musician List
  GetValue(name: string): number {
    return this.musicianDatas.namesAndID.find(option => option.name.toLowerCase() === name.toLowerCase()).id;
  }

  // UI Method. on mat-autocomplete optionSelected
  GetValueFromControl(event: any): void {
    // this.selectedMusicianID is the Current musician ID
    this.selectedMusicianID = this.GetValue(event.option.value);
  }

  GetNewID(): void{
    this.mNewID = this.mcommons.GetNewID(10);
  }
}
