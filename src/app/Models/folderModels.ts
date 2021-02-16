export class Folder {
  headerid: number;
  folderInfo: FolderInfo;
  subfolders: Folder[] = [];
  constructor(headerid: number, folderInfo: FolderInfo, subfolders: Folder[]) {
    this.headerid = headerid;
    this.folderInfo = folderInfo;
    this.subfolders = subfolders;
  }
}

export class FolderInfo {
  created: Date;
  folderContentObjects: FolderContentObjects
}

export class FolderContentObjects {
  articlesID: number[] = [];
  productID: number[] = [];
  foldersid: number[] = [];
}

export class Headers {
  id: number;
  title: string;
  keywords: string;
  description: string;
  mType: number;
  belongToID: number;

  constructor(id: number, title: string, keywords: string, description: string, mType: number) {
    this.id = id;
    this.title = title;
    this.keywords = keywords;
    this.description = description;
    this.mType = mType;
  }
}

export class Articles {
  id: number;
  headerid: number;
  content: string;
  pictures: Pictures[] = [];

}
export class Products {
  id: number;
  headerid: number;
  fulldescription: string;
  pictures: Pictures[] = [];
  price: number;
  factor: number;
  stock: number;
  providerid: number;
}

export class Pictures {
  id: number;
  headerid: number;
  path: string;
  constructor(id: number, headerid: number, path: string) {
    this.id = id;
    this.headerid = headerid;
    this.path = path;
  }
}
export class providerid {
  id: number;
  headerid: number;
  telephon: string;
  adress: string;
  idetificator: number;
  contactPerson: ContactPerson[] = [];

}

export class ContactPerson {
  id: number;
  headerid: number;
  telephon: string;
  adress: string;
  idetificator: number;
  pictures: Pictures[] = [];

  constructor()
  {

  }

}
enum mTypes {
  Article,
  Folder,
  Product
}
