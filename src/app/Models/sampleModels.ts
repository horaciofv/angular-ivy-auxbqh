// List giving Names and ID for all cases
export class NamesAndID {
  // Musician name. As Ringo,John
  name: string;
  // Musician id as: 1,2,3,4
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// List giving Names and ID for all cases
export class ListenedTimes {
  // Listening date as: 12/2/2020
  dDate: Date;
  // Musican ID (FK to musician id)
  id: number;
  constructor(dDate: Date, id: number) {
    this.dDate = dDate;
    this.id = id;
  }
}

//All musician datas packaged.
export class MusicianDatas {
  // Names and ID listed
  namesAndID: NamesAndID[] = [];
  // Times listeneds lists.
  listenedTimes: ListenedTimes[] = [];
}
